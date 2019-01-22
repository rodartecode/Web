var sum, average, product, smallest, largest;
let first, second, third;

first = document.getElementById("first").value;
second = document.getElementById("second").value;
third = document.getElementById("third").value;

sum = first + second + third;
average = sum / 3;
product = first * second * third;
smallest = Math.min(first, second, third);
largest = Math.max(first, second, third);

