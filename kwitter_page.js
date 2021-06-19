//firebase links

var firebaseConfig = {
    apiKey: "AIzaSyCsu04_xO1Np-SN47MXRUIra5zb3Cm-8vs",
    authDomain: "let-s-chat-website.firebaseapp.com",
    databaseURL: "https://let-s-chat-website-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-website",
    storageBucket: "let-s-chat-website.appspot.com",
    messagingSenderId: "863856706768",
    appId: "1:863856706768:web:ccd111c954b9b0d9534ad5",
    measurementId: "G-EBF6C24NCH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send() {
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name: user_name,
            message: msg,
            likes: 0
      });
      document.getElementById("msg").value = "";
    }


function getData() { firebase.database().ref("/"+ room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}