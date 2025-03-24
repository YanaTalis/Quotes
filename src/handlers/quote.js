import { generateRandomInd } from '../utils/math.js'
import { handleFavBtn } from './favorites.js'

function handleQuote(quotes, setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes)
  setCurrentQuote(randomQuote)
  displayQuote(randomQuote)
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote
  const quoteElement = document.getElementById('quote')
  const quoteTextElement = document.getElementById('quote-text')
  const quoteAuthorElement = document.getElementById('quote-author')
  //data-current-quote-id
  quoteElement.dataset.currentQuoteId = id
  quoteTextElement.textContent = text
  quoteAuthorElement.textContent = author
  handleFavBtn(isFavorite)
}

function chooseRandomQuote(quotes) {
  const randomIndex = generateRandomInd(quotes.length)
  return quotes[randomIndex]
}

export { handleQuote }
