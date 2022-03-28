/*2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
```js
sevenRandomNumbers()
[1,4,5,7,9,8,0]
// ```*/
// const someRandomNumbers = [1,4,5,7,9,8,0];
// console.log(someRandomNumbers.sort(function(a,b){return a-b}));
var arr = [];
while(arr.length < 8){
    var r = Math.floor(Math.random() * 7) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);
console.log(arr.sort(function(a,b){ return(a-b)}))