
// GENERATE RANDOM WORD, WHICH IS HIDDEN FROM USER - DISPLAY UNDERSCORES SHOWING NUMBER OF LETTERS
// USER TO GUESS LETTERS IN WORD - LETTERS DISPLAYED AS TILES
// IF LETTER PRESENT, ADD IT TO WORD
// IF LETTER NOT PRESENT, ADD TO HANGMAN
// ONCE LETTER HAS BEEN SELECTED, DO SOMETHING TO THAT LETTER - STRIKETHROUGH
// IF USER GUESS WORD CORRECTLY, DO SOMETHING
// IF USER DOES NOT GUESS WORD CORRECTLY, DO SOMETHING
// SHOW BUTTON - CLICK TO PLAY AGAIN...
// CAN I DO COLOURFUL BALLOONS/FIREWORKS IF PERSON WINS?

const books = ["frankenstein", "trainspotting", "emma", "middlemarch", "matilda", "atonement", "misery", "dracula", "persuasion"]
const movies = ["titanic", "scream", "rocky", "ghostbusters", "psycho", "vertigo", "inception", "goodfellas", "alien", "jaws", "beetlejuice", "clueless"]
const countries = ["mexico", "france", "italy", "china", "australia", "russia", "canada", "ireland", "norway", "singapore"]
const beach = ["bucket", "sand", "spade", "waves", "sunshine", "sandcastle", "towel", "swimming"]
const animals = ["fox", "mouse", "elephant", "horse", "giraffe", "flamingo", "zebra", "monkey", "penguin", "camel"];
const food = ["fajitas", "toast", "curry", "salad", "sausages", "bananas", "chocolate", "biscuits", "potatoes", "pasta"];

let word = "";
let displayedAnswerState = document.getElementById("gamepage__currentAnswerState");
let currentAnswerState = [];
let numberOfGuesses = 0;
const maximumGuesses = 7;

const generateBookWord = () => {
  const randomWord = Math.floor(Math.random() * books.length);
  word = books[randomWord];
  // console.log(word)
}

function generateMoviesWord() {
  const randomWord = Math.floor(Math.random() * movies.length);
  word = movies[randomWord];
  // console.log(word)
}

const generateCountriesWord = () => {
  const randomWord = Math.floor(Math.random() * countries.length);
  word = countries[randomWord];
  // console.log(word)
}

const generateBeachWord = () => {
  const randomWord = Math.floor(Math.random() * beach.length);
  word = beach[randomWord];
  // console.log(word)
}

const generateAnimalsWord = () => {
  const randomWord = Math.floor(Math.random() * animals.length);
  word = animals[randomWord];
  // console.log(word)
}

const generateFoodWord = () => {
  const randomWord = Math.floor(Math.random() * food.length);
  word = food[randomWord];
  // console.log(word)
}

const createUserState = () => {
  currentAnswerState = [];
  //console.log(word)
  for (let i = 0; i < word.length; i++) {
    currentAnswerState.push('_');
  }
  displayedAnswerState.innerHTML = currentAnswerState.join(" ");
}

const updateUserState = (event) => {
  let value = event.target.textContent;
  numberOfGuesses += 1;
  
    for (let i = 0; i < word.length; i++) {
      event.target.classList.add("clicked");
      
      if (value === word[i] && numberOfGuesses < maximumGuesses) {
        currentAnswerState.splice(i, 1, value);
        displayedAnswerState.innerHTML = currentAnswerState.join(" ");
      } else if (numberOfGuesses == word[i]) {
        alert (`You have won!`);
      } else if (numberOfGuesses == maximumGuesses) {
        alert (`You have lost!`);
      } else if (value != word[i]) {
        //display images...
      }
    }
  }

  //if all letters guessed, user wins
















