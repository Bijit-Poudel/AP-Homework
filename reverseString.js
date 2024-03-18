function reverseString(str) {
    return str.split("").reverse().join("");
}

let userInput = prompt("Enter a string:");
let reversedString = reverseString(userInput);
console.log("Reversed string:", reversedString);
