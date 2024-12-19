"use strict";

// Declaring constant variables to store references to the elements
// that will be updated by your code.
const bookAnswerEl = document.getElementById("book-answer")
const activityAnswerEl = document.getElementById("activity-answer")
const colorAnswerE1 = document.getElementById("color-answer");
const submissionBtn = document.getElementById("submission-btn")


// Declare a constant variable named "book" and assign
// the name of your favorite book to that variable.
const book = "Say Cheese and Die by R.L Stine"
const color = "green"

// Declare a mutable variable named "activity" and assign
// an activity to it.
let activity = "Reading"
activity = "Goosebumps Books"

function updateBookSentence() {
    // Sets the text inside the element with the id of book answer. 
    // innerText is one of many properties on a HTML element.
    bookAnswerEl.innerText = book
}

function updateActivitySentence() {
    // Update this function 
    // (hint: it will be similiar to the previous function)
activityAnswerEl.innerText = activity
colorAnswerE1.innerText = color
}

function render() {
    // Finish writing this function
    updateBookSentence();
    updatedActivitySentence();
    updatedColorSentence();

}

submissionBtn.addEventListener("click", function () {
    // Calling the function that renders the update
    // when the button is clicked
    render();
})
