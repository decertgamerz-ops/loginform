let username = JSON.parse(localStorage.getItem("loggeinuser"));
if (username) {
    document.querySelector("#username").innerText = username.username;
}

let logOut = document.querySelector("#logout");
logOut.addEventListener("click", () => {
    loggedOut()
})

let userInformation = []
let userInfo = ""
let addText = document.querySelector("#addText");

addText.addEventListener("click", () => {
    userInfo = document.querySelector("#userText").value
    userInformation.push(userInfo);

})

function loggedOut() {
    loggeinuser = JSON.parse(localStorage.getItem("loggeinuser"));
    localStorage.removeItem("loggeinuser");
    if (localStorage.getItem("loggeinuser") === null) {
        window.location.href = "login.html";
    }

}
