function initialize() {
	initTab1();
	initTab2();
	initTab3();
}

function initTab1() {
    let tab1 = document.getElementById("tabs-1");
	let sec = document.createElement("section");
	sec.classList.add("center-box");

	let form = document.createElement("form");
	let input = document.createElement("input");
    let label = document.createElement("label");
    let radio1 = document.createElement("input");
    let radio2 = document.createElement("input");
    let radio3 = document.createElement("input");
    let check1 = document.createElement("input");
    let check2 = document.createElement("input");
    let check3 = document.createElement("input");
    let select = document.createElement("select");
    let option1 = document.createElement("option");
    let option2 = document.createElement("option");
    let option3 = document.createElement("option");
	let submit = document.createElement("input");
	let reset = document.createElement("input");
    let result = document.createElement("article");
    
    form.setAttribute("action", "hw5/ty.php");
    form.setAttribute("name", "Form1");
    form.setAttribute("method", "post");
    form.setAttribute("onsubmit", "return eval()");

    input.setAttribute("type", "text");
    input.setAttribute("id", "text");
    input.setAttribute("name", "text");

    label.setAttribute("for", "text");
    label.textContent = "Enter some text: ";

    radio1.setAttribute("type", "radio");
    radio2.setAttribute("type", "radio");
    radio3.setAttribute("type", "radio");
    radio1.setAttribute("name", "radio");
    radio2.setAttribute("name", "radio");
    radio3.setAttribute("name", "radio");
    radio1.setAttribute("value", "Radio 1");
    radio2.setAttribute("value", "Radio 2");
    radio3.setAttribute("value", "Radio 3");

    check1.setAttribute("type", "checkbox");
    check1.setAttribute("value", "Checkbox 1");
    check1.setAttribute("name", "check[]");
    check2.setAttribute("type", "checkbox");
    check2.setAttribute("value", "Checkbox 2");
    check2.setAttribute("name", "check[]");
    check3.setAttribute("type", "checkbox");
    check3.setAttribute("value", "Checkbox 3");
    check3.setAttribute("name", "check[]");

    option1.value = "Option 1";
    option1.setAttribute("name[]", "option");
    option2.value = "Option 2";
    option2.setAttribute("name[]", "option");
    option3.value = "Option 3";
    option3.setAttribute("name[]", "option");

    submit.setAttribute("type", "submit");

    reset.setAttribute("type", "reset");
    reset.setAttribute("onclick", "resetTab()");

    option1.innerHTML += "Option 1";
    select.appendChild(option1);
    option2.innerHTML += "Option 2";
    select.appendChild(option2);
    option3.innerHTML += "Option 3";
    select.appendChild(option3);

    form.appendChild(label);
    form.appendChild(input);
    form.appendChild(document.createElement("br"));
    form.appendChild(radio1);
    form.innerHTML += "Radio 1";
    form.appendChild(document.createElement("br"));
    form.appendChild(radio2);
    form.innerHTML += "Radio 2";
    form.appendChild(document.createElement("br"));
    form.appendChild(radio3);
    form.innerHTML += "Radio 3";
    form.appendChild(document.createElement("br"));
    form.appendChild(check1);
    form.innerHTML += "Check 1";
    form.appendChild(document.createElement("br"));
    form.appendChild(check2);
    form.innerHTML += "Check 2";
    form.appendChild(document.createElement("br"));
    form.appendChild(check3);
    form.innerHTML += "Check 3";
    form.appendChild(document.createElement("br"));
    form.appendChild(select);
    form.appendChild(submit);
    form.appendChild(reset);

    sec.appendChild(form);
    tab1.appendChild(sec);


}

function initTab2() {

}

function initTab3() {

}

function resetTab() {

}