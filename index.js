import quotes from './quotes.js'

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

  favoriteBtn.textContent = randomQuote.isFavorite ? 'Unfavorite' : 'Favorite'
  favoriteBtn.style.display = 'inline-block'
}

function toggleFavorite() {
  const currentQuote = quotes[currentQuoteIndex]
  currentQuote.isFavorite = !currentQuote.isFavorite

  favoriteBtn.textContent = currentQuote.isFavorite ? 'Unfavorite' : 'Favorite'

  if (currentQuote.isFavorite) {
    const favoriteCard = document.createElement('div')
    favoriteCard.classList.add('favorite-card')
    favoriteCard.innerHTML = `
    <p>${currentQuote.quote}</p>
    <p class="author">${currentQuote.author}</p>
    `
    favoritesContainer.appendChild(favoriteCard)
  } else {
    //rrmove fav card (if its unfavorite)
    const favoriteCards = document.querySelectorAll('.favorite-card')
    favoriteCards.forEach((card) => {
      if (card.textContent.includes(currentQuote.quote)) {
        card.remove()
      }
    })
  }
}

generateBtn.addEventListener('click', generateRandomQuote)
favoriteBtn.addEventListener('click', toggleFavorite)

// generateRandomQuote()
