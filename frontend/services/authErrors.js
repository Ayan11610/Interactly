// File: frontend/services/authErrors.js
// Purpose: Turns Supabase auth error messages into short, friendly sentences for the forms.
// Screens: IAM-01 to IAM-09

// Supabase error text (lower case, partial match) -> what we show the user
const knownErrors = [
  { match: "invalid login credentials", text: "That email and password don't match. Check them and try again." },
  { match: "email not confirmed", text: "Please confirm your email first. We can send you a new code." },
  { match: "user already registered", text: "An account with this email already exists. Try logging in." },
  { match: "token has expired or is invalid", text: "That code is wrong or has expired." },
  { match: "otp_expired", text: "That code is wrong or has expired." },
  { match: "for security purposes", text: "Please wait a minute before asking for another email." },
  { match: "rate limit", text: "Too many emails were sent. Please wait a little and try again." },
  { match: "password should be", text: "That password is too weak. Use at least 8 characters with a number." },
  { match: "same password", text: "Pick a password you have not used here before." },
  { match: "anonymous sign-ins are disabled", text: "Joining as a guest is turned off right now." },
  { match: "failed to fetch", text: "Can't reach the server. Check your internet connection." },
];

// Returns a friendly message for any error object or string
export function friendlyAuthError(error) {
  let message = "";
  if (typeof error === "string") {
    message = error;
  } else if (error && error.message) {
    message = error.message;
  }

  const lower = message.toLowerCase();
  for (let i = 0; i < knownErrors.length; i++) {
    if (lower.includes(knownErrors[i].match)) {
      return knownErrors[i].text;
    }
  }
  return "Something went wrong. Please try again.";
}
