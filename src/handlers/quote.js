import { generateRandomInd } from '../utils.js'
import { handleFavBtn } from './favorites.js'

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes)
  setCurrentQuote(randomQuote)
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

export { handleQuote }
