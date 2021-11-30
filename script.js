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
let displayedAnswerState = document.querySelector('.gamepage__currentAnswerState');
let currentAnswerState = [];
const maximumGuesses = 7;
let correctGuesses = 0;
let incorrectGuesses = 0;
let numOfGuesses = 0;

const generateBookWord = () => {
  const randomWord = Math.floor(Math.random() * books.length);
  word = books[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Books";
}

const generateMoviesWord = () => {
  const randomWord = Math.floor(Math.random() * movies.length);
  word = movies[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Movies";
}

const generateCountriesWord = () => {
  const randomWord = Math.floor(Math.random() * countries.length);
  word = countries[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Countries";
}

const generateBeachWord = () => {
  const randomWord = Math.floor(Math.random() * beach.length);
  word = beach[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "At The Beach";
}

const generateAnimalsWord = () => {
  const randomWord = Math.floor(Math.random() * animals.length);
  word = animals[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Animals";
}

const generateFoodWord = () => {
  const randomWord = Math.floor(Math.random() * food.length);
  word = food[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Food";
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
    console.log(incorrectGuesses)
  }

  //now we work out whether that means that the user has won
  let hasWon = true;
    if(currentAnswerState.includes('_')) {
      hasWon = false;
    }

  //Now we work out what we need to do based on whether we've won or not
  if(hasWon) {
    alert("You've won!")
    document.querySelector('.gamepage__image').src = "/images/img_win.png";
  } else if(incorrectGuesses === 1) {
    document.querySelector('.gamepage__image').src = "/images/img2_head.png";
  } else if(incorrectGuesses === 2) {
    document.querySelector('.gamepage__image').src = "/images/img3_head_body.png";
  } else if(incorrectGuesses === 3) {
    document.querySelector('.gamepage__image').src = "/images/img4_one_arm.png";
  } else if(incorrectGuesses === 4) {
    document.querySelector('.gamepage__image').src = "/images/img5_two_arms.png";
  } else if(incorrectGuesses === 5) {
    document.querySelector('.gamepage__image').src = "/images/img6_one_leg.png";
  } else if(incorrectGuesses === 6) {
    document.querySelector('.gamepage__image').src = "/images/img7_lose.png"; 
    alert("You've Lost!!");
    displayedAnswerState.innerHTML = word;
  } 
}
  










