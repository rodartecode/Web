function initialize() {
	let date, dateStr, locale, utc;
	date = new Date();
	dateStr = date.toString();
	locale = date.toLocaleString();
	utc = date.toUTCString();
	let today = document.getElementById("today");
	let timezones = document.getElementById("timezones");
	let list = document.createElement("ul");
	let item1, item2, item3;
	item1 = document.createElement("li");
	item2 = document.createElement("li");
	item3 = document.createElement("li");

	item1.textContent = `Today's date is ${dateStr}`;
	item2.textContent = `Today's date is also ${locale}`;
	item3.textContent = `Today's date is ${utc}`;

	list.appendChild(item1);
	list.appendChild(item2);
	list.appendChild(item3);

	today.appendChild(list);

	let pdtOffset = date.getTimezoneOffset();
	let edtOffset = pdtOffset - 180;

	timezones.textContent = `The offset between PDT and UTC is ${pdtOffset} minutes. The offset between EDT and UTC is ${edtOffset} minutes`;
}

function splitString() {
	let phone = document.getElementById("phone").value;
	let splitter = /[\s\(\)\-]/;
	let splitter2 = [")", "(", "-", " "];
	let splitter3 = splitter2.join("|");
	let numArr = phone.split(splitter);
	let filtered = numArr.filter(function(el) {
		return el != "";
	});
	console.log(numArr);
	console.log(filtered);
}

function valNum() {
	let numRegExp = /^\d+\.\d{4,}$/;
	let num = parseFloat(document.getElementById("num").value);
	console.log("validating " + num);

	if (numRegExp.test(num)) {
		console.log("passed");
		let roundInt, roundTenth, roundHundredth, roundThousandth, squareRtInt;
		squareRtInt = Math.round(Math.sqrt(num));
		roundThousandth = (Math.floor(num * 1000 + 0.5) / 1000).toFixed(3);
		roundHundredth = (Math.floor(num * 100 + 0.5) / 100).toFixed(2);
		roundTenth = (Math.floor(num * 10 + 0.5) / 10).toFixed(1);
		roundInt = Math.round(num);

		let textArea = document.getElementById("textResult");
		textArea.value = `Number is ${num}
Rounded is ${roundInt}
The rounded square root is ${squareRtInt}
Rounded to tenth is ${roundTenth}
Rounded to hundredth is ${roundHundredth}
Rounded to thousandth is ${roundThousandth}`;
	} else {
		console.log("failed");
		alert("Your number must have at least 4 decimal places!");
	}
}
