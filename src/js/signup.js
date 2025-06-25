  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

     
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyAmheIuKu1okykIT3HM7UDQEMiBe6xHcKk",
    authDomain: "dayspring-live.firebaseapp.com",
    projectId: "dayspring-live",
    storageBucket: "dayspring-live.firebasestorage.app",
    messagingSenderId: "1017427992394",
    appId: "1:1017427992394:web:79f4bb4d21e469025cebb3"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
   const auth = getAuth(app);

  
 //button 
  const submit= document.getElementById("submit"); 
  submit.addEventListener("click",function(event){
    event.preventDefault()

       //inputs
  const email= document.getElementById("email").value;
  const password= document.getElementById("password").value;
        
     createUserWithEmailAndPassword(auth, email,password)
     .then((userCredential)=>{
        //signed up
        const user = userCredential.user;
        alert("Creating Account....")
        //user redirection
        window.location.href="https://dayspringlive.pages.dev/src/login";
     })
.catch((error)=>{
    const errorCode=error.code;
    const errorMessage=error.message;
    alert(errorMessage)
});


  })


