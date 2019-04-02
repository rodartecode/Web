for (var i = 5, product = 1, sum = 0; i < 21; i += 3) {
	product *= i;
	sum += i;
}

var stopper = false;
var bProduct = 1;
var bSum = 0;
var iterator = -1;
while (stopper === false) {
	iterator += 4;
	if (iterator < 32) {
		bProduct *= iterator;
		bSum += iterator;
	} else {
		stopper = true;
	}
}

console.log("product: " + product);
console.log("sum: " + sum);


console.log("Bproduct: " + bProduct);
console.log("Bsum = " + bSum);

function initialize() {
	

}

function initTab1() {
	let tab1a = document.getElementById("p10");
	let tab1b = document.getElementById("p11");
	let tab1c = document.getElementById("p12");
	let tab1d = document.getElementById("p13");
	let tab3 = document.getElementById("p3");

	tab1a.textContent = `The product of 5 * 8 * 11 * 14 * 17 * 20 is ${product}`;
	tab1b.textContent =  `The sum of 5 * 8 * 11 * 14 * 17 * 20 is ${sum}`;
	
	tab1c.textContent = `The product of 3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 is ${bProduct}`;
	tab1d.textContent = `The sum of 3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 is ${bSum}`;
}

function initTab2() {
	let tab2 = document.getElementById("tabs-2");

	for (let i = 0; i < 10; i++) {
		;
	}

}

function initTab3() {
	let tab3 = document.getElementById("tabs-3");

}

function compound(years, rate) {
	let p = 1000;
	let r = parseFloat(rate);
	let n = parseInt(years);
	let pow = Math.pow(parseFloat(1+r), n);
	console.log(pow);
	let a = p * (pow);
	return a.toFixed(2);
}

console.log(compound(1, 0.05));