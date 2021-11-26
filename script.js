// IF LETTER NOT PRESENT, ADD TO HANGMAN
// IF USER GUESS WORD CORRECTLY, DO SOMETHING
// IF USER DOES NOT GUESS WORD CORRECTLY, DO SOMETHING
// SHOW BUTTON - CLICK TO PLAY AGAIN...
// CAN I DO COLOURFUL BALLOONS/FIREWORKS IF PERSON WINS?
//show answer if user loses?

const books = ["frankenstein", "trainspotting", "emma", "middlemarch", "matilda", "atonement", "misery", "dracula", "persuasion"]
const movies = ["titanic", "scream", "rocky", "ghostbusters", "psycho", "vertigo", "inception", "goodfellas", "alien", "jaws", "beetlejuice", "clueless"]
const countries = ["mexico", "france", "italy", "china", "australia", "russia", "canada", "ireland", "norway", "singapore"]
const beach = ["bucket", "sand", "spade", "waves", "sunshine", "sandcastle", "towel", "swimming"]
const animals = ["fox", "mouse", "elephant", "horse", "giraffe", "flamingo", "zebra", "monkey", "penguin", "camel"];
const food = ["fajitas", "toast", "curry", "salad", "sausages", "bananas", "chocolate", "biscuits", "potatoes", "pasta"];

let word = "";
let displayedAnswerState = document.getElementById("gamepage__currentAnswerState");
let currentAnswerState = [];
const maximumGuesses = 7;
let correctGuesses = 0;
let incorrectGuesses = 0;
let numOfGuesses = 0;

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
  //Before we look for the word...
  //get and update the UX for the button
  let letter = event.target.textContent;
  event.target.classList.add("clicked");
  // image1.visible = true;

  //register that another guess has been made
  numOfGuesses += 1;
  // console.log(numOfGuesses);

  //initialise a variable to say that we haven't found the letter yet...
  let letterFound = false;

  //Searching through word letter by letter
  for (let i = 0; i < word.length; i++) {

    if (letter === word[i]) {
      //we have found a letter in the word, so we need to:
      //change the variable to say that the letter was found (useful later)
      letterFound = true;
      //update the answer and the UI
      currentAnswerState.splice(i, 1, letter);
      displayedAnswerState.innerHTML = currentAnswerState.join(" ");
    } 
  }

  //we've now searched the word...
  if(letterFound === false) {
    //update the number of incorrect guesses with our new information
    incorrectGuesses += 1;
    // console.log(incorrectGuesses)
  }

  //now we work out whether that means that the user has won
  let hasWon = true;
  for (let i = 0; i < word.length; i++) {
    if(word[i] === '_') {
      hasWon = false;
    }
  }
  //Now we work out what we need to do based on whether we've won or not
  if(hasWon) {
    alert("You won!")
  } else {
    if(incorrectGuesses === 1) {
      //show the picture associated with 1
    } else if(incorrectGuesses == 2) {
      
    }
  }
}
 
    //   // && numOfGuesses >= maximumGuesses
    //   // console.log (`You've Lost!!`);

  










