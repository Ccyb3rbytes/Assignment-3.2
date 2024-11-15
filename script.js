// Gets a reference to the input field element.
const inputField = document.getElementById("inputString"); 
// Gets a reference to the check button element.
const checkButton = document.getElementById("checkButton"); 
// Gets a reference to the result div element.
const resultDiv = document.getElementById("result"); 

// Event listener for Enter key press in the input field.
inputField.addEventListener("keyup", function (event) { 
  // Checks if the pressed key is the Enter key (keyCode 13).
  if (event.keyCode === 13) { 
    // If it's Enter, call the checkPalindrome function.
    checkPalindrome(); 
  }
});

// Event listener for clicking the check button.
checkButton.addEventListener("click", checkPalindrome); // Calls checkPalindrome on click.

// Function to check if a string is a palindrome.
function isPalindrome(str) { 
  // Converts the string to lowercase.
  str = str.toLowerCase();
  // Removes all non-alphanumeric characters from the string.
  str = str.replace(/[^a-zA-Z0-9]/g, ""); 
  // Initializes an empty string to store the reversed string.
  let reversedStr = ""; 

  // Loops through the string from the last character to the first.
  for (let i = str.length - 1; i >= 0; i--) { 
    // Adds each character to the reversed string until it gets to the zero starting point
    reversedStr += str[i]; 
  }

  // Returns true if the original and reversed strings are equal, otherwise false.
  return str === reversedStr; 
}

// Function to handle the palindrome check and display the result.
function checkPalindrome() { 
  // Gets the input string from the input field.
  const inputString = inputField.value; 
  // Calls the isPalindrome function to check if the input is a palindrome.
  const result = isPalindrome(inputString); 

  // Sets the text content of the result div based on whether the input is a palindrome or not.
  if (result) {
    resultDiv.textContent = `${inputString} is a palindrome.`;
  } else {
    resultDiv.textContent = `${inputString} is not a palindrome.`;
  }
}