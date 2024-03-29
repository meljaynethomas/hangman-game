const books = ["frankenstein", "trainspotting", "emma", "middlemarch", "matilda", "atonement", "misery", "dracula", "persuasion"]
const movies = ["titanic", "scream", "rocky", "ghostbusters", "psycho", "vertigo", "inception", "goodfellas", "alien", "jaws", "beetlejuice", "clueless"]
const countries = ["mexico", "france", "italy", "china", "australia", "russia", "canada", "ireland", "norway", "singapore"]
const beach = ["bucket", "sand", "spade", "waves", "sunshine", "sandcastle", "towel", "swimming"]
const animals = ["fox", "mouse", "elephant", "horse", "giraffe", "flamingo", "zebra", "monkey", "penguin", "camel"];
const food = ["fajitas", "toast", "curry", "salad", "sausages", "bananas", "chocolate", "biscuits", "potatoes", "pasta"];

let word = "";
let displayedAnswerState = document.querySelector('.gamepage__currentAnswerState');
let currentAnswerState = [];
let incorrectGuesses = 0;

const booksSelector = document.querySelector(".selectionpage__button--books");
const moviesSelector = document.querySelector(".selectionpage__button--movies");
const countriesSelector = document.querySelector(".selectionpage__button--countries");
const beachSelector = document.querySelector(".selectionpage__button--beach");
const animalsSelector = document.querySelector(".selectionpage__button--animals");
const foodSelector = document.querySelector(".selectionpage__button--food");

const generateBookWord = () => {
  const randomWord = Math.floor(Math.random() * books.length);
  word = books[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Books";
  document.querySelector('.gamepage').style.display = "block";
}

const generateMoviesWord = () => {
  const randomWord = Math.floor(Math.random() * movies.length);
  word = movies[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Movies";
  document.querySelector('.gamepage').style.display = "block";
}

const generateCountriesWord = () => {
  const randomWord = Math.floor(Math.random() * countries.length);
  word = countries[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Countries";
  document.querySelector('.gamepage').style.display = "block";
}

const generateBeachWord = () => {
  const randomWord = Math.floor(Math.random() * beach.length);
  word = beach[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "At The Beach";
  document.querySelector('.gamepage').style.display = "block";
}

const generateAnimalsWord = () => {
  const randomWord = Math.floor(Math.random() * animals.length);
  word = animals[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Animals";
  document.querySelector('.gamepage').style.display = "block";
}

const generateFoodWord = () => {
  const randomWord = Math.floor(Math.random() * food.length);
  word = food[randomWord];
  document.querySelector('.gamepage__category').innerHTML = "Food";
  document.querySelector('.gamepage').style.display = "block";
}

const createUserState = () => {
  currentAnswerState = [];
  for (let i = 0; i < word.length; i++) {
    currentAnswerState.push('_');
  }
  displayedAnswerState.innerHTML = currentAnswerState.join(" ");
}

booksSelector.addEventListener("click", generateBookWord);
booksSelector.addEventListener("click", createUserState);

moviesSelector.addEventListener("click", generateMoviesWord);
moviesSelector.addEventListener("click", createUserState);

countriesSelector.addEventListener("click", generateCountriesWord);
countriesSelector.addEventListener("click", createUserState);

beachSelector.addEventListener("click", generateBeachWord);
beachSelector.addEventListener("click", createUserState);

animalsSelector.addEventListener("click", generateAnimalsWord);
animalsSelector.addEventListener("click", createUserState);

foodSelector.addEventListener("click", generateFoodWord);
foodSelector.addEventListener("click", createUserState);

const updateUserState = (event) => {
  let letter = event.target.textContent;
  event.target.classList.add("clicked");
  event.target.disabled = true;

  let letterFound = false;

  for (let i = 0; i < word.length; i++) {
    if (letter === word[i]) {
      letterFound = true;
      currentAnswerState.splice(i, 1, letter);
      displayedAnswerState.innerHTML = currentAnswerState.join(" ");
    } 
  }

  if(letterFound === false) {
    incorrectGuesses += 1;
  }

  let hasWon = true;
    if(currentAnswerState.includes('_')) {
      hasWon = false;
    }

  if(hasWon) {
    document.querySelector(".gamepage__image").src="./images/img_win.png";
    document.querySelector(".user__status-update").innerHTML = "You Win!"
    document.querySelector(".user__status-refresh").style.display = "block";
      const refreshButton = document.querySelector(".user__status-refresh");
        const refreshPage = () => {
        location.reload();
        }
        refreshButton.addEventListener("click", refreshPage);
  } else if(incorrectGuesses === 1) {
    document.querySelector(".gamepage__image").src="./images/img2_head.png";
  } else if(incorrectGuesses === 2) {
    document.querySelector(".gamepage__image").src="./images/img3_head_body.png";
  } else if(incorrectGuesses === 3) {
    document.querySelector(".gamepage__image").src="./images/img4_one_arm.png";
  } else if(incorrectGuesses === 4) {
    document.querySelector(".gamepage__image").src="./images/img5_two_arms.png";
  } else if(incorrectGuesses === 5) {
    document.querySelector(".gamepage__image").src="./images/img6_one_leg.png";
  } else if(incorrectGuesses === 6) {
    document.querySelector(".gamepage__image").src="./images/img7_lose.png";
    displayedAnswerState.innerHTML = word;
    document.querySelector(".user__status-update").innerHTML = "You Lose!"
    document.querySelector(".user__status-refresh").style.display = "block";
      const refreshButton = document.querySelector(".user__status-refresh");
        const refreshPage = () => {
        location.reload();
        }
        refreshButton.addEventListener("click", refreshPage);
  } 
}
  document.querySelectorAll(".gamepage__keyboard__button").forEach(letter => {
    letter.addEventListener("click", updateUserState)
  });

