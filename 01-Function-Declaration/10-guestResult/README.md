บรรทัด \*, \*\*, ให้ผลลัพธ์เป็นอะไร เพราะอะไร

```js
function sayHi(age) {
    if (age < 12) alert('Hi kid');
}
console.log(sayHi); // * not alert ให้ผลลัพธ์เป็น function ใน console.log เพราะ sayHi เป็นชื่อ FN
console.log(sayHi(10)); // ** Undefined, alert Hi kid
```
