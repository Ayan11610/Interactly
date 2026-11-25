// File: frontend/services/passwordRules.js
// Purpose: The password rule from the design ("At least 8 characters with a number")
//          and a simple strength score for the IAM-06 strength meter.
// Screens: IAM-02, IAM-04, IAM-06

// Returns an error message, or "" when the password is good enough
export function checkPassword(password) {
  if (password.length < 8) {
    return "Use at least 8 characters.";
  }
  if (!/[0-9]/.test(password)) {
    return "Add at least one number.";
  }
  return "";
}

// Scores a password from 0 to 4: length 8+, a number, a capital letter, length 12+
export function passwordStrength(password) {
  let score = 0;
  if (password.length >= 8) {
    score = score + 1;
  }
  if (/[0-9]/.test(password)) {
    score = score + 1;
  }
  if (/[A-Z]/.test(password)) {
    score = score + 1;
  }
  if (password.length >= 12) {
    score = score + 1;
  }
  return score;
}

// Short description under the password box, e.g. "Strong: 13 characters, a number"
export function describeStrength(password) {
  const score = passwordStrength(password);
  let word = "Weak";
  if (score >= 4) {
    word = "Strong";
  } else if (score >= 2) {
    word = "Okay";
  }

  let detail = password.length + " characters";
  if (/[0-9]/.test(password)) {
    detail = detail + ", a number";
  }
  return word + ": " + detail;
}
