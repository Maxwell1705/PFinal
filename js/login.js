// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js";
      // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyChAc1vkuUvpUk6sv_d6PoYXopLhNHBW2k",
    authDomain: "proyecto-24a74.firebaseapp.com",
    databaseURL: "https://proyecto-24a74-default-rtdb.firebaseio.com",
    projectId: "proyecto-24a74",
    storageBucket: "proyecto-24a74.appspot.com",
    messagingSenderId: "226913214646",
    appId: "1:226913214646:web:1d3b8e94e69fd06ed5c617",
    measurementId: "G-V1RSGC5N9T"
  };

 // Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




// Iniciar Sesión
function login(){
    event.preventDefault();
    let email = document.getElementById('email').value;
    let contra = document.getElementById('contraseña').value;

    if(email == "" || contra == ""){
        alert('Complete los campos');
        return;
    }
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, contra).then((userCredential) => {
    alert('Bienvenido ' + email);
    sessionStorage.setItem('isAuth',"true");
    window.location.href = 'administrador.html';
    
    })
    .catch((error) => {
        alert('Usuario y o contraseña incorrectos')
    });

}



var btnCerrarSesion = document.getElementById('btnCerrarSesion');

if(btnCerrarSesion){
    btnCerrarSesion.addEventListener('click',  (e)=>{
        signOut(auth).then(() => {
        alert("SESIÓN CERRADA")
        window.location.href="login.html";
        // Sign-out successful.
        }).catch((error) => {
        // An error happened.
        });
    });
}

onAuthStateChanged(auth, async user => {
    console.log(window.location.pathname);
    if (user) {
        if (window.location.pathname.includes("login")) {
            window.location.href = "/html/administrador.html";
        }
    } else {
        if (window.location.pathname.includes("administrador")) {
            window.location.href = "/html/login.html";
        }
    }
});

var botonLogin = document.getElementById('btnIniciarSesion');

if(botonLogin){
    botonLogin.addEventListener('click', login);
}