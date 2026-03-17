let submit = document.querySelector("#forms");
let storeData = [];
storeData = JSON.parse(localStorage.getItem("RegistrationDetails")) || [];

submit.addEventListener("submit", (e) => {

   e.preventDefault()
   let pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   let details = {
      username: document.querySelector(".username").value,
      email: document.querySelector(".email").value,
      phone_number: document.querySelector(".phone_number").value,
      password: document.querySelector(".password").value,
      confirm_password: document.querySelector(".confirm_password").value,
   }

   if (details.username.trim() === "" &&
      details.email.trim() === "" &&
      details.phone_number.trim() === "" &&
      details.password.trim() === "" &&
      details.confirm_password.trim() === "") {
      alert("please fill all the fields")
      return;
   }

   if (details.username.trim() === "" || details.username.trim().length < 3) {
      alert("please fill the username (minimum 3 characters)")
      return;
   }

   if (details.email.trim() === "" || details.email.trim().length < 3) {
      alert("please fill the email (minimum 3 characters)")
      return;
   }

   if (details.phone_number.trim() === "" || details.phone_number.trim().length < 10) {
      alert("please fill the phone number (10 numbers)")
      return;
   }

   if (details.password.trim() === "" || details.password.trim().length < 4) {
      alert("please enter the password (minimum 4 characters)")
      return;
   }

   if (details.confirm_password.trim() === "" || details.confirm_password.trim().length < 4) {
      alert("please enter the confirm password")
      return;
   }

   if (details.password.trim() != details.confirm_password.trim()) {
      alert("password does't match")
      return;
   }

   if (!pattern.test(details.email)) {
      alert("Please enter a valid email address");
      return;
   }

   // storeData = JSON.parse(localStorage.getItem("RegistrationDetails"));

   for (i = 0; i < storeData.length; i++) {
      if (storeData[i].username === details.username) {
         alert("username already register");
         return;
      }
   }

   delete details.confirm_password;

   storeData.push({...details});
   localStorage.setItem("RegistrationDetails", JSON.stringify(storeData));
   delete details.password;
   localStorage.setItem("loggeinuser", JSON.stringify(details));
    window.location.href = "dashboard.html";
   // showPopup("account created successfully")
   // document.querySelector("#forms").reset();
})
userLoggenIN()



let closeMgs = document.querySelector(".close_mgs");
closeMgs.addEventListener("click", () => {
   closePopup();
})

function userLoggenIN() {
    let loggedUser = JSON.parse(localStorage.getItem("loggeinuser"));
    if (loggedUser) {
        window.location.href = "dashboard.html";
    }
}
// function showPopup(message) {
//    document.querySelector("#popupMessage").innerText = message;
//    document.querySelector("#popup").style.display = "flex";
// }

// function closePopup() {
//    document.querySelector("#popup").style.display = "none";
 
// }
