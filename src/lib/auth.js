// @ts-nocheck
import db from "./db";

// Sign up with pouchdb authentication
export async function signup(username, password) {
  try {
    const response = await db.signUp(username, password);
    return response;
  } catch (error) {
    console.error("Sign up error:", error);
    throw error;
  }
}

// Log in with pouchdb authentication
export async function login(username, password) {
  try {
    const response = await db.logIn(username, password);
    return response;
  } catch (error) {
    console.error("Log in error:", error);
    throw error;
  }
}

// Log out with pouchdb authentication
export async function logOut() {
  try {
    await db.logOut();
  } catch (error) {
    console.error("Log out error:", error);
    throw error;
  }
}

// Get current session information
export async function getSession() {
  try {
    const session = await db.getSession();
    return session;
  } catch (error) {
    console.error("Get session error:", error);
    throw error;
  }
}
