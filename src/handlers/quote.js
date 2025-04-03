import { generateRandomInd } from '../utils/math.js'
import { handleFavBtn } from './favorites.js'

function handleQuote(quotes, favoriteQuotes,setCurrentQuote) {
  const randomQuote = chooseRandomQuote(quotes)
  
  if(favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true
  }

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

function findQuoteById(quotes, id) {
  return quotes.find((quote) => quote.id === id)
}

export { handleQuote, displayQuote, findQuoteById }
