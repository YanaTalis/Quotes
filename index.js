import quotes from './src/data/quotes.js'
import { toggleFavorite, hideBtn } from './src/handlers/favorites.js'
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js'
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js'

let currentQuote = null

function setCurrentQuote(quote) {
  currentQuote = quote
  localStorageSetItem('currentQuote', quote)
}

function init() {
  const currentQuoteLS = localStorageGetItem('currentQuote')
  if (currentQuoteLS) {
    displayQuote(currentQuoteLS)
    const quote = findQuoteById(quotes, currentQuoteLS.id)
    quote.isFavorite = currentQuoteLS.isFavorite
    currentQuote = quote
  }
}

window.addEventListener('load', init)

const favoritesContainer = document.getElementById('favorites-container')
const toggleBtn = document.getElementById('favorite-btn')

hideBtn(toggleBtn)

toggleBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, toggleBtn, favoritesContainer)
)

const generateBtn = document.getElementById('generate-btn')
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
)

export { toggleBtn }
