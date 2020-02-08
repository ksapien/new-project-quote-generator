/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
// Check the "Project Resources" section of the project instructions
// Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

// stores elements so that they can all be grabbed by the array name together


let quotes = [
  {
    quote: "Not all those who wander are lost.",
    source: "-J.R.R. Tolkein",
    citation: "Fellowship of The Ring",
    year: "1954",
    tags: "Fiction",
  },
  {
    quote: "Faithless is he that says farewell when the road darkens",
    source: "-J.R.R. Tolkien",
    citation: "Fellowship of The Ring",
    year: "1954",
    tags: "Fantasy",
  },
  {
    quote: "May it be a light to you in dark places when all other lights go out.",
    source: "-J.R.R. Tolkien",
    citation: "Fellowship of The Ring",
    year: "1954",
    tags: "Fiction"
  },
  {
    quote: "Do not meddle in the affairs of wizards, for they are subtle and quick to anger.",
    source: "-J.R.R. Tolkien",
    citation: "Fellowship of The Ring",
    year: "1954",
    year: "1954",
    tags: "Fantasy"
  },
  {
    quote: "There is always Hope.",
    source: "-J.R.R. Tolkien",
    citation: "The Two Towers",
    year: "1954",
    tags: "Fiction"
  },
];
//console.log(quotes);

/***
 * `getRandomQuote` function
***/

// code comment: grabs items from the array by array name
function getRandomQuote() {
  let randomNumber = Math.floor(Math.random() * quotes.length);
  return quotes[randomNumber];

};






/***
 * `printQuote` function
***/

// prints the function from the items written in the array

function printQuote() {
  let print = getRandomQuote();
  // got help from stackoverflow in thsi section to to make it properly show the html
  let html = "";
  html = '<p class ="quote">' + print.quote + '</p>';
  html += '<p class ="source">' + print.source + '</p>';
  if (getRandomQuote.citation !== "") {
    html += '<p class ="citation">' + print.citation + '</p>';
  }
  if (getRandomQuote.year !== "") {
    html += '<p class ="year">' + print.year + '</p>';
  }
  if (getRandomQuote.tags !== "") {
    html += '<p class = "tags">' + print.tags + '</p>'
  }
  else {
    html += '</p>'

  }
  document.getElementById('quote-box').innerHTML = html;

};


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);