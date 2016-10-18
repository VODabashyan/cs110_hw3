const star = function(n) {
let a = '';
for (let k = 0; k < n; ++k) {
a += '*';
}
return a;
};


const space = function(n) {
let a = '';
for (let k = 0; k < n; ++k) {
a += ' ';
}
return a;
};
let starquantity = 1;


const diamond = function(n) {
if (n%2 === 0) {
++n;
}
let spacequantity = n - starquantity;
let num = (n + 1) / 2;


for (let k = 0; k < num; ++k) {
console.log(space(spacequantity) + star(starquantity));
starquantity += 2;
--spacequantity;
}
starquantity -= 2;
++spacequantity;


for (let k = 0; k < n-num; ++k ) {
++spacequantity;
starquantity -= 2;
console.log(space(spacequantity) + star(starquantity));
}
};

diamond(5);
