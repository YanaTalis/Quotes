import { toggleBtn } from '../../index.js'

function toggleFavorite(quote, setCurrentQuote, btn, container) {
  const shouldToggleIsFavorite = true
  setCurrentQuote(quote, shouldToggleIsFavorite)
  const { id, isFavorite } = quote
  toggleFavoriteIcon(isFavorite, btn)

  isFavorite ? showFavoriteCard(quote, container) : removeFavCard(id)
}

function handleFavBtn(isFavorite) {
  showFavBtn()
  toggleFavoriteIcon(isFavorite)
}

function toggleFavoriteIcon(isFavorite) {
  toggleBtn.classList.toggle('fa', isFavorite)
  toggleBtn.classList.toggle('far', !isFavorite)
}

function showFavBtn() {
  toggleBtn.style.display = 'inline-block'
}

function hideBtn() {
  toggleBtn.style.display = 'none'
}

function removeFavQuote(quote) {
  quote.isFavorite = false
  removeFavCard(quote.id)

  const currentQuote = document.querySelector('[data-current-quote-id]')
  const currentQuoteId = currentQuote.dataset.currentQuoteId
  if (quote.id === currentQuoteId) {
    toggleFavoriteIcon(quote.isFavorite)
  }
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.dataset.quoteId = id
  favoriteCard.innerHTML = ` 
      <p>${text}</p>
      <p class="favorite-card-author">${author}</p>
      <button class="btn btn-delete">Remove from favorites  <i class="fa fa-trash-alt fa-lg"></i></button>
      `
  container.appendChild(favoriteCard)

  const removeBtn = favoriteCard.querySelector('.btn-delete')
  removeBtn.addEventListener('click', () => removeFavQuote(quote))
}

function removeFavCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`)
  if (card) {
    card.remove()
  }
}

export { handleFavBtn, toggleFavorite, hideBtn, showFavoriteCard }
