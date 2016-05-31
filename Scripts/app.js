/* main JavaScript file */
// IIFE - Immediately Invoked Function Expression
(function () {
    "use strict";   // executionable command

    // define an array of HTML elements
    var paragraphElements = [];

    paragraphElements[0] = document.getElementById("paragraphOne");
    paragraphElements[1] = document.getElementById("paragraphTwo");
    paragraphElements[2] = document.getElementById("paragraphThree");

    // define your paragraphs array
    var paragraphs = [];

    // data for my pages
    paragraphs[0] = "This is my first paragraph. It is only visible on the first page. This next sentence is to prove that this really works!!"
    paragraphs[1] = "This is my second paragraph. It is only visible on the second page."
    paragraphs[2] = "This is my third paragraph. It is only visible on the third page."

    // second way to define an array
    // var paragraphs = new Array();

    // check to see if paragraph one exists
    for (var index = 0; index < paragraphElements.length; index++) {
        if (paragraphElements[index]) {
            paragraphElements[index].textContent = paragraphs[index];

        }
    }

})();