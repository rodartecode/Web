function initialize() {
    //let quizBox = document.getElementById("quiz-box");
    console.log(document.getElementById("quiz-box"));
    let testDiv = document.createElement("section");
    let header = document.createElement("h3");
    let headerText = document.createTextNode("Welcome to the Multiplication Quiz");
    let par = document.createElement("p");
    parText = document.createTextNode("Are you ready to play?");
    let but1
    testDiv.classList.add("center-box");
    let testText = document.createTextNode("test");
    testDiv.appendChild(testText);
    document.getElementById("quiz-box").appendChild(testDiv);
}
