/*2.b. Write a function which returns array of seven random numbers in a range of 0-9. All the numbers must be unique
```js
sevenRandomNumbers()
[1,4,5,7,9,8,0]
```*/
const someRandomNumbers = [1,4,5,7,9,8,0];
console.log(someRandomNumbers.sort(function(a,b){return a-b}));