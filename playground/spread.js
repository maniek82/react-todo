// function add (a,b) {
// 	return a+b;
// }

// console.log(add(3,1));

// var toAdd = [9,5];
// console.log(add(...toAdd));

// var groupA = ['maniek','aurelia'];
// var groupB = ['tosia','natalia'];

// var final =[3, ...groupA, ...groupB];
// console.log(final);

var person = ['maniek',33];
var person2 = ['aurelia',38];

function greet(name,age) {
	console.log(`Hi ${name} your are ${age}`);
}
greet(...person);
greet(...person2);


var name = ['maniek','aurelia'];
var final = ['natalia', ...name];

final.forEach(function(name) {
	console.log(`Hi ${name}`);
});