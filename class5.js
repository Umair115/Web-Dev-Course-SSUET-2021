// var input_username = prompt("Enter your username : ");
// var input_password = prompt("Enter your password : ");

// var username = "umair@test.com";
// var password = "P@kistan123";

// if(input_username == username){
//     if(input_password == password){
//         document.getElementById("show_welcome_message").textContent = "Welcome "+ username;
//     }
// }
// else{
//     alert("wrong username or password!");
// }

var usernames = ["umair","ammar","abdullah","riaz","shayan"];
var passwords = ["123","1234","12345","123456","1234513"];

var input_username = prompt("Enter Your UserName ");
var input_password = prompt("Enter Your Password ");

for(var i = 0; i < usernames.length; i++){
    if(input_username == usernames[i] & input_password == passwords[i]){
        console.log("Welcome")
    }
}



// umair == umair & 1234 == 123
// xyx == abdullah & xyz == 12345
// xyx == riaz & xyz == 123456
// xyx == shayan & xyz == 1234513