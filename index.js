import quotes from './src/data/quotes.js'
import {
  toggleFavorite,
  hideBtn,
  showFavoriteCard,
} from './src/handlers/favorites.js'
import {
  handleQuote,
  displayQuote,
  findQuoteById,
} from './src/handlers/quote.js'
import {
  localStorageSetItem,
  localStorageGetItem,
} from './src/utils/localStorage.js'

const CURRENT_QUOTE_KEY = 'currentQuote'
const FAVORITE_QUOTES_KEY = 'favoriteQuotes'

let currentQuote = null
const favoriteQuotes = []

function setCurrentQuote(quote, shouldToggleIsFavorite = false) {
  if (shouldToggleIsFavorite) {
    quote.isFavorite = !quote.isFavorite
    //change LS favoriteQuotes
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote })
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id
      )
      if (index !== -1) {
        favoriteQuotes.splice(index, 1)
      }
    }
    localStorageSetItem(FAVORITE_QUOTES_KEY, favoriteQuotes)
  }

  currentQuote = quote
  localStorageSetItem(CURRENT_QUOTE_KEY, currentQuote)
}

const favoritesContainer = document.getElementById('favorites-container')
const toggleBtn = document.getElementById('favorite-btn')

hideBtn(toggleBtn)

toggleBtn.addEventListener('click', () =>
  toggleFavorite(currentQuote, setCurrentQuote, toggleBtn, favoritesContainer)
)

const generateBtn = document.getElementById('generate-btn')
generateBtn.addEventListener('click', () =>
  handleQuote(quotes, favoriteQuotes, setCurrentQuote)
)

function init() {
  const currentQuoteLS = localStorageGetItem(CURRENT_QUOTE_KEY)
  if (currentQuoteLS) {
    displayQuote(currentQuoteLS)
    const quote = findQuoteById(quotes, currentQuoteLS.id)
    quote.isFavorite = currentQuoteLS.isFavorite
    currentQuote = quote
  }

  const favoriteQuotesLS = localStorageGetItem(FAVORITE_QUOTES_KEY)
  favoriteQuotesLS.forEach((quote) => {
    showFavoriteCard(quote, favoritesContainer)
    favoriteQuotes.push(quote)
  })
}

window.addEventListener('load', init)

export { toggleBtn }
