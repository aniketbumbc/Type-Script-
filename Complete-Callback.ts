//https://www.youtube.com/watch?v=xHneyv38Jro

var users = ["Aniket", "Abhi", "John"];

function addUser(username, callback) {
    setTimeout(function () {

        users.push(username);
        console.log("User Added Sucessfully");
        callback();

    }, 2000);
}

function getUser() {
    setTimeout(function () {

        console.log("Users Shows");
        console.log(users);

    }, 1000);
}

addUser("Yahooooo", getUser);
