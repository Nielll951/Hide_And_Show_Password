// find icon
let eyeicon = document.getElementById("eyeicon")
//find input 
let password = document.getElementById("password")

// apply function that will be executed on click event on icon
eyeicon.onclick = function() {
   if (password.type === "password") {
      password.type = "text"
      eyeicon.src = "img/eye-open.png"
   } else {
      password.type = "password"
      eyeicon.src = "img/eye-close.png"
   }
}