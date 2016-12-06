// Initialize Firebase
var config = {
  apiKey: "AIzaSyCLMp0idXtc852YsbXLsj3io4c_rLVmKS0",
  authDomain: "tutorsite-7f25e.firebaseapp.com",
  databaseURL: "https://tutorsite-7f25e.firebaseio.com",
  storageBucket: "tutorsite-7f25e.appspot.com",
  messagingSenderId: "364721637086"
};
firebase.initializeApp(config);
var mydatabase = firebase.database();

// Submit button pressed
$('#submit').click(function(e) {
  console.log("BUTTON WAS CLICKED");
  e.preventDefault();
  submitNewUser();
});

function submitNewUser() {
    var user_name = $('#user_name').val();
    var user_email = $('#user_email').val();
    var user_help = $('#user_help').val();

    var postData = {
        name: user_name,
        email: user_email,
        help: user_help
    };

    postToFirebase(postData);
}

function postToFirebase(postData) {
    var newPostKey = firebase.database().ref().push().key;
    var users = {};
    users['/signup/' + newPostKey] = postData;
    firebase.database().ref().update(users);
}

function initMap() {
    // Start Map And Set Center
    var center = {lat: 37.7735139, lng: -122.4178071};
    var map = new google.maps.Map(document.getElementById('map'), {
        scrollwheel: false,
        scaleControl: false,
        zoom: 15,  
        center: center
    });
    var options = { 
        types: ['(cities)'],
        componentRestrictions: {country: "south africa"}
    };

    var marker = new google.maps.Marker({
      position: center,
      map: map
    });
}