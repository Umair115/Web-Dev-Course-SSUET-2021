// var h1 = document.getElementsByTagName('h1')[0]
// function displayNone(){

//     h1.style.display = 'none'


// }

// h1.addEventListener('click',function(){
//     h1.style.display = 'none'
// })

var btn = document.getElementsByName('button')[0]
var p = document.getElementsByTagName('p')[0]

btn.addEventListener('click',function(){

    if(parseInt(p.innerHTML) == 34){
        p.innerHTML = 0;
    }
    else{
        p.innerHTML = parseInt(p.innerHTML) +  1
    }


})

