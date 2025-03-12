import quotes from './src/quotes.js'
import { toggleFavoriteIcon, showFavoriteCard, hideFavoriteCard } from './src/favoritesHandler.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')

const favoriteBtn = document.getElementById('favorite-btn')
const favoritesContainer = document.getElementById('favorites-container')

let currentQuoteIndex

function generateRandomQuote() {
  currentQuoteIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[currentQuoteIndex]

  quoteElement.textContent = randomQuote.quote
  quoteAuthorElement.textContent = randomQuote.author

  toggleFavoriteIcon(randomQuote.isFavorite, favoriteBtn)

  favoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite

  toggleFavoriteIcon(currentQuote.isFavorite, favoriteBtn)

  if (currentQuote.isFavorite) {
    showFavoriteCard(currentQuote.quote, currentQuote.author, favoritesContainer)
  } else {
    hideFavoriteCard(currentQuote.quote)
  }
}

generateBtn.addEventListener('click', generateRandomQuote)
favoriteBtn.addEventListener('click', toggleFavorite)

generateRandomQuote()
