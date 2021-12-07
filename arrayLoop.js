var num = [10, 20, 30, 40, 50];

console.log("Total Length  = " + num.length);

for (var i = 0; i < num.length; i++) {
    console.log(num[i]);
}
console.log("Position of 40 = " + num.indexOf(40));

console.log("2nd Position Value = " + num[2]);
num[2] = 60;
console.log("2nd Position Value After Change = " + num[2]);
console.log(num)