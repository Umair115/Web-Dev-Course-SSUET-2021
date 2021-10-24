// function addition(){
//     var a = 2;
//     var b = 3;
//     let sum = a + b;
//     console.log(sum);
// }

// addition();

// function addition(num1, num2){
//     let sum = num1 + num2;
//     console.log(sum);
// }

// addition(3, 5);
// addition(10, 5);
// addition(2, 6);

// function multiplication(num1, num2){
//     let sum = num1 * num2;
//     console.log(sum);
// }
// multiplication(3,8)


// function div(num1, num2, num3){
//     let div = num1 / num2 / num3;
//     console.log(div);
// }
// div(3,8,5)



// function subtract(num1,num2){
//     let sum =num1-num2;
//     console.log(sum);
// } 

// subtract(4,10)


// function addition(){
//     var a = 2;
//     var b = 3;
//     var sum = a + b;
//     return sum;
// }

// var output = addition();

// console.log(output);

// function subtract(){
//     var a = 3;
//     var b = 5;
//     var sum = a-b;
//     return sum;
// }
// var output = subtract();
// console.log(output);


// // multiplication
// function multiplication(){
//     var a = 3;
//     var b = 5;
//     var mul = a*b;
//     return mul;
// }
// var output = multiplication();
// console.log(output);


// function div(){
//     var a = 3;
//     var b = 5;
//     var div = a/b;
//     return div;
// }
// var output = div();
// console.log(output);

// function addition(num1, num2){
//     var sum = num1 + num2;
//     return sum;
// }

// var output = addition(3,5);

// console.log(output);

// function subtract(num1,num2){
//     var sum = num1 - num2;
//     return sum
// }

// var sub = subtract(5,8);
// console.log(sub)
// function multiplication(num1,num2){
//     var mul = num1 * num2;
//     return mul
// }
// var mul = multiplication(4,2);
// console.log(mul); 
// function div (num1,num2){
//     var div=num1/num2;
//     return div
// }
// var output= div (3,15);
// console.log(output)



// var addition = (num1, num2) => {
//     var sum = num1 + num2
//     return sum;
// };


// var output=addition(3,5);
// console.log(output);

// // 
// var division = (num1, num2) => {
//     var div = num1 / num2
//     return div;
// };


// var output=division(3,5);
// console.log(output);




// takes nothing returns nothing
// takes nothing returns something
// takes something returns nothing
// takes something returns something

// function printUser(user_name, user_age, user_phone, user_address, user_email){
//     console.log("user name is",user_name);
//     console.log("user age is",user_age);
//     console.log("user phone number is",user_phone);
//     console.log("user country is",user_address);
//     console.log("user email is",user_email);
// }

// printUser('Umair',24,"0343-xxxxxxxx","Karachi","umair42795@gmail.com")

// var user_data = {
//     "results": [
//         {
//             "gender": "female",
//             "name": {
//                 "title": "Mrs",
//                 "first": "Hanaé",
//                 "last": "Picard"
//             },
//             "location": {
//                 "street": {
//                     "number": 4300,
//                     "name": "Quai Charles-De-Gaulle"
//                 },
//                 "city": "Asnières-sur-Seine",
//                 "state": "Corrèze",
//                 "country": "France",
//                 "postcode": 78663,
//                 "coordinates": {
//                     "latitude": "0.9678",
//                     "longitude": "39.8055"
//                 },
//                 "timezone": {
//                     "offset": "+7:00",
//                     "description": "Bangkok, Hanoi, Jakarta"
//                 }
//             },
//             "email": "hanae.picard@example.com",
//             "login": {
//                 "uuid": "6c7d6512-cde4-4d93-b0f7-c6ef7515d683",
//                 "username": "heavypeacock463",
//                 "password": "wibble",
//                 "salt": "24s1KnSa",
//                 "md5": "0689a6b564d1c1e1c48c968f47d79c80",
//                 "sha1": "31aea5a539ab69af04e4c5f4920d83bc594ac887",
//                 "sha256": "4dbb3712fe17eec53830347c79c6a00da801f3ccc7dd4e3973a4de9a8318064a"
//             },
//             "dob": {
//                 "date": "1994-08-05T08:54:10.961Z",
//                 "age": 27
//             },
//             "registered": {
//                 "date": "2018-08-29T16:16:08.350Z",
//                 "age": 3
//             },
//             "phone": "02-03-83-51-80",
//             "cell": "06-91-84-52-89",
//             "id": {
//                 "name": "INSEE",
//                 "value": "2NNaN82308605 15"
//             },
//             "picture": {
//                 "large": "https://randomuser.me/api/portraits/women/47.jpg",
//                 "medium": "https://randomuser.me/api/portraits/med/women/47.jpg",
//                 "thumbnail": "https://randomuser.me/api/portraits/thumb/women/47.jpg"
//             },
//             "nat": "FR"
//         }
//     ],
//     "info": {
//         "seed": "4857f94f17e2e9de",
//         "results": 1,
//         "page": 1,
//         "version": "1.3"
//     }
// };

// // // printUser("Umair");
// // printUser("Ammar");
// // printUser("Umair");
// // printUser("Abdullah");
// // var myName = 'Arfain'
// // printUser(user_data['results'][0]['name']['first']);
// // printUser(myName);

// // function printUser(user_name, user_age, user_phone, user_address, user_email)

// printUser(user_data.results[0].name.first, 
//     user_data.results[0].dob.age,
//     user_data.results[0].phone,
//     user_data.results[0].location.country,
//     user_data.results[0].email)