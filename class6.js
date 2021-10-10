// Arrays Creation

// var usernames = ["Umair's","Ammar1","Abdullah","Riaz"];

// Arrays Read

// console.log(usernames[0]);

// Arrays Update

// usernames[0] = "Umair115";

// console.log(usernames) 

// var details = [];

// details[0] = prompt("Enter User Name");

// console.log(details)

// Arrays Deletion

// var names = ['Umair','Ammar','Affan'];

// names.splice(1,2)

// console.log(names)

// var index = names.indexOf('Umair')
// console.log(index); 

// console.log(names.slice(0,2))

var usernames = ['Umair','Ammar','Abdullah','Arfain','Umar','Riaz','Aqib','Affan'];

usernames.map(function(username,userindex){
    console.log(username, userindex)
})