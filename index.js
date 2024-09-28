// Write a JavaScript function that returns a
//  string that has letters in alphabetical
// order.
let str = "tekle";

function alphabeticalOrder(string) {
  return string.split("").sort().join("");
}
console.log(alphabeticalOrder(str));

// Write a JavaScript function that generates a
// string ID (specified length) of random
// characters.

function randomCharachters(length) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result = result + characters.charAt(randomIndex);
  }
  return result;
}

console.log(randomCharachters(5));
// Write a JavaScript function that checks whether a number is perfect.
function isPerfect(num) {
  let sumOfDivisors = 0;

  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sumOfDivisors += i;
    }
  }
  return sumOfDivisors === num;
}
console.log(isPerfect(6));

// modify the style of the
// paragraph text through javascript code.

let paragraph = document.getElementById("paragraph");
let jsStyleButton = document.getElementById("jsStyles");

jsStyleButton.addEventListener("click", jsStyle);

function jsStyle() {
  paragraph.style.color = "red";
}
// 5.Write a JavaScript program to remove items from a drop-down list.
let colorSelect = document.getElementById("colorSelect");
function removeSelectedColor() {
  let select = document.getElementById("colorSelect");
  let selectedIndex = select.selectedIndex;
  if (selectedIndex !== -1) {
    select.remove(selectedIndex);
  } else {
    alert("Please select a color to remove.");
  }
}
