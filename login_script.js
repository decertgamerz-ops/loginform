let submit = document.querySelector("#loginForm");
let userInfo = [];
let details = {};
// storeData = JSON.parse(localStorage.getItem("userInformation")) || [];
submit.addEventListener("submit", (e) => {
    e.preventDefault()

    details = {
        username: document.querySelector(".username").value,
        password: document.querySelector(".password").value,
    }

    if (details.username.trim() === "" && details.password === "") {
        alert("please fill all fields");
        return;
    }

    if (details.username.trim() === "") {
        alert("please enter your username");
        return;
    }

    if (details.password === "") {
        alert("please Check your username and password");
        return;
    }



    // storeData.push(details);
    // localStorage.setItem("userInformation", JSON.stringify(userInfo));
    userValidation();
    document.querySelector("#loginForm").reset();
})

userLoggenIN()

function userLoggenIN() {
    let loggedUser = JSON.parse(localStorage.getItem("loggeinuser"));
    if (loggedUser) {
        window.location.href = "/Registration_form/dashboard.html";
    }
}

function userValidation() {
    /////prevoius store data////////

    // debugger
    let UserDetails = JSON.parse(localStorage.getItem("RegistrationDetails"));

    ///////new local storage////////
    // let userInfo = JSON.parse(localStorage.getItem("userInformation")) || [];




    let FindUser = false;
    for (i = 0; i < UserDetails.length; i++) {

        if (UserDetails[i].username === details.username &&
            UserDetails[i].password === details.password) {
            FindUser = true;
            let detail = UserDetails[i]
            delete detail.password
            localStorage.setItem("loggeinuser", JSON.stringify(detail));
        };

    }





    // let usernameElement = document.querySelector("#username");

    if (FindUser) {

        window.location.href = "/Registration_form/dashboard.html";
    }
    else {
        alert("User Not Found");
    }


}

