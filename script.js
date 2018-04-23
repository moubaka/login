"use-strict";



function login() {
    const email = document.getElementById("signin-email").value,
        password = document.getElementById("signin-password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(function (response) {
            debugger;
            console.log("response SignIn: " + response);
        })
        .catch(function (error) {
            console.log('error SignIn: ' + error);
        });
}

function register() {
    const email = document.getElementById("signup-email").value,
        password = document.getElementById("signup-password").value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then(function (response) {
            debugger
            console.log("response SignUp: ", response);
        })
        .catch(function (error) {
            console.log("error SignUp: ", error)
        });

}

function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (response) {

        console.log("Google Login response: ", response);

    }).catch(function (error) {

        console.log("Google Login error: ", error)
    });

}

function fbLogin() {
    var provider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function (response) {

        console.log('FB Login response: ', response);

    }).catch(function (error) {
        console.log('FB login error', error);

    });
}

function gitLogin()
{
    var provider = new firebase.auth.GithubAuthProvider();
    firebase.auth().signInWithPopup(provider).then(function(result) {
            var user = result.user;
			console.log('git login response',response);
      
      }).catch(function(error) {
       console.log('git login error',error);

      });

}