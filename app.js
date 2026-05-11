// --- CHAPTERS 9-11: USER INPUT & CONDITIONAL STATEMENTS ---

// 1. City Welcome [cite: 788, 789]
var city = prompt("Enter city name:");
if (city && city.toLowerCase() === "karachi") {
    alert("Welcome to city of lights");
}

// 3. Traffic Signal [cite: 793, 794]
var signalColor = prompt("Enter traffic signal color (Red, Yellow, Green):");
if (signalColor.toLowerCase() === "red") {
    alert("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
    alert("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
    alert("Move now");
}

// 6. Marks Sheet [cite: 834, 835, 837]
var totalMarks = 300;
var sub1 = +prompt("Enter marks for Subject 1:");
var sub2 = +prompt("Enter marks for Subject 2:");
var sub3 = +prompt("Enter marks for Subject 3:");
var obtained = sub1 + sub2 + sub3;
var perc = (obtained / totalMarks) * 100;
var grade, remarks;

if (perc >= 80) { grade = "A-one"; remarks = "Excellent"; }
else if (perc >= 70) { grade = "A"; remarks = "Good"; }
else if (perc >= 60) { grade = "B"; remarks = "You need to improve"; }
else { grade = "Fail"; remarks = "Sorry"; }

document.getElementById('marks-sheet').innerHTML = `
    <div class="sheet-container">
        <h2>Marks Sheet</h2>
        <p class="sheet-item">Total marks: ${totalMarks}</p>
        <p class="sheet-item">Marks obtained: ${obtained}</p>
        <p class="sheet-item">Percentage: ${perc.toFixed(2)}%</p>
        <p class="sheet-item">Grade: ${grade}</p>
        <p class="sheet-item">Remarks: ${remarks}</p>
    </div>
`;

// 7. Guess Game [cite: 848, 849, 850, 851]
var secretNum = 7;
var userGuess = +prompt("Guess the secret number (1-10):");
if (userGuess === secretNum) {
    alert("Bingo! Correct answer");
} else if (userGuess + 1 === secretNum) {
    alert("Close enough to the correct answer");
}

// --- CHAPTERS 12-13: IF...ELSE & ELSE IF ---

// 1. Character Check (Number, Uppercase, Lowercase) [cite: 731, 732]
var char = prompt("Enter a character (Number or Letter):");
var code = char.charCodeAt(0);
if (code >= 48 && code <= 57) {
    alert("Input is a Number");
} else if (code >= 65 && code <= 90) {
    alert("Input is an Uppercase letter");
} else if (code >= 97 && code <= 122) {
    alert("Input is a Lowercase letter");
}

// 5. Password Validation [cite: 738, 739, 740, 741, 743]
var correctPass = "admin123";
var userPass = prompt("Enter your password:");
if (!userPass) {
    alert("Please enter your password");
} else if (userPass === correctPass) {
    alert("Correct! The password you entered matches the original password");
} else {
    alert("Incorrect password");
}

// 7. Time Greeting (24-hour format) [cite: 754, 755, 757, 782]
var time = +prompt("Enter time in 24hr format (e.g., 1900):");
if (time >= 0000 && time < 1200) {
    alert("Good morning!");
} else if (time >= 1200 && time < 1700) {
    alert("Good afternoon!");
} else if (time >= 1700 && time < 2100) {
    alert("Good evening!");
} else if (time >= 2100 && time <= 2359) {
    alert("Good night!");
}
