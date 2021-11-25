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
  let letter = event.target.textContent;

  numOfGuesses += 1;
  console.log(numOfGuesses);

  let letterFound = false;

  for (let i = 0; i < word.length; i++) {
    event.target.classList.add("clicked");
    
    if (letter === word[i]) {
      letterFound = true;
      currentAnswerState.splice(i, 1, letter);
      displayedAnswerState.innerHTML = currentAnswerState.join(" ");
      correctGuesses += 1;
      // console.log(correctGuesses);
    } if (correctGuesses == word.length) {
      console.log(`You've Won!`);    
    } else if () {
      letterFound = false;
      numOfGuesses = numOfGuesses - correctGuesses;
      console.log(numOfGuesses);



      // console.log(`You've Lost!!`);
    }
  }
}
    //   numOfGuesses += 1;
    //   // && numOfGuesses >= maximumGuesses
    //   // console.log (`You've Lost!!`);
    //   console.log(numOfGuesses);
    // }
  

    // if (guessIsCorrect != true  {
    //   console.log (`You've Lost!!`);
    //

    // 










