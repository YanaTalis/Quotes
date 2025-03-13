import quotes from '../data/quotes.js'
import { generateRandomInd } from '../utils.js'
import { handleFavBtn } from './favorites.js'

let currentQuote = null

function handleQuote() {
  const randomQuote = chooseRandomQuote(quotes)
  currentQuote = randomQuote
  displayQuote(randomQuote)
}

function displayQuote({ text, author, isFavorite }) {
  const quoteElement = document.getElementById('quote')
  const quoteAuthorElement = document.getElementById('author')
  quoteElement.textContent = text
  quoteAuthorElement.textContent = author
  handleFavBtn(isFavorite)
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInd(quotes.length)
  return quotes[randomIndex]
}

export { handleQuote, currentQuote }
