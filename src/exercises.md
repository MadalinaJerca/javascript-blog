---
title: My exercises
layout: base.liquid
---
   
<link rel="stylesheet" href="/css/exercises.css"> 

<div class="container navigation">
<a href="#h4-numbers">NUMBERS</a>
<a href="#h4-strings">STRINGS</a>
<a href="#h4-arrays">ARRAYS</a>
<a href="#h4-objects">OBJECTS</a>
</div>

<div class="container rounded-3 p-5">
<h1 class="title">EXERCISES</h1>
<h4 id="h4-numbers"></h1>
<div class="p-3">
    <h5>
        1. [NUMBERS] Divide number 1 to number 2. If one of the two inputs are not a number, show an error message. Also
        if number 2 is 0 show an error message, else show the result.
    </h5>
</div>

<p>
    <a class="toggle toggle-n1" href="#example-n1">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-n1" id="example-n1" style="display:none;">
    function divide(number1, number2) {
        if (isNaN(number2) || isNaN(number1)) {
            return "It's not a number.";
        } else if (number2 === 0) {
            return "The second number cannot be 0.";
        } else {
            return number1 / number2;
        }
    }
</xmp>

<div class="p-3">
    <label class="form-label" for="number-1">Number 1</label>
    <input class="form-control" type="text" id="number-1" placeholder="Number 1">
    <label class="form-label" for="number-2">Number 2</label>
    <input class="form-control" type="text" id="number-2" placeholder="Number 2">
</div>
<div class="p-3">
    <button id="calculate" class="btn btn-secondary">
        Calculate
    </button>
</div>
<div id="result-calculate" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    2. [NUMBERS] You need to generate a random number between 1 and 10 when this page is loaded. In the following
    input the user should guess the random number. When the number is guessed you should show the tries
    number. If the number is not guessed you need to show
    the message "Try again". If in the input is not introduced a number you need to inform the user.
</h5>
</div>

<p>
<a class="toggle toggle-n2" href="#example-n2">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-n2" id="example-n2" style="display:none;">
let userNumber = Math.floor(Math.random() * 11);
let tries = 0;

function guessTheNumber(number) {
    if (Number(userNumber) === Number(number)) {
        return `You have guessed the number in ${tries} tries`;
    } else {
        tries++;
        return `Try again!`;
    }
}
</xmp>

<div class="p-3">
<label class="form-label" for="user-number">Number:</label>
<input class="form-control" type="text" id="user-number" placeholder="Number">
</div>
<div class="p-3">
<button id="verify-generated-number" class="btn btn-secondary">
    Verify number
</button>
</div>
<div id="result-verify-number" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5 ">
<div class="p-3 ">
<h5>
    3. [NUMBERS] Write a program that finds the summation of every number from 1 to num. The number will always be a
    positive integer greater than 0.
</h5>
</div>

<p>
<a class="toggle toggle-n3" href="#example-n3">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-n3" id="example-n3" style="display:none;">
function sumFor(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

function sumWhile(n) {
    let i = 1;
    let sum = 0;
    while (i <= n) {
        sum += i;
        i++;
    }
    return sum;
}

function sumR1(n) {
    if (n === 0) {
        return 0;
    } else {
        return n + sumR1(n - 1);
    }
}

function sumR2(n) {
    if (n === 0) {
        return;
    } else {
        sumR2(n - 1);
        return sumR2("*".repeat(n));
    }
}
</xmp>


<div class="p-3 ">
<label class="form-label " for="sum-input">Number:</label>
<input class="form-control " type="text " id="sum-input" placeholder="Number">

<div class="p-3 ">
    <button id="sum-for-button" class="btn btn-secondary">
        SUM FOR
    </button>
    <button id="sum-while-button" class="btn btn-secondary">
        SUM WHILE
    </button>
    <button id="sum-r1-button" class="btn btn-secondary">
        SUM RECURSIVITY 1
    </button>
    <button id="sum-r2-button" class="btn btn-secondary">
        SUM RECURSIVITY 2
    </button>
    <div id="sum-all-container" class="p-3 "></div>
</div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    4. [NUMBERS] Read the year, month and day for 2 persons and show a message saying which person is born first. Show
    error messages if there is no data in all inputs, if there are not numbers in all inputs.
</h5>
</div>

<p>
<a class="toggle toggle-n4" href="#example-n4">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-n4" id="example-n4" style="display:none;">
function compareDates(year1, month1, day1, year2, month2, day2) {
    let myDate1 = new Date(year1, month1, day1);
    let myDate2 = new Date(year2, month2, day2);

    if (myDate1.getTime() > myDate2.getTime()) {
        return "First person is BIGGER than the second person.";
    } else if (myDate1.getTime() < myDate2.getTime()) {
        return "First person in SMALLER than the second person.";
    } else {
        return "First person has the same age as the second person.";
    }
}
</xmp>


<div class="p-3">
<strong>Date person 1: </strong>
<label for="textbox">An :</label>
<input type="text" id="year1" />
<label for="textbox">Luna :</label>
<input type="text" id="month1" />
<label for="textbox">Zi :</label>
<input type="text" id="day1" />
</div>
<div class="p-3">
<strong>Date person 2: </strong>
<label for="textbox">An :</label>
<input type="text" id="year2" />
<label for="textbox">Luna :</label>
<input type="text" id="month2" />
<label for="textbox">Zi :</label>
<input type="text" id="day2" />
</div>
<div class="p-3">
<button id="compare-dates" class="btn btn-secondary">
    Compare dates
</button>
</div>
<div id="result-compare-dates" class="p-3"></div>
</div>

<hr>

<div class="container rounded-3 mt-3 p-5">
<h4 id="h4-strings"></h4>
<div class="p-3">
<h5>
    1. [STRINGS] In the following input type a word and add it to the given text.
</h5>
</div>

<p>
<a class="toggle toggle-s1" href="#example-s1">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s1" id="example-s1" style="display:none;">
let myText = "";

function addWordToPhrase(word) {
    myText += word;
    return myText;
}
</xmp>


<div class="p-3">
<label for="textbox">Add a word to the following text:</label>
<input type="text" id="word" />
</div>
<div class="p-3">
<button id="add-word" class="btn btn-secondary">
    Add word
</button>
</div>
<div class="p-3">
<span>JavaScript is </span>
<span id="added-text"></span>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    2. [STRINGS] Print the longest word from a phrase.
</h5>
</div>

<p>
<a class="toggle toggle-s2" href="#example-s2">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s2" id="example-s2" style="display:none;">
function findLongestWord(text) {
    var textSplit = text.split(" ");
    var longestWord = "";

    for (var i = 0; i < textSplit.length; i++) {
        if (textSplit[i].length > longestWord.length) {
            longestWord = textSplit[i];
        }
    }

    return `The longest word is ${longestWord}`;
}
</xmp>


<div class="p-3">
<label class="form-label" for="long-word-input">Enter your text here:</label>
<input class="form-control" type="text" id="long-word-input"
    placeholder="Example: Hello Javascript => Javascript">
</div>
<div class="p-3">
<button id="long-word-button" class="btn btn-secondary">
    Longest Word
</button>
</div>
<div id="long-word-container" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    3. [STRINGS] Reverse the entire text.
</h5>
</div>

<p>
<a class="toggle toggle-s3" href="#example-s3">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s3" id="example-s3" style="display:none;">
function reverseText(textRev) {
    let flip = textRev.split("").reverse().join("");

    return flip;
}
</xmp>


<div class="p-3">
<label class="form-label" for="reverse-text-input">Enter your text here:</label>
<input class="form-control" type="text" id="reverse-text-input"
    placeholder="Example: Hello World => dlroW olleH">
</div>
<div class="p-3">
<button id="reverse-text-button" class="btn btn-secondary">
    Reverse
</button>
</div>
<div id="reverse-text-container" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    4. [STRINGS] Reverse each word
</h5>
</div>

<p>
<a class="toggle toggle-s4" href="#example-s4">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s4" id="example-s4" style="display:none;">
// VERSION 1
function reverseEachWord(str) {
    return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// VERSION 2
function reverseEachWord(str) {
    let reversedWord = "";
    let reversedStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str[i] !== " ") {
            reversedWord = str[i] + reversedWord;
        } else {
            reversedStr += reversedWord + " ";
            reversedWord = "";
        }
    }
    
    return reversedStr + reversedWord;
}
</xmp>


<div class="p-3">
<label class="form-label" for="reverse-word-input">Enter your text:</label>
<input class="form-control" type="text" id="reverse-word-input"
    placeholder="Example: Hello World => olleH dlroW">

<div class="p-3">
    <button id="reverse-word-button" class="btn btn-secondary">
        Reverse each word
    </button>
</div>
<div id="reverse-word-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    5. [STRINGS] Capital Letter
</h5>
</div>

<p>
<a class="toggle toggle-s5" href="#example-s5">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s5" id="example-s5" style="display:none;">
function capitalLetter(letter) {
    lett = letter.split(" ");

    for (i = 0; i < lett.length; i++) {
        lett[i] = lett[i].charAt(0).toUpperCase(0) + lett[i].slice(1);
    }
    
    let string = lett.join(" ");
    
    return string;
}
</xmp>

<div class="p-3">
<label class="form-label" for="capital-letter-input">Enter your text here:</label>
<input class="form-control" type="text" id="capital-letter-input"
    placeholder="Example: javascript => Javascript">
</div>
<div class="p-3">
<button id="capital-letter-button" class="btn btn-secondary">
    Capital Letter
</button>
</div>
<div id="capital-letter-container" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    6. [STRINGS] Iterate a string
</h5>
</div>

<p>
<a class="toggle toggle-s6" href="#example-s6">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s6" id="example-s6" style="display:none;">
function character(size, value) {
    let textFinal = "";
    const listOfCharacters = [];

    for (let i = 0; i < size; i++) {
        textFinal = value + textFinal;
        listOfCharacters.push(value);
    }

    const myBox = document.getElementById("iterate-string-container");

    if (isNaN(size)) {
        myBox.innerText = "It is not a number";
    } else {
        myBox.innerText = textFinal;
    }

    return listOfCharacters + " " + textFinal;
}
</xmp>


<div class="p-3">
<label class="form-label" for="char-input">Enter the character here:</label>
<input class="form-control" type="text" id="char-input" placeholder="Character">
<label class="form-label" for="size-input">Enter the size here:</label>
<input class="form-control" type="text" id="size-input" placeholder="Size">
</div>
<div class="p-3">
<button id="iterate-string-button" class="btn btn-secondary">
    Iterate
</button>
</div>
<div id="iterate-string-container" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    7. [STRINGS] Check if exist the substring "can someone explain" at the beggining of the sentence.
</h5>
</div>

<p>
<a class="toggle toggle-s7" href="#example-s7">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s7" id="example-s7" style="display:none;">
// VERSION 1
    function detectSubstring(comment) {
        let start = comment.startsWith('Can someone explain');
        return start
    }

// VERSION 2
    function detectSubstring(comment) {
        return (comment.indexOf('Can someone explain') === 0);
    }

// VERSION 3
    function detectSubstring(s, starter) {
        for (var i = 0, cur_c; i < starter.length; i++) {
            cur_c = starter[i];
            if (s[i] !== starter[i]) {
                return false;
            }
        }

        return true;
    }

// VERSION 4
    function detectSubstring(comment) {
        let first = "Can someone explain";

        if (comment.includes(first) && comment.substr(0, first.length) === first) {
            return true;
        } else {
            return false;
        }
    }
</xmp>


<div class="p-3">
<label class="form-label" for="substring-input">Enter your text:</label>
<input class="form-control" type="text" id="substring-input"
    placeholder="Example: Can someone explain me that? => true">

<div class="p-3">
    <button id="substring-button" class="btn btn-secondary">
        Substring
    </button>
</div>
<div id="substring-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    8. [STRINGS] Remove character from a string
</h5>
</div>

<p>
<a class="toggle toggle-s8" href="#example-s8">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s8" id="example-s8" style="display:none;">
function removeCharacter(str, n) {
    const characterPositionToRemove = n;
    let newString = "";

    for (let i = 0; i < str.length; i++) {
        if (i !== characterPositionToRemove) {
            newString += str[i];
        }
    }
    
    return newString;
}
</xmp>


<div class="p-3">
<label class="form-label" for="remove-char-input">Enter your text:</label>
<input class="form-control" type="text" id="remove-char-input" placeholder="Text">
<label class="form-label" for="index-char-input">Enter number:</label>
<input class="form-control" type="text" id="index-char-input" placeholder="Index">
<div class="p-3">
    <button id="remove-char-button" class="btn btn-secondary">
        Remove character
    </button>
</div>
<div id="remove-char-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    9. [STRINGS] Check if the text is a palindrom.
</h5>
</div>

<p>
<a class="toggle toggle-s9" href="#example-s9">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s9" id="example-s9" style="display:none;">
function isPalindrome(text) {
    let checkText = text.toLowerCase();
    var len = checkText.length;

    for (var i = 0; i < len / 2; i++) {
        if (checkText[i] !== checkText[len - 1 - i]) {
            return `The text "${checkText}" is NOT a palindrom.`;
        } else {
            return `The text "${checkText}"  is a palindrom.`;
        }
    }
}
</xmp>

<div class="p-3">
<label class="form-label" for="palindrom-input">Enter your text:</label>
<input class="form-control" type="text" id="palindrom-input" placeholder="Text">
<div class="p-3">
    <button id="palindrom-button" class="btn btn-secondary">
        Palindrom
    </button>
</div>
<div id="palindrom-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5 ">
<div class="p-3 ">
<h5>
    10. [STRINGS] CHECK STRING
</h5>
</div>

<p>
<a class="toggle toggle-s10" href="#example-s10">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s10" id="example-s10" style="display:none;">
function checkTheString(a) {
    if (typeof a === "string") {
        return "It's a string.";
    }
}
</xmp>


<div class="p-3 ">
<label class="form-label " for="check-string-input">Text:</label>
<input class="form-control " type="text " id="check-string-input"
    placeholder="Example: Hello World => It's a string.">

<div class="p-3 ">
    <button id="check-string-button" class="btn btn-secondary ">
        CHECK STRING
    </button>
</div>
<div id="check-string-container" class="p-3 "></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5 ">
<div class="p-3 ">
<h5>
    11. [STRINGS] HIDE EMAIL
</h5>
</div>

<p>
<a class="toggle toggle-s11" href="#example-s11">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s11" id="example-s11" style="display:none;">
function hideEmail(email) {
    const content = email.split("@");
    const name = content[0];
    const leftName = name.substring(0, Math.floor(name.length / 2));
    
    return `${leftName}****@${content[1]}`;
}
</xmp>


<div class="p-3 ">
<label class="form-label " for="hide-email-input ">Email:</label>
<input class="form-control " type="text " id="hide-email-input"
    placeholder="Example: robin_singh@gmail.com => robin****@gmail.com">

<div class="p-3 ">
    <button id="hide-email-button" class="btn btn-secondary ">
        HIDE EMAIL
    </button>
</div>
<div id="hide-email-container" class="p-3 "></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5 ">
<div class="p-3 ">
<h5>
    12. [STRINGS] CHECK WORD IN A STRING
</h5>
</div>

<p>
<a class="toggle toggle-s12" href="#example-s12">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-s12" id="example-s12" style="display:none;">
function count(string, word) {
// VERSION 1
// let frazeArray = string.toLowerCase().split(word);
// return frazeArray.length - 1;

// VERSION 2
    let frazeArray = string.split(" ");
    let counter = 0;

    for (let i = 0; i < frazeArray.length; i++) {
        if (frazeArray[i].toLowerCase().includes(word)) {
            counter++;
        }
    }

    return counter;
}
</xmp>


<div class="p-3 ">
<label class="form-label" for="strng-input">Enter your text</label>
<input class="form-control" type="text" id="strng-input"
    placeholder="Example: The quick brown the fox jumps over the dog, the => 3">
<label class="form-label" for="word-str-input">Enter word</label>
<input class="form-control" type="text" id="word-str-input" placeholder="Word">

<div class="p-3 ">
    <button id="word-str-button" class="btn btn-secondary ">
        CHECK WORD
    </button>
</div>
<div id="word-str-container" class="p-3 "></div>
</div>
</div>

<hr>

<div class="container rounded-3 mt-3 p-5">
<h4 id="h4-arrays"></h4>
<div class="p-3">
<h5>
    1. [ARRAYS] Read two lists of students in the input fields. The students needs to be separated by ";". Compare
    the lists of students and show a error message.
</h5>
</div>

<p>
<a class="toggle toggle-a1" href="#example-a1">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a1" id="example-a1" style="display:none;">
function compareStudentsLists(students1, students2) {
    let stud1 = students1.split(";");
    let stud2 = students2.split(";");

    if (stud1.length > stud2.length) {
        return "The list of students 1 bigger than students 2.";
    } else if (stud2.length > stud1.length) {
        return "The list of students 2 bigger than students 1.";
    } else if (stud2.length === stud1.length) {
        return "The list of students 2 is equal with students 1.";
    }
}
</xmp>


<div class="p-3">
<label class="form-label" for="textbox">Students list 1:</label>
<input class="form-control" type="text" id="students-list-1" placeholder="Example: Tom;Alice;Martin;" />
<label class="form-label" for="textbox">Students list 2:</label>
<input class="form-control" type="text" id="students-list-2"
    placeholder="Example: Stephane;Ed;Anne;Elisabete;Richard;" />
</div>
<div class="p-3">
<button id="compare-students" class="btn btn-secondary">
    Compare
</button>
</div>
<div id="result-compare" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    2. [ARRAYS] In this app you need to create the global variable MOVIES. For each movie you need to store the title
    and the seen status. When click on the button "Check movies status", for every movie from the list show
    if the movie is seen or not. Example:
    <ul>
        <li>Already saw Narcos</li>
        <li>I still need to see Narcos Mexico</li>
    </ul>
</h5>
</div>

<p>
<a class="toggle toggle-a2" href="#example-a2">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a2" id="example-a2" style="display:none;">
const MOVIES = [
{
    title: "Narcos",
    seen: true,
},
{
    title: "Fauda",
    seen: true,
},
{
    title: "The trial",
    seen: false,
},
{
    title: "Enrola",
    seen: false,
},
{
    title: "Elements",
    seen: false,
},
{
    title: "Suits",
    seen: true,
},
];

function getMoviesStatus(movies) {
    let test = document.createElement("ul");

    for (movie of movies) {
        let li = document.createElement("li");

        if (movie.seen === true) {
            li.innerHTML = `Already seen the movie ${movie.title}`;
        } else {
            li.innerHTML = `Not seen the movie ${movie.title}`;
        }
            test.appendChild(li);
    }

    return test;
}
</xmp>


<div class="p-3">
<button id="check-movies-status" class="btn btn-secondary">
    CHECK MOVIES STATUS
</button>
</div>
<div id="result-movies-status" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    3. [ARRAYS] Print all the even numbers from your list [2, 1, 5, 28, 20, 22, 63, 2, 17, 46] and reverse them.
</h5>
</div>

<p>
<a class="toggle toggle-a3" href="#example-a3">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a3" id="example-a3" style="display:none;">
function reversedEvenNumbers(numberListArray) {
    const reversedOddNumbers = [];

    for (let i = numberListArray.length - 1; i >= 0; i--) {
        if (numberListArray[i] % 2 === 0 && numberListArray[i] > 10) {
            reversedOddNumbers.push(numberListArray[i]);
        }
    }

    return reversedOddNumbers;
}

const button = document.getElementById("reverse-numbers");

button.addEventListener("click", function () {
    const values = document.getElementById("user-numbers").value;
    const result = [];
    const splitNumbers = values.split(",");

    splitNumbers.forEach((element) => {
        result.push(Number(element));
    });

    const logData = reversedEvenNumbers(result);

    document.getElementById("reverse-even-numbers").innerHTML =
        logData.join(", ");
});
</xmp>


<div class="p-3">
<label class="form-label" for="user-number">Numbers:</label>
<input class="form-control" type="text" id="user-numbers" placeholder="Number">
</div>
<div class="p-3">
<button id="reverse-numbers" class="btn btn-secondary">
    Reverse even numbers
</button>
</div>
<div id="reverse-even-numbers" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    4. [ARRAYS] Descending numbers
</h5>
</div>

<p>
<a class="toggle toggle-a4" href="#example-a4">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a4" id="example-a4" style="display:none;">
function descendingNumbers(num1, num2, num3) {
    if (num1 > num2 && num1 > num3) {
        if (num2 > num3) {
            return `${num1}, ${num2}, ${num3}`;
        } else {
            return `${num1}, ${num3}, ${num2}`;
        }
    } else if (num2 > num1 && num2 > num3) {
        if (num1 > num3) {
            return `${num2}, ${num1}, ${num3}`;
        } else {
            return `${num2}, ${num3}, ${num1}`;
        }
    } else if (num3 > num1 && num3 > num2) {
        if (num1 > num2) {
            return `${num3}, ${num1}, ${num2}`;
        } else {
            return `${num3}, ${num2}, ${num1}`;
        }
    }
}
</xmp>

<div class="p-3">
<label class="form-label" for="descending-number1-input">Enter first number</label>
<input class="form-control" type="text" id="descending-number1-input" placeholder="number 1">

<label class="form-label" for="descending-number2-input">Enter second number</label>
<input class="form-control" type="text" id="descending-number2-input" placeholder="number 2">

<label class="form-label" for="descending-number3-input">Enter third number</label>
<input class="form-control" type="text" id="descending-number3-input" placeholder="number 3"></div>
<div class="p-3">
<button id="descending-numbers-button" class="btn btn-secondary">
    Descending numbers
</button>
</div>
<div id="descending-numbers-container" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    5. [ARRAYS] Min and Max value from a list using FOR [10, 50, 2, 4, 6, 345, 0, -22, 4, 56]. The numbers needs to
    be separated by " , ".
</h5>
</div>

<p>
<a class="toggle toggle-a5" href="#example-a5">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a5" id="example-a5" style="display:none;">
function minMaxNumbers(arr) {
    var maxValue = arr[0];
    var minValue = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
        } else if (arr[i] < minValue) {
            minValue = arr[i];
        }
    }

    return `Min value is: ${minValue} and Max value is: ${maxValue}`;
}
</xmp>

<div class="p-3">
<label class="form-label" for="min-max-input">Numbers:</label>
<input class="form-control" type="text" id="min-max-input" placeholder="Numbers">


<div class="p-3">
    <button id="min-max-button" class="btn btn-secondary">
        Min and Max
    </button>
</div>
<div id="min-max-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    6. [ARRAYS] Max value from a list using WHILE [2, -28, 63, 19, 182, 46]. The numbers needs to be separated by " ,
    ".
</h5>
</div>

<p>
<a class="toggle toggle-a6" href="#example-a6">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a6" id="example-a6" style="display:none;">
function minMaxNumWhile(arr) {
var max = arr[0];

var i = 0;
while (i < arr.length) {
    if (arr[i] > max) {
        max = arr[i];
    }
    i++;
}

return `Max value is: ${max}`;
}
</xmp>


<div class="p-3">
<label class="form-label" for="min-max-while-input">Numbers:</label>
<input class="form-control" type="text" id="min-max-while-input" placeholder="Numbers">

<div class="p-3">
    <button id="min-max-while-button" class="btn btn-secondary">
        Max
    </button>
</div>
<div id="min-max-while-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    7. [ARRAYS] Return the total of Negative and Positive numbers from a list using FOR [2, -28, 63, -19, 182, 46,
    -111, 31]
</h5>
</div>

<p>
<a class="toggle toggle-a7" href="#example-a7">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a7" id="example-a7" style="display:none;">
function negativePositiveNumbers(arr) {
    var negativeNumbers = 0;
    var positiveNumbers = 0;

    for (let number of arr) {
        if (number < 0) {
            negativeNumbers++;
        } else {
            positiveNumbers++;
        }
    }
    return `There are ${negativeNumbers} Negative numbers and ${positiveNumbers} Positive numbers.`;
}
</xmp>


<div class="p-3">
<label class="form-label" for="neg-pos-input">Numbers:</label>
<input class="form-control" type="text" id="neg-pos-input" placeholder="Numbers">

<div class="p-3">
    <button id="neg-pos-button" class="btn btn-secondary">
        Negative and Positive
    </button>
</div>
<div id="neg-pos-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    8. [ARRAYS] Sorting array [5, 3, 1, 4, 6]
</h5>
</div>

<p>
<a class="toggle toggle-a8" href="#example-a8">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a8" id="example-a8" style="display:none;">
function sortingArray(numbers) {
    var len = numbers.length;

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len - 1; j++) {
            if (numbers[j] > numbers[j + 1]) {
                let tmp = numbers[j];
                numbers[j] = numbers[j + 1];
                numbers[j + 1] = tmp;
            }
        }
    }
    return numbers;
}

const buttonSortArr = document.getElementById("sort-array-button");

buttonSortArr.addEventListener("click", () => {
    const sortArr = document.getElementById("sort-array-input").value;
    const splitNum = sortArr.split(",");
    const result = [];

    splitNum.forEach((element) => {
        result.push(Number(element));
    });

    const sorting = document.getElementById("sort-array-container");
    sorting.innerHTML = sortingArray(result);
});
</xmp>


<div class="p-3">
<label class="form-label" for="sort-array-input">Numbers:</label>
<input class="form-control" type="text" id="sort-array-input" placeholder="Numbers">

<div class="p-3">
    <button id="sort-array-button" class="btn btn-secondary">
        Sorting array
    </button>
</div>
<div id="sort-array-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    9. [ARRAYS] Given the list of numbers, return the list so that the values increment by 1. For each index up to
    the maximum value. Example: Input: 1, 3, 5, 6, 7, 8 & Output: 1, 2, 3, 4, 5, 6, 7, 8
</h5>
</div>

<p>
<a class="toggle toggle-a9" href="#example-a9">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a9" id="example-a9" style="display:none;">
const missingNumbers = (numbers) => {
    let first = numbers[0];
    let last = numbers[numbers.length - 1];
    let array = [];
    
    for (let i = first; i < last + 1; i++) {
        array.push(i);
    }

    return array;
};

const buttonMissing = document.getElementById("missing-num-button");

buttonMissing.addEventListener("click", () => {
    const missNum = document.getElementById("missing-num-input").value;
    const splitNum = missNum.split(",");
    const resultNum = [];

    splitNum.forEach((element) => {
        resultNum.push(Number(element));
    });

    const missing = document.getElementById("missing-num-container");
    missing.innerHTML = missingNumbers(resultNum);
});
</xmp>


<div class="p-3">
<label class="form-label" for="missing-num-input">Numbers:</label>
<input class="form-control" type="text" id="missing-num-input" placeholder="Numbers">
<div class="p-3">
    <button id="missing-num-button" class="btn btn-secondary">
        Missing numbers
    </button>
</div>
<div id="missing-num-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    10. [ARRAYS] ARRAYS
    <ul>
        <li>First case: arrayElements() => [ ]</li>
        <li>Second case: [1, 2, 3, 4, 5] => 1</li>
        <li>Third case: [1, 2, 3, 4, 5], 3 => 1, 2, 3</li>
        <li>Fourth case: [1, 2, 3, 4, 5], -3 => [ ]</li>
    </ul>
</h5>
</div>

<p>
<a class="toggle toggle-a10" href="#example-a10">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a10" id="example-a10" style="display:none;">
function arrayElements(array, n) {
    if (!n && array) {
        return array[0];
    } else if (n < 0 || !array) {
        return "[]";
    }
    return array.slice(0, n);
}
</xmp>

<div class="p-3">
<label class="form-label" for="array-input">Numbers:</label>
<input class="form-control" type="text" id="array-input" placeholder="Numbers">
<label class="form-label" for="arrayN-input">Enter the value of N:</label>
<input class="form-control" type="text" id="arrayN-input" placeholder="Index">
<div class="p-3">
    <button id="array-button" class="btn btn-secondary">
        ARRAY
    </button>
</div>
<div id="array-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    11. [ARRAYS] You will be given an array of numbers. For each number in the array you will need to create an
    object. The object key will be the number, as a string. The value will be the corresponding character
    code, as a string. Return an array of the resulting
    objects. All inputs will be arrays of numbers. All character codes are valid lower case letters. The
    input array will not be empty.
</h5>
</div>

<p>
<a class="toggle toggle-a11" href="#example-a11">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a11" id="example-a11" style="display:none;">
// VERSION 1
function numObj(s) {
    const myList = [];
    
    s.map(number => myList.push(
        String.fromCharCode(number)
    ))

    const myObject = Array.from({ length: s.length }, number => number = {});
    myObject.map((number, i) => number[s[i]] = myList[i])
    return JSON.stringify(myObject);
}

// VERSION 2
function numObj(s) {
    return s.map(n => {
        const obj = {};
        obj[n] = String.fromCharCode(n);
        return JSON.stringify(obj);
    });
}

// VERSION 3
function numObj(list) {
    var arr = []
    for (var i = 0; i < list.length; ++i) {
        var myObject = {};
        myObject[list[i].toString()] = String.fromCharCode(list[i]);
        arr.push(myObject);
    }
    return JSON.stringify(arr);
}

// VERSION 4
function numObj(myList) {
    let newArr = [];

    for (let number of myList) {
        let myObject = new Object();
        myObject[number] = String.fromCharCode(number);
        newArr.push(myObject);
    }
    return JSON.stringify(newArr);
}
</xmp>


<div class="p-3">
<label class="form-label" for="obj-in-list-input">Numbers:</label>
<input class="form-control" type="text" id="obj-in-list-input"
    placeholder="Example: [118, 117, 120]) => [{ '118': 'v' }, { '117': 'u' }, { '120': 'x' }]">

<div class="p-3">
    <button id="obj-in-list-button" class="btn btn-secondary">
        OBJECTS IN LIST
    </button>
</div>
<div id="obj-in-list-container" class="p-3"></div>
</div>
</div>

<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    12. [ARRAYS] Invert values. Given a set of numbers, return the additive inverse of each. Each positive becomes
    negatives, and the negatives become positives.
</h5>
</div>

<p>
<a class="toggle toggle-a12" href="#example-a12">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a12" id="example-a12" style="display:none;">
// VERSION 1
function invert(array) {
    let numbers = [];

    for (num of array) {
        numbers.push(-num);
    }

    return numbers;
}

// VERSION 2
function invert(array) {
    return array.map(n => n && -n)
}

// VERSION 3
function invert(array) {
    let newArry = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            newArry.push(array[i]);
        } else {
            newArry.push(array[i] * -1)
        }
    }
    return newArry;
}
</xmp>


<div class="p-3">
<label class="form-label" for="invert-input">Numbers:</label>
<input class="form-control" type="text" id="invert-input"
    placeholder="Example: [1, -2, 3, -4, 5] => [-1, 2, -3, 4, -5]">

<div class="p-3">
    <button id="invert-button" class="btn btn-secondary">
        INVERT
    </button>
</div>
<div id="invert-container" class="p-3"></div>
</div>
</div>

<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    13. [ARRAYS] Find numbers which are divisible by given number. Complete the function which takes two arguments and
    returns all numbers // which are divisible by the given divisor.First argument is an array of numbers
    and the second is the divisor. // divisibleBy([1,
    2, 3, 4, 5, 6], 2) == [2, 4, 6]
</h5>
</div>

<p>
<a class="toggle toggle-a13" href="#example-a13">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-a13" id="example-a13" style="display:none;">

</xmp>


<div class="p-3">
<label class="form-label" for="divisibleby-list-input">Numbers:</label>
<input class="form-control" type="text" id="divisibleby-list-input"
    placeholder="Example: [1, 2, 3, 4, 5, 6], 2) => [2, 4, 6]">
<label class="form-label" for="divisibleby-number-input">Numbers:</label>
<input class="form-control" type="text" id="divisibleby-number-input" placeholder="Number">
<div class="p-3">
    <button id="divisibleby-button" class="btn btn-secondary">
        Divisible
    </button>
</div>
<div id="divisibleby-container" class="p-3"></div>
</div>
</div>

<hr>

<div class="container rounded-3 mt-3 p-5">
<h4 id="h4-objects"></h4>
<div class="p-3">
<h5>
    1. [OBJECTS] OBJECT GREET
    <ul>
        <li>english: 'Welcome'</li>
        <li>czech: 'Vitejte'</li>
        <li>danish: 'Velkomst'</li>
        <li>dutch: 'Welkom'</li>
        <li>estonian: 'Tere tulemast'</li>
        <li>finnish: 'Tervetuloa'</li>
        <li>flemish: 'Welgekomen'</li>
        <li>french: 'Bienvenue'</li>
        <li>german: 'Willkommen'</li>
        <li>irish: 'Failte'</li>
        <li>italian: 'Benvenuto'</li>
        <li>latvian: 'Gaidits'</li>
        <li>lithuanian: 'Laukiamas'</li>
        <li>polish: 'Witamy'</li>
        <li>spanish: 'Bienvenido'</li>
        <li>swedish: 'Valkommen'</li>
        <li>welsh: 'Croeso'</li>
    </ul>
</h5>
</div>

<p>
<a class="toggle toggle-o1" href="#example-o1">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-o1" id="example-o1" style="display:none;">
// VERSION 1
const greet = (language) => {
    const database = {
        english: 'Welcome',
        czech: 'Vitejte',
        danish: 'Velkomst',
        dutch: 'Welkom',
        estonian: 'Tere tulemast',
        finnish: 'Tervetuloa',
        flemish: 'Welgekomen',
        french: 'Bienvenue',
        german: 'Willkommen',
        irish: 'Failte',
        italian: 'Benvenuto',
        latvian: 'Gaidits',
        lithuanian: 'Laukiamas',
        polish: 'Witamy',
        spanish: 'Bienvenido',
        swedish: 'Valkommen',
        welsh: 'Croeso'
    }
    return database[language] !== undefined ? database[language] : 'Welcome';
}

// VERSION 2
var languages = {
english: "Welcome",
czech: "Vitejte",
danish: "Velkomst",
dutch: "Welkom",
estonian: "Tere tulemast",
finnish: "Tervetuloa",
flemish: "Welgekomen",
french: "Bienvenue",
german: "Willkommen",
irish: "Failte",
italian: "Benvenuto",
latvian: "Gaidits",
lithuanian: "Laukiamas",
polish: "Witamy",
spanish: "Bienvenido",
swedish: "Valkommen",
welsh: "Croeso",
};

function greet(language) {
    for (var k in languages) {
        console.log(k);
        if (k == language) {
            return languages[k];
        }
    }
    return "Welcome";
}
</xmp>

<div class="p-3">
<label class="form-label" for="obj-greet-input">Enter the language:</label>
<input class="form-control" type="text" id="obj-greet-input" placeholder="Text">

<div class="p-3">
    <button id="obj-greet-button" class="btn btn-secondary">
        GREET
    </button>
</div>
<div id="obj-greet-container" class="p-3"></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    2. [OBJECTS] You have the Person class. You need to create two instances of the class Person with different
    details. For the first person you need to call the class method "bio" when clicking on the "PERSON 1
    BIO" button, and for the second person you need to call
    the classs method "greeting" when click on the "PERSON 2 GREETING" button. For each of them you need to
    show the informations. Also you have the following issues here:
    <ul>
        <li> a) the output always includes the pronoun "He", even if your person is female</li>
        <li> b) bio only includes two interests, even if more are listed in the interests array</li>
        <li> c) the greeting includes just the first name</li>
        <li> d) we use function instead of class for the constructor function</li>
    </ul>
    Please fix also these issues.
</h5>
</div>

<p>
<a class="toggle toggle-o2" href="#example-o2">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-o2" id="example-o2" style="display:none;">
class Person {
    constructor(firstName, lastName, age, gender, interests) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.gender = gender;
        this.interests = interests;
    }

    getGender() {
        if (this.gender === "femeie") {
        return "She";
        } else {
        return "He";
        }
    }

    bio() {
        return (
        this.firstName +
        " " +
        this.lastName +
        " is " +
        this.age +
        " years old. " +
        this.getGender() +
        " likes " +
        this.interests.join(" and ") +
        "."
        );
    }

    greeting() {
        return "Hi! I'm " + this.firstName + " " + this.lastName + ".";
    }
}

const person1BioButton = document.getElementById("person-1-bio-button");

person1BioButton.addEventListener("click", () => {
    const person1 = new Person("Madalina", "Jerca", 32, "femeie", [
        "something1",
        "something2",
        "something3",
    ]);
    const person1Bio = document.getElementById("person-1-bio");
    person1Bio.innerText = person1.bio();
});

const person2GreetingButton = document.getElementById("person-2-greeting-button");

person2GreetingButton.addEventListener("click", () => {
    const person2 = new Person("Sebi", "Eusebiu", 30, "barbat", [
        "something1",
        "something2",
        "something3",
    ]);
    const person2Greeting = document.getElementById("person-2-greeting");
    person2Greeting.innerText = person2.greeting();
});
</xmp>


<div class="p-3">
<button id="person-1-bio-button" class="btn btn-secondary">
    PERSON 1 BIO
</button>
<button id="person-2-greeting-button" class="btn btn-secondary">
    PERSON 2 GREETING
</button>
</div>
<div id="person-1-bio" class="p-3"></div>
<div id="person-2-greeting" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    3. [OBJECTS] In this app you have the global variable STUDENT.
    <ul>
        <li> a) When click on the button "IS OBJECT" show true or false depending if the variable is object
            or not. </li>
        <li> b) When click on the button "PRINT KEYS", print the keys of the object.</li>
        <li> c) When click on the button "PRINT KEYS AND VALUES", print the key and the values of the
            object. </li>
        <li> d) When click on "OBJECT LENGTH" show the number of properties from object </li>
        <li> e) When click on the button "DELETE PROPERTIES", delete all the properties from object.</li>
    </ul>
</h5>
</div>

<p>
<a class="toggle toggle-o3" href="#example-o3">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-o3" id="example-o3" style="display:none;">
const STUDENT = {
    firstName: "Vasile",
    lastName: "Popescu",
    jobTitle: "Frontend engineer",
    age: 30,
    married: true,
    sports: ["football", "volei"],
};

a)
function isObject(object) {
    if (object && typeof object === "object") {
        return true;
    } else {
        return false;
    }
}

b)
function objectKeys(obj) {
    if (isObject(obj) === true) {
        return Object.keys(obj);
    } else {
        return [];
    }
}      

c) 
function objectKeyValues(obj) {
    if (isObject(obj) === true) {
        let printKeyValues = [];
        for (const [key, value] of Object.entries(obj)) {
            printKeyValues.push(`${key}: ${value}`);
        }
        return printKeyValues;
    } else {
        return "not an object";
    }
}

d)
function objectLength(obj) {
    return Object.keys(obj).length;
}

e)
function deleteObjectProperties(STUDENT) {
    for (let key in STUDENT) {
        delete STUDENT[key];
    }
}            
</xmp>

<div class="p-3">
<button id="is-object" class="btn btn-secondary">
    IS OBJECT
</button>
<button id="print-keys" class="btn btn-secondary">
    PRINT KEYS
</button>
<button id="print-keys-and-values" class="btn btn-secondary">
    PRINT KEYS AND VALUES
</button>
<button id="object-length" class="btn btn-secondary">
    OBJECT LENGTH
</button>
<button id="delete-properties" class="btn btn-secondary">
    DELETE PROPERTIES
</button>
</div>
<div id="result-object" class="p-3"></div>
</div>


<div class="container rounded-3 mt-3 p-5">
<div class="p-3">
<h5>
    4. [OBJECTS] The code provided is supposed return a person's Full Name given their first and last names. But it's
    not working properly. Fix the bug so we can all go home early. The first and / or last names are never
    null, but may be empty.
</h5>
</div>

<p>
<a class="toggle toggle-o4" href="#example-o4">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-o4" id="example-o4" style="display:none;">
class Fullname {
    constructor(firstName, lastName) {
        this._firstName = firstName;
        this._lastName = lastName;
    }

    getFullName() {
        return `${this._firstName} ${this._lastName}`.trim();
    }
}
</xmp>

<div class="p-3">
<label class="form-label" for="obj-full-name-input">Enter the first and the last name:</label>
<input class="form-control" type="text" id="obj-full-name-input"
    placeholder="Example: Clint, Eastwood => Clint Eastwood ">

<div class="p-3 ">
    <button id="obj-full-name-button" class="btn btn-secondary ">
        OBJECTS FULL NAME
    </button>
</div>
<div id="obj-full-name-container" class="p-3 "></div>
</div>
</div>


<div class="container rounded-3 mt-3 p-5 ">
<div class="p-3 ">
<h5>
    5. [OBJECTS] OBJECTS USER
</h5>
</div>

<p>
<a class="toggle toggle-o5" href="#example-o5">JAVASCRIPT CODE</a>
</p>

<xmp class="toggle-content-o5" id="example-o5" style="display:none;">
const USER = {
    name: "Alex",
    location: "Bucuresti",
    age: 32,
};

function renderUser(obj) {
    for (let prop in obj) {
        if (isObject(obj) === true) {
            return JSON.stringify(obj);
        } else {
            return [];
        }
    }
}

function addUser(user) {
    user.prenume = "Daniel";
    return Object.keys(user);
}

function removeUser(user) {
    delete user.age;
    return Object.keys(user);
}
</xmp>


<div class="p-3 ">
<label class="form-label" for="obj-user-input">Text:</label>
<input class="form-control" type="text" id="obj-user-input" placeholder="Text">

<div class="p-3 ">
    <button id="display-user-button" class="btn btn-secondary">
        DISPLAY USER
    </button>
    <button id="add-user-button" class="btn btn-secondary">
        ADD USER
    </button>
    <button id="remove-user-button" class="btn btn-secondary">
        REMOVE USER
    </button>
</div>
<div id="obj-user-container" class="p-3"></div>
</div>
</div>

{% block footer_additional_scripts %}
  <script type="text/javascript" src="/js/exercises.js"></script>
{% endblock %}