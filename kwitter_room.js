// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDd37A-ZCieegV9Zv4owd1F1_vaEBBbxJM",
    authDomain: "lets-chat-web-app-b1353.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-b1353-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-b1353",
    storageBucket: "lets-chat-web-app-b1353.appspot.com",
    messagingSenderId: "388424142643",
    appId: "1:388424142643:web:b360ed44506aa530393846"
  };
   
  user_name = localStorage.getItem("user_name");

  document.getElementById("user_name").innerHTML ="Welcome" + user_name +"!" ;


  function addRoom()
  {
    room_name = document.getElementById("room_name").value;
    firebase.database().ref("/").child(room_name).update({
        purpose: "adding room name "
    });
    localStorage.setItem("room_name" , room_name );
    window.location = "kwitter_page.html";
  }

  function addUser()
  {
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });

  }



  

    function redirectToRoomName(name)
    {
        console.log(name);
        localStorage.setItem("room_name", name);
        window.location = "kwitter_page.html";
    }

    function getData() {firebase.database().ref("/").on('value',
function(snapshot) {document.getElementById("output").innerHTML =
"";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
Room_names = childKey;
//Start code
console.log("Room Name - " + Room_names);
   row="<div class='room_name' id="+Room_names+"onclick='redirectToRoomName(this.id)'>#" + Room_names+"</div><hr>";
   document.getElementById("output").innerHTML+=row;
//End code
});});}
getData();