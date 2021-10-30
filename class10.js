// Async And Await

// async function test(){
//     return "A";
// }

// console.log(test());

// create an async addition function
// which takes two numbers as an argument to add. show the output in its then callback,
//  if any error occurs show it in catch callback.   
async function testFunction() {
    console.log("A")
    await console.log("B")
    console.log("C")
    return "Completed!";
}

testFunction()
.then(function (result){
    console.log("D")
    console.log("E")  
    console.log(result);  
})
.catch(function (e){
    console.log(e)
})



