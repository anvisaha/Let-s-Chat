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
    document.getElementById("user_name").innerHTML = "Welcome " + user_name;

  function addRoom() {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}

function addRoom() { 
  room_name = document.getElementById("room_name").value; 
  firebase.database().ref("/").child(room_name).update({ 
        purpose : "adding room name" 
    }); 
    localStorage.setItem("room_name", room_name); 
    window.location = "kwitter_page.html"; 
}

function getData() { firebase.database().ref("/").on('value', function(snapshot) { 
    document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; 
          Room_names = childKey; 
          console.log("Room Name - " + Room_names); 
          row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
          document.getElementById("output").innerHTML += row; 
    }); }); 
}

function redirectToRoomName(name) {
    console.log(name);
    localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html"; 
}


getData();

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}