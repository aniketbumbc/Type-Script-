var users = ["Aniket", "Abhi", "John"];

function addUser(username) {
    setTimeout(function () {

        users.push(username);
        console.log("User Added Sucessfully");

    }, 2000);
}

function getUser() {
    setTimeout(function () {

        console.log("Users Shows");
        console.log(users);

    }, 5000);
}

addUser("Yahooooo");
getUser();