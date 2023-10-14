//!hello to whoever reading this file code
//!this file code are written by (sudesh)

//!this code is related to firebase(database)
//!so please think twice before changing anything in this file 


//! to initialize the firebase project
var firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_AUTH_DOMAIN",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_STORAGE_BUCKET",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);



//!this function will create the account for admin
function createAdminAccount(email, password) {
    firebase.Auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Admin account created successfully. User ID: ', user.uid);


            //! nithin, we are passing this function after succesfull creation of the account
            //!so that the admin data is store in the firestore (admin collection)
            //!if you want to add more fields for the admin , add here and pass as parameter
            createAdminDocument('NithinAdmin', 'admin_UID', 'adminPassword123');

        })
        .catch((error) => {
            console.error('Error creating admin account: ', error);
        });
}

//!nithin, you have to take the username and password from the admin 
//!and call this function with email and password parameters to create admin
createAdminAccount('admin@gmail.com', 'adminPassword');



function createAdminDocument(adminName, adminUID, adminPassword) {
    const db = firebase.firestore(); // Initialize Firestore

    // Reference to the "admin" collection
    const adminCollection = db.collection('admin');

    // Use the admin's UID as the document name
    const adminDocRef = adminCollection.doc(adminUID);

    // Set the data for the admin document
    const adminData = {
        adminname: adminName,
        adminuid: adminUID,
        adminpassword: adminPassword
    };

    // Add the document to the "admin" collection with the UID as the document name
    adminDocRef.set(adminData)
        .then(() => {
            console.log('Admin document created with UID as the document name.');
        })
        .catch((error) => {
            console.error('Error creating admin document: ', error);
        });
}




//!nithin this funtion will be called when the admin already have account 
//!and we need to give entry to the admin in website
function signInAdmin(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('Admin signed in. User ID: ', user.uid);
            // You can add your code to redirect or perform actions after successful login here.
        })
        .catch((error) => {
            console.error('Error signing in admin: ', error);
        });
}

