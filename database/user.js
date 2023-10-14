


//!nithin, this function will be used to create the account for user(admin will do it)
function createUserAccount(email, password) {
    firebaseAuth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log('user account created successfully. User ID: ', user.uid);


            //! nithin, we are passing this function after succesfull creation of the user account
            //!so that the user data is store in the firestore (admin/doc/users/id collection)
            //!if you want to add more fields for the user , add here and pass as parameter
            createUserDocument('newuser', 'useruid', 'userPassword123');

        })
        .catch((error) => {
            console.error('Error creating user account: ', error);
        });
}


//!nithin, this function will be called when we want to store the user data 
//!after admin create the account for new user
function createUserDocument(username, userUID, userPassword) {
    const db = firebase.firestore(); // Initialize Firestore
  
  // Reference to the "users" collection under the specified admin document
  const usersCollection = db.collection('admin/' + adminUID + '/users');


    // Use the user's UID as the document name
    const userDocRef = usersCollection.doc(userUID);
  
    // Set the data for the user document
    const userData = {
      username: username,
      useruid: userUID,
      userpassword: userPassword
    };
  
    // Add the document to the "users" collection with the UID as the document name
    userDocRef.set(userData)
      .then(() => {
        console.log('User document created with UID as the document name.');
      })
      .catch((error) => {
        console.error('Error creating user document: ', error);
      });
  }
  