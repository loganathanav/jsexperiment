// function b(){
//     console.log('Called b')
// }
// b()

// console.log(a)
// var a ="Hello, Logan!"
// console.log(a);

// // if(a === undefined){
// //     console.log('a is undefined')
// // }else{
// //     console.log('a is defined')
// // }

function b(){
    var myVar;
    console.log(myVar);
}

function a(){
    var myVar = 2;
    console.log(myVar);
    b();
}

var myVar = 1;
console.log(myVar);
a();
console.log(myVar);


