// File: frontend/services/authStorage.js
// Purpose: Decides where Supabase keeps the login: localStorage when "Keep me logged in"
//          is ticked (survives closing the browser), sessionStorage when it is not
//          (cleared when the browser closes).
// Screens: IAM-01 ("Keep me logged in on this device")

const rememberKey = "interactly-remember-me";

// True when the code runs in the browser (not during server rendering)
function inBrowser() {
  return typeof window !== "undefined";
}

// Saves the visitor's choice. Call it just before logging in.
export function setRememberMe(remember) {
  if (!inBrowser()) {
    return;
  }
  if (remember) {
    window.localStorage.setItem(rememberKey, "yes");
  } else {
    window.localStorage.removeItem(rememberKey);
  }
}

// Reads the choice. Sign-up and email verification keep the login by default.
function shouldRemember() {
  return window.localStorage.getItem(rememberKey) !== null;
}

// The storage object Supabase uses. It has the same three methods as localStorage.
export const authStorage = {
  getItem(key) {
    if (!inBrowser()) {
      return null;
    }
    const saved = window.localStorage.getItem(key);
    if (saved !== null) {
      return saved;
    }
    return window.sessionStorage.getItem(key);
  },
  setItem(key, value) {
    if (!inBrowser()) {
      return;
    }
    if (shouldRemember()) {
      window.localStorage.setItem(key, value);
      window.sessionStorage.removeItem(key);
    } else {
      window.sessionStorage.setItem(key, value);
      window.localStorage.removeItem(key);
    }
  },
  removeItem(key) {
    if (!inBrowser()) {
      return;
    }
    window.localStorage.removeItem(key);
    window.sessionStorage.removeItem(key);
  },
};
