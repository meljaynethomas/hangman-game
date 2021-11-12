// CLICK PLAY BUTTON TO START GAME - DESIGN NICE HOMEPAGE WITH WORD BUTTONS
// GENERATE RANDOM WORD, WHICH IS HIDDEN FROM USER - DISPLAY UNDERSCORES SHOWING NUMBER OF LETTERS
// USER TO GUESS LETTERS IN WORD - LETTERS DISPLAYED AS TILES
// IF LETTER PRESENT, ADD IT TO WORD
// IF LETTER NOT PRESENT, ADD TO HANGMAN
// ONCE LETTER HAS BEEN SELECTED, DO SOMETHING TO THAT LETTER - STRIKETHROUGH
// IF USER GUESS WORD CORRECTLY, DO SOMETHING
// IF USER DOES NOT GUESS WORD CORRECTLY, DO SOMETHING
// SHOW BUTTON - CLICK TO PLAY AGAIN...
// HOMEPAGE - STICK MAN WALKING
// BLACK/WHITE/MINIMALIST STICK MAN STYLE
// CAN I DO COLOURFUL BALLOONS/FIREWORKS IF PERSON WINS?

const books = ["frankenstein", "trainspotting", "emma", "middlemarch", "matilda", "atonement", "misery", "dracula", "persuasion"]
const movies = ["titanic", "scream", "rocky", "ghostbusters", "psycho", "vertigo", "inception", "goodfellas", "alien", "jaws", "beetlejuice", "clueless"]
const countries = ["mexico", "france", "italy", "china", "australia", "russia", "canada", "ireland", "norway", "singapore"]
const beach = ["bucket", "sand", "spade", "waves", "sunshine", "sandcastle", "towel", "swimming"]
const animals = ["fox", "mouse", "elephant", "horse", "giraffe", "flamingo", "zebra", "monkey", "penguin", "camel"];
const food = ["fajitas", "toast", "curry", "salad", "sausages", "bananas", "chocolate", "biscuits", "potatoes", "pasta"];

const word = document.querySelector(".word");

const getBooksWord = () => {
  
  const randomWord = Math.floor(Math.random() * books.length);
  const generatedWord = books[randomWord];
  console.log(generatedWord);
  
  const wordToGuess = [];
    for(let i = 0; i < generatedWord.length; i++) {
      wordToGuess.push('_');
    }
    word.innerHTML = wordToGuess.join(" ");
}
getBooksWord()



const getMoviesWord = () => {
  const randomWord = Math.floor(Math.random() * movies.length);
  const generatedWord = movies[randomWord];
  console.log(generatedWord);

  const wordToGuess = [];
    for(let i = 0; i < generatedWord.length; i++) {
      wordToGuess.push('_');
    }
    word.innerHTML = wordToGuess.join(" ");
}
getMoviesWord()

const getCountriesWord = () => {
  const randomWord = Math.floor(Math.random() * countries.length);
  const generatedWord = countries[randomWord];
  console.log(generatedWord);

  const wordToGuess = [];
    for(let i = 0; i < generatedWord.length; i++) {
      wordToGuess.push('_');
    }
    word.innerHTML = wordToGuess.join(" ");
}
getCountriesWord()

const getBeachWord = () => {
  const randomWord = Math.floor(Math.random() * beach.length);
  const generatedWord = beach[randomWord];
  console.log(generatedWord);

  const wordToGuess = [];
    for(let i = 0; i < generatedWord.length; i++) {
      wordToGuess.push('_');
    }
    word.innerHTML = wordToGuess.join(" ");
}
getBeachWord()

const getAnimalsWord = () => {
    const randomWord = Math.floor(Math.random() * animals.length);
    const generatedWord = animals[randomWord];
    console.log(generatedWord);

    const wordToGuess = [];
    for(let i = 0; i < generatedWord.length; i++) {
      wordToGuess.push('_');
    }
    word.innerHTML = wordToGuess.join(" ");
}
getAnimalsWord()

const getFoodWord = () => {
  const randomWord = Math.floor(Math.random() * food.length);
  const generatedWord = food[randomWord];
  console.log(generatedWord);

  const wordToGuess = [];
    for(let i = 0; i < generatedWord.length; i++) {
      wordToGuess.push('_');
    }
    word.innerHTML = wordToGuess.join(" ");
}
getFoodWord()





 //.replace(/a-z/g, "_");
  // 
  // const hiddenWord = generatedWord
  // console.log(hiddenWord);




// take the generated word - open on new page as underscores,
// with keyboard and space for hangman drawing


  // const hiddenWord = convertedToString.replace(/A-Z/g, "_");
  // document.querySelector(".word").innerHTML = hiddenWord;


  const getLetter = (event) => {
    let value = event.target.textContent;
    console.log(value);
  };





