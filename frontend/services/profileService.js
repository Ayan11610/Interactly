// File: frontend/services/profileService.js
// Purpose: Calls our backend's profile routes with plain fetch.
//          GET /api/profiles/me reads the profile; POST /api/profiles/me creates it.
// Screens: IAM-01 to IAM-08 and every logged-in page

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Sends one request with the login token and returns { status, body }
async function callProfileApi(method, accessToken) {
  const response = await fetch(apiUrl + "/api/profiles/me", {
    method: method,
    headers: { Authorization: "Bearer " + accessToken },
  });
  let body = {};
  try {
    body = await response.json();
  } catch (err) {
    body = {};
  }
  return { status: response.status, body: body };
}

// Returns the user's profile, creating it on the first login.
// Throws an Error with a readable message if the backend refuses.
export async function loadOrCreateProfile(accessToken) {
  const found = await callProfileApi("GET", accessToken);
  if (found.status === 200) {
    return found.body.profile;
  }

  if (found.status === 404) {
    const created = await callProfileApi("POST", accessToken);
    if (created.status === 200 || created.status === 201) {
      return created.body.profile;
    }
    throw new Error(created.body.error || "Could not create your profile");
  }

  throw new Error(found.body.error || "Could not load your profile");
}
