/*2.a. Looping a triangle: Write a loop that makes seven calls to console.log to output the following triangle:
```js
#
##
###
####
#####
######
#######
```
> It may be useful to know that you can find the length of a string by writing .length after it.*/

// for loop

for (var result = "#"; result.length <=7; result = result + "#")
console.log(result);

// while loop
 var result = "#"
 while(result.length <=7){
     console.log(result);
     result=result + "#"; // this is the last statement executed, so it is returned 
 }