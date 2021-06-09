//firebase links

var firebaseConfig = {
    apiKey: "AIzaSyC4quzmGBzeFW2QeLCLUUeVdFOnVL3JGQQ",
    authDomain: "project-43-8173a.firebaseapp.com",
    databaseURL: "https://project-43-8173a-default-rtdb.firebaseio.com",
    projectId: "project-43-8173a",
    storageBucket: "project-43-8173a.appspot.com",
    messagingSenderId: "286538843693",
    appId: "1:286538843693:web:abb58a45d1b3c203549aa4",
    measurementId: "G-MDDGJGHT3R"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  function addRoom() {
    user_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
}