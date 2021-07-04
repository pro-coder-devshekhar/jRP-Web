var firebaseConfig = {
apiKey: "AIzaSyBRny5R5kKW-wPXYVC6Rzq4lI1JvGbSYh0",
authDomain: "new-id-35fba.firebaseapp.com",
databaseURL: "https://new-id-35fba.firebaseio.com",
projectId: "new-id-35fba",
storageBucket: "new-id-35fba.appspot.com",
messagingSenderId: "623141367381",
appId: "1:623141367381:web:301eb6e3f3d79903252edc",
measurementId: "G-6SZX4WMZ32"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.initializeApp(config);
firebase.auth.Auth.Persistence.LOCAL;
var firestore = firebase.firestore();
const docRef = firestore.doc("users/naresh");


$("#btn-login").click(function(userCon)
{
    var email= $("#email").val();
    var password= $("#password").val();
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
    } else {
        alert(errorMessage);
    }
    console.log(error);
});
});

$("#btn-logout").click(function()
{
    firebase.auth().signOut();
    console.log("Log out success");
//    window.location.href="signin.html";
});

$('#manage').click(function(){
    console.log("The Manage Connections button was pressed");
    console.log("Now Heading towards the connections.html");
//    window.location.href=;
});

$('#createConn').click(function(){
    var freshName = $('#freshName').val();
    var GST = $('#freshGstin').val();
    var addr = $('#freshAddr').val();
    var balance = $('#Balance').val(); 
    firestore.collection("users").doc("naresh").collection("connections").doc(freshName).set({
        NAME:freshName,
        GSTIN:GST,
        ADDRESS:addr,
        BALANCE:balance
    }).then(function(){console.log("Status saved!");}).catch(function (error){
    console.log("Got an error: ", error);
    });

});

$('#modifyConn').click(function(){
    var freshNameM = $('#freshNameM').val();
    var GSTM = $('#freshGstinM').val();
    var addrM = $('#freshAddrM').val();
    var balanceM = $('#BalanceM').val();  firestore.collection("users").doc("naresh").collection("connections").doc(freshNameM).set({
        NAME:freshNameM,
        GSTIN:GSTM,
        ADDRESS:addrM,
        BALANCE:balanceM
    }).then(function(){console.log("Status saved!");}).catch(function (error){
    console.log("Got an error: ", error);
});

});

//$("#loader").click(function(){
//
//firestore.collection("users/naresh/connections").get().then((querySnapshot) => {
//    querySnapshot.forEach((doc) => {
//        var select = document.getElementById("Rp");
//        console.log(`${doc.id} => ${doc.data()}`);
//        console.log(`${doc.id}`);
//        var option = document.createElement('option');
//        option.text = option.value = `${doc.id}`;
//        select.add(option, 0);
////        var option = document.createElement('option');
////        option.text = option.value = ${doc.id};
//    });
//});
//
//});

