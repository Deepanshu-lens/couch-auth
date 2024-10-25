// import PouchDB from "pouchdb";
// import PouchDBAuthentication from "pouchdb-authentication";

// // Add authentication plugin to PouchDB
// PouchDB.plugin(PouchDBAuthentication);

// // Create a new PouchDB instance with db Url
// const db = new PouchDB("https://couch.lenscorp.cloud/pb/view");

// export default db;

// src/pouchdb-setup.js
import PouchDB from 'pouchdb';

const localDB = new PouchDB('view_localdb');
const remoteDB = new PouchDB('https://admin:admin@1234567890@couch.lenscorp.cloud/pb/view');

export default localDB;

// Function to handle user signup via the NestJS endpoint
// const signupUser = async (username, password) => {
//   try {
//     const response = await fetch('http://localhost:3000/auth/signup', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({ username, password }),
//     });

//     if (response.ok) {
//       const userDoc = {
//         _id: `user:${username}`,
//         username,
//       };
//       await addDocument(userDoc);
//       console.log('Signup successful and user added to local DB');
//       return true;
//     } else {
//       const errorResponse = await response.json();
//       throw new Error(`Signup failed: ${errorResponse.message}`);
//     }
//   } catch (error) {
//     console.error('Error during signup:', error);
//     return false;
//   }
// };

// Function to handle user logout via the NestJS endpoint
// const logoutUser = async () => {
//   try {
//     const response = await fetch('http://localhost:3000/auth/logout', {
//       method: 'POST',
//       credentials: 'include', // Include cookies for session management
//     });

//     if (response.ok) {
//       console.log('Logout successful');
//       // Optionally, you can clear the local DB or perform other actions
//     } else {
//       const errorResponse = await response.json();
//       throw new Error(`Logout failed: ${errorResponse.message}`);
//     }
//   } catch (error) {
//     console.error('Error during logout:', error);
//   }
// };


// Export functions for use in other parts of your application
// export { addDocument, fetchDocuments, deleteDocument, signupUser, logoutUser };