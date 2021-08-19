
  var firebaseConfig = {
    apiKey: "AIzaSyDc89zi4lxVAdN-0er7xPU7klipdlz2pZ4",
    authDomain: "wechat-4a524.firebaseapp.com",
    projectId: "wechat-4a524",
    storageBucket: "wechat-4a524.appspot.com",
    messagingSenderId: "300841143605",
    appId: "1:300841143605:web:f3d7778aeb0c8fd498d07c"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code

      //End code
      });});}
getData();
