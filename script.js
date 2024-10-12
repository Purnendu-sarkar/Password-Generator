let inputSlider = document.getElementById("inputSlider");
let sliderValue = document.getElementById("sliderValue");
let passBox = document.getElementById("passBox");
let lowercase = document.getElementById("lowercase");
let uppercase = document.getElementById("uppercase");
let numbers = document.getElementById("numbers");
let symbols = document.getElementById("symbols");
let genBtn = document.getElementById("genBtn");
let copyIcon = document.getElementById("copyIcon");

// Display the initial slider value
sliderValue.textContent = inputSlider.value;

// Update the slider value display on input
inputSlider.addEventListener('input', () => {
    sliderValue.textContent = inputSlider.value;
});

// Generate the password when the button is clicked
genBtn.addEventListener('click', () => {
    passBox.value = generatePassword();
});

// Characters to include in the password
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const allNumbers = "0123456789";
const allSymbols = "~!@#$%^&*";

// Function to generate password based on selected options
function generatePassword() {
    let genPassword = "";
    let allChars = "";

    // Build the character set based on selected checkboxes
    if (lowercase.checked) allChars += lowerChars;
    if (uppercase.checked) allChars += upperChars;
    if (numbers.checked) allChars += allNumbers;
    if (symbols.checked) allChars += allSymbols;

    // If no character types are selected, return an empty string
    if (allChars.length === 0) {
        return "Please select at least one character type";
    }

    // Generate password of the specified length
    for (let i = 0; i < inputSlider.value; i++) {
        genPassword += allChars.charAt(Math.floor(Math.random() * allChars.length));
    }

    return genPassword;
}

// Copy the generated password to the clipboard
copyIcon.addEventListener('click', () => {
    if (passBox.value) {
        navigator.clipboard.writeText(passBox.value);
        copyIcon.innerText = "check"; // Change icon to check
        copyIcon.title = "Password Copied";

        // Reset the icon after a delay
        setTimeout(() => {
            copyIcon.innerHTML = "content_copy";
            copyIcon.title = "";
        }, 3000);
    }
});

