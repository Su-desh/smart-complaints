//! nithin, this file is dedicated to user complaints



//!this function will be called when the user want to submit a new complain
function registerComplaint(uid, complainData) {
    const db = firebase.firestore(); // Initialize Firestore
  
    // Reference to the "complaints" collection under the specified admin document
    const complaintsCollection = db.collection('admin/' + uid + '/complaints');
  
    // Add a new document to the "complaints" collection with the provided complaint data
    complaintsCollection.add(complainData)
      .then((docRef) => {
        console.log('Complaint registered with ID: ', docRef.id);
      })
      .catch((error) => {
        console.error('Error registering complaint: ', error);
      });
  }
  
  // Example usage:
  const complaintData = {
    complaint_title: 'Issue with Service',
    complaint_date: new Date().toUTCString(),
    full_complaint: 'I had a problem with the service provided.',
    complaint_by: 'John Doe',
    department: 'Customer Support',
    //!nithin, this field is very imp we will fetch the complains list using 
    //!this filed based on status to show on the main dashboard 
    //!to show how many are solved , pending, or 'processing'
    'complain_status': 'Processing' // or 'Completed' or //'Pending'
  };
  

  //!nithin, this function will be used to delete a complain
  function deleteComplaint(adminUID, complaintID) {
    const db = firebase.firestore(); // Initialize Firestore
  
    // Reference to the specific complaint document to delete
    const complaintDocRef = db.doc(`admin/${adminUID}/complaints/${complaintID}`);
  
    // Delete the document
    complaintDocRef.delete()
      .then(() => {
        console.log('Complaint deleted successfully.');
      })
      .catch((error) => {
        console.error('Error deleting complaint: ', error);
      });
  }
  

  //!nithin, this function will be called when we want to update the complain status
  function updateComplaintStatus(adminUID, complaintID, newStatus) {
    const db = firebase.firestore(); // Initialize Firestore
  
    // Reference to the specific complaint document to update
    const complaintDocRef = db.doc(`admin/${adminUID}/complaints/${complaintID}`);
  
    // Update the complaint_status field
    return complaintDocRef.update({ complaint_status: newStatus })
      .then(() => {
        console.log(`Complaint status updated to ${newStatus} successfully.`);
      })
      .catch((error) => {
        console.error('Error updating complaint status: ', error);
      });
  }
  