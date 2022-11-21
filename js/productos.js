 // Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getDatabase, onValue, ref, set, child, get, update, remove} from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { getStorage,ref as refStorage, uploadBytes, getDownloadURL } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-storage.js";

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
const db = getDatabase();
const storage = getStorage();

// Generar Productos
let productos = document.getElementById('contenido-productos');
window.addEventListener('DOMContentLoaded',mostrarProductos)

function mostrarProductos(){
    const dbRef = ref(db, "productos");

    onValue(dbRef,(snapshot) => {
        productos.innerHTML = "";
        snapshot.forEach((childSnapshot) => {
            const childKey = childSnapshot.key;
            const childData = childSnapshot.val();
        
        if(childData.estatus=="0"){
            productos.innerHTML +=
            "<div class="+"'producto'"+"> " +
            "<img src="+" "+childData.urlImagen+" "+"> " +
            "<p class='nombre'>"+childData.nombre +"</p>"+
            "<p class='descripcion' style='font-size: .9em;'> "+childData.descripcion +"</p>"+
            "<p class='precio'>$"+childData.precio +"</p>"+
            "<a class='boton-comprar'>Comprar</a>"+
            "</div>";
        }
        
        });
    },
    {
        onlyOnce: true,
    }
    );
}



