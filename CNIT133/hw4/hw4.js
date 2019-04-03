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
	initTab1();
	initTab2();
	initTab3();
}

function initTab1() {
	let tab1a = document.getElementById("p10");
	let tab1b = document.getElementById("p11");
	let tab1c = document.getElementById("p12");
	let tab1d = document.getElementById("p13");

	tab1a.textContent = `The product of 5 * 8 * 11 * 14 * 17 * 20 is ${product}`;
	tab1b.textContent = `The sum of 5 * 8 * 11 * 14 * 17 * 20 is ${sum}`;

	tab1c.textContent = `The product of 3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 is ${bProduct}`;
	tab1d.textContent = `The sum of 3 * 7 * 11 * 15 * 19 * 23 * 27 * 31 is ${bSum}`;
}

function initTab2() {
	let tab2 = document.getElementById("tabs-2");
	let arr = [];
	let rates = [0.05, 0.06, 0.07, 0.08, 0.09, 0.10];
	let sec = document.createElement("section");

	for (let i = 0; i < 6; i++) {
		arr[i] = document.createElement("article");
		arr[i].classList.add("center-box");

		let total = 1000;

		let table = document.createElement("table");
		let head = table.createTHead(0);
		let headRow = head.insertRow(0);
		let head1 = headRow.insertCell(0);
		let head2 = headRow.insertCell(1);
		let head3 = headRow.insertCell(2);

		let body = table.createTBody();

		head.id = "table-header";
		console.log("added");
		head1.textContent = `Year`;
		head2.textContent = `Amount on deposit`;
		head3.textContent = `Interest Rate`;
		for (let j = 0; j < 5; j++) {
			let row = body.insertRow(j);

			let yearCell = row.insertCell(0);
			let depCell = row.insertCell(1);
			let intCell = row.insertCell(2);
			let interest = total * rates[i];
			total += interest;

			yearCell.textContent = `${j + 1}`;
			depCell.textContent = `${total.toFixed(2)}`;
			intCell.textContent = `${rates[i].toFixed(2)}`;
		}
		arr[i].appendChild(table);
		sec.appendChild(arr[i]);
	}

	console.log(sec);
	tab2.appendChild(sec);
}

function initTab3() {
	let tab3 = document.getElementById("tabs-3");
	let sec = document.createElement("section");

	let form = document.createElement("form");
	let input = document.createElement("input");
	let label = document.createElement("label");
	input.setAttribute("type", "number");
	input.setAttribute("id", "size");
	label. setAttribute("for", "size");

}

function compound(years, rate) {
	let p = 1000;
	let r = parseFloat(rate);
	let n = parseInt(years);
	let pow = Math.pow(parseFloat(1 + r), n);
	console.log(pow);
	let a = p * pow;
	return a.toFixed(2);
}
