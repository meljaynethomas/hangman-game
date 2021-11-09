// CLICK PLAY BUTTON TO START GAME
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

const animals = ["fox", "mouse", "elephant", "horse", "giraffe", "flamingo", "zebra", "monkey", "penguin", "camel"];
const food = ["fajitas", "toast", "curry", "salad", "sausages", "bananas", "chocolate", "biscuits", "potatoes", "pasta"];
const word = document.querySelector("#word");


const getAnimalsWord = () => {
    const randomWord = Math.floor(Math.random() * animals.length)
    word.innerHTML = animals[randomWord];
}
getAnimalsWord()

const getFoodWord = () => {
  const randomWord = Math.floor(Math.random() * food.length)
  word.innerHTML = food[randomWord];
}
getFoodWord()
