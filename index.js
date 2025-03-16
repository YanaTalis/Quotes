import quotes from './src/data/quotes.js'
import { toggleFavorite, hideBtn } from './src/handlers/favorites.js'
import { handleQuote } from './src/handlers/quote.js'

let currentQuote = null

function setCurrentQuote(quote) {
  currentQuote = quote
}

const favoritesContainer = document.getElementById('favorites-container')
const toggleBtn = document.getElementById('favorite-btn')

hideBtn(toggleBtn)

toggleBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, toggleBtn, favoritesContainer)
)

const generateBtn = document.getElementById('generate-btn')
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, setCurrentQuote)
)

export { toggleBtn }
