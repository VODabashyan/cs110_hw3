const reverse = function(arr){
const revArray = [];
for (let k = 0; k < arr.length; k++){
revArray[k] = arr[(arr.length - 1) - k];
}
console.log (revArray);
}
const array = [1, 2, 3, 4, 5, 6, 7];
reverse(array);