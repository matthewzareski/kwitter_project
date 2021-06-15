
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyAPyyw7-uVrTOg_PATti-Kb5VE3VNx0qpI",
      authDomain: "kwitter-1219c.firebaseapp.com",
      databaseURL: "https://kwitter-1219c-default-rtdb.firebaseio.com",
      projectId: "kwitter-1219c",
      storageBucket: "kwitter-1219c.appspot.com",
      messagingSenderId: "466220643678",
      appId: "1:466220643678:web:521aeefff5a9bf88360bcf"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
