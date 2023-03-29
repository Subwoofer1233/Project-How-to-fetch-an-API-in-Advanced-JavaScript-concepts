// if (age >= 16){
//     console.log("hello and welcome to the driver community i hope you drive not safe you age is"+" "+ age)
// } else{
//     while(age < 16){
//         time ++
//         age ++
//     }
// }
//     console.log("hello you are not old enough yet you have" + " " + time + " " + "more years to go!")

// function problem(age, time) {
//    while(age < 16){
//                 time ++
//                 age ++
//         }
//     }

// let _age_ = 10
// if (_age_ >= 16) {
//     console.log("hello and welcome to the driver community i hope you drive not safe you age is"+" "+ age)
// } else {
//    let time = 16 - _age_
//     console.log("hello you are not old enough yet you have" + " " + time + " " + "more years to go!")
// }

/*let dolphins = 0
const DS1 = 96
const DS2 = 108
const DS3 = 89
let koalas = 0
const KS1 = 88
const KS2 = 91
const KS3 = 110

function DOLPHINS_AVG() {
    return dolphins = (DS1 + DS2 + DS3) / 3;
}
function KOALAS_AVG() {
    return koalas = (KS1 + KS2 + KS3) / 3;
    
}

DOLPHINS_AVG();
KOALAS_AVG();

if(dolphins < koalas && koalas > 100) {
    console.log("Koalas have won with a avg score of" + " " + koalas);
}
else if(dolphins > koalas && dolphins > 100) {
    console.log("dolphins have won with a avg score of" + " " + dolphins);
}
else if(dolphins < koalas) {
    console.log("Koalas have won with a avg score of" + " " + koalas + " " + "but did not get a average of over a hundred");
}
else if(dolphins > koalas) {
    console.log("dolphins have won with a avg score of" + " " + dolphins + " " + "but did not get a average of over a hundred");
}
else if(dolphins === koalas) {
    console.log("dolphins and koalas tied with a average score of" + " " + koalas);
}
else{
    console.log("UHHHHHHHHH idk man");    
}
*/

// let test = ["hi", "howdy", "hello"];
// console.log(test[1]);
/*let x = 0

function average(){
    x = (24 + 98 + 49) / 3
    console.log(x)
}
average()

function bett_average(num1, num2, num3){
    console.log((num1 + num2 + num3) / 3)   
}

bett_average(1937, 4793, 10)
x = 8
switch(x) {
    case 10:
    console.log("if x is = 10")
    break;;
    case 8:
    console.log("if x is 8")
    break;
    default:
    console.log("none of the above worked")
    break;
 }*/

//  const arrow_function = (num1 = 1, num2 = 1, num3 = 1) => {
//     console.log((num1 + num2 + num3) / 3)
// }
// arrow_function()

fetch("https://iskarr.github.io/austindonovan.github.io/api/business.json")

.then((response) => response.json())
.then((jsObject) => {
console.log(jsObject);
})