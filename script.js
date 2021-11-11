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

const books = ["frankenstein", "pride and prejudice", "the lord of the rings", "great expectations", "charlie and the chocolate factory", "the famous five", "harry potter",  "the very hungry caterpillar", "charlottes web", "where the wild things are"]
const movies = ["the shining", "forrest gump", "titanic", "the exorcist", "scream", "rocky", "toy story", "the lion king", "ghostbusters", "star wars"]
const countries = ["mexico", "france", "italy", "china", "australia", "russia", "canada", "ireland", "norway", "singapore"]
const beach = ["bucket", "sand", "spade", "ice cream", "waves", "sun cream", "sandcastle", "towel", "ice lollies", "swimming"]
const animals = ["fox", "mouse", "elephant", "horse", "giraffe", "flamingo", "zebra", "monkey", "penguin", "camel"];
const food = ["fajitas", "toast", "curry", "salad", "sausages", "bananas", "chocolate", "biscuits", "potatoes", "pasta"];

const word = document.querySelector(".word");





const getBooksWord = () => {
  const randomWord = Math.floor(Math.random() * books.length);
  word.innerHTML = books[randomWord];
}
getBooksWord()


const getMoviesWord = () => {
  const randomWord = Math.floor(Math.random() * movies.length);
  word.innerHTML = movies[randomWord];
}
getMoviesWord()

const getCountriesWord = () => {
  const randomWord = Math.floor(Math.random() * countries.length);
  word.innerHTML = countries[randomWord];
}
getCountriesWord()

const getBeachWord = () => {
  const randomWord = Math.floor(Math.random() * beach.length);
  word.innerHTML = beach[randomWord];
}
getBeachWord()

const getAnimalsWord = () => {
    const randomWord = Math.floor(Math.random() * animals.length);
    word.innerHTML = animals[randomWord];
}
getAnimalsWord()

const getFoodWord = () => {
  const randomWord = Math.floor(Math.random() * food.length);
  word.innerHTML = food[randomWord];
}
getFoodWord()



 //.replace(/a-z/g, "_");
  // const generatedWord = word.innerHTML;
  // const hiddenWord = generatedWord
  // console.log(hiddenWord);

// let hiddenWord = [];
// for(let i = 0; i < word.length; i++) {
//   hiddenWord.push('_');
//   hiddenWord.toString();


// take the generated word - open on new page as underscores,
// with keyboard and space for hangman drawing


  // const hiddenWord = convertedToString.replace(/A-Z/g, "_");
  // document.querySelector(".word").innerHTML = hiddenWord;


  const getLetter = (event) => {
    let value = event.target.textContent;
    console.log(value);
  };





