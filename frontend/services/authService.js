// File: frontend/services/authService.js
// Purpose: Small helpers around Supabase Auth for the login and sign-up screens.
//          Every helper returns { error } with a friendly message, or { error: "" } on success.
// Screens: IAM-01 to IAM-09
// Diagram: sequence 5.5.1 (Register and Sign Up), 5.5.2 (Login and Authentication)

import { supabase } from "./supabaseClient";
import { setRememberMe } from "./authStorage";
import { friendlyAuthError } from "./authErrors";
import { loadOrCreateProfile } from "./profileService";

// Creates an account. role is "instructor" or "participant". Supabase emails a 6-digit code.
export async function signUp(name, email, password, role) {
  setRememberMe(true);
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
    options: { data: { name: name, role: role } },
  });
  if (error) {
    return { error: friendlyAuthError(error) };
  }
  // Supabase hides "already registered" by returning a user with no identities
  if (data.user && data.user.identities && data.user.identities.length === 0) {
    return { error: friendlyAuthError("user already registered") };
  }
  return { error: "" };
}

// Logs in and returns the profile, so the page can send the user to the right place.
// notConfirmed is true when the email still needs its code.
export async function logIn(email, password, remember) {
  setRememberMe(remember);
  const { data, error } = await supabase.auth.signInWithPassword({ email: email, password: password });
  if (error) {
    const notConfirmed = error.message.toLowerCase().includes("email not confirmed");
    return { error: friendlyAuthError(error), notConfirmed: notConfirmed, profile: null };
  }
  try {
    const profile = await loadOrCreateProfile(data.session.access_token);
    return { error: "", notConfirmed: false, profile: profile };
  } catch (err) {
    return { error: friendlyAuthError(err), notConfirmed: false, profile: null };
  }
}

// Checks the 6-digit code from the sign-up email. On success the user is logged in.
export async function verifyEmailCode(email, code) {
  const { data, error } = await supabase.auth.verifyOtp({ email: email, token: code, type: "email" });
  if (error) {
    return { error: friendlyAuthError(error), profile: null };
  }
  try {
    const profile = await loadOrCreateProfile(data.session.access_token);
    return { error: "", profile: profile };
  } catch (err) {
    return { error: friendlyAuthError(err), profile: null };
  }
}

// Sends a fresh sign-up code to the same email
export async function resendEmailCode(email) {
  const { error } = await supabase.auth.resend({ type: "signup", email: email });
  if (error) {
    return { error: friendlyAuthError(error) };
  }
  return { error: "" };
}

// Emails a password reset link that opens /reset-password
export async function sendPasswordReset(email) {
  const { error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: window.location.origin + "/reset-password",
  });
  if (error) {
    return { error: friendlyAuthError(error) };
  }
  return { error: "" };
}

// Saves a new password for the user who opened the reset link
export async function saveNewPassword(password) {
  const { error } = await supabase.auth.updateUser({ password: password });
  if (error) {
    return { error: friendlyAuthError(error) };
  }
  return { error: "" };
}

// Signs in without an account (guests). Used by the Join page (SM-13) in step 6.
export async function signInAsGuest() {
  setRememberMe(false);
  const { data, error } = await supabase.auth.signInAnonymously();
  if (error) {
    return { error: friendlyAuthError(error), profile: null };
  }
  try {
    const profile = await loadOrCreateProfile(data.session.access_token);
    return { error: "", profile: profile };
  } catch (err) {
    return { error: friendlyAuthError(err), profile: null };
  }
}

// Logs out on this device
export async function logOut() {
  await supabase.auth.signOut();
}

// Where each role goes after logging in (temporary pages until steps 4 and 6)
export function homePathForRole(role) {
  if (role === "instructor") {
    return "/instructor";
  }
  return "/join";
}
