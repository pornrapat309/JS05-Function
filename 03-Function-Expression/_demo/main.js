// IIFE : Intermediate Invoke Function Expression
// (function (message) {
//     console.log(message);
// })('hi');

// (function (x,y) {
//     console.log(x + y);
// })(10,5);

// console.log(
//     (function (x,y) {
//         console.log(x + y);
//     })(10,5)
// )

// let a = (function (x,y) {
//     console.log(x + y);
// })(10,7);
// console.log(a);


const myFunc = function (x,y) {
    return x + y;
};
console.log(myFunc(5,10));