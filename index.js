import quotes from './src/quotes.js'
import { handleFavBtn } from './src/favoritesHandler.js'
import { generateRandomInd } from './src/utils.js'

const generateBtn = document.getElementById('generate-btn')

let currentQuoteIndex
let currentQuote = null

function displayQuote({ text, author, isFavorite }) {
  const quoteElement = document.getElementById('quote')
  const quoteAuthorElement = document.getElementById('author')
  quoteElement.textContent = text
  quoteAuthorElement.textContent = author
  handleFavBtn(isFavorite)
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInd(quotes.length)
  currentQuoteIndex = randomIndex
  return quotes[randomIndex]
}

function chooseAndDisplayQuote() {
  const randomQuote = chooseRandomQuote(quotes)
  currentQuote = randomQuote
  displayQuote(randomQuote)
}

generateBtn.addEventListener('click', chooseAndDisplayQuote)

export { currentQuote }
