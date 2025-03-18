import { toggleBtn } from '../../index.js'

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite // по ссылке!!
  const { id, isFavorite } = quote
  toggleFavoriteIcon(isFavorite, btn)

  isFavorite ? showFavoriteCard(quote, container) : hideFavoriteCard(id)
}

function handleFavBtn(isFavorite) {
  showFavBtn(toggleBtn)
  toggleFavoriteIcon(isFavorite, toggleBtn)
}

function toggleFavoriteIcon(isFavorite, element) {
  element.classList.toggle('fa', isFavorite)
  element.classList.toggle('far', !isFavorite)
}

function showFavBtn(btn) {
  btn.style.display = 'inline-block'
}

function hideBtn(btn) {
  btn.style.display = 'none'
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.dataset.quoteId = id
  favoriteCard.innerHTML = `
      <p>${text}</p>
      <p class="author">${author}</p>
      `
  container.appendChild(favoriteCard)
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`)
  if (card) {
    card.remove()
  }
}

export { handleFavBtn, toggleFavorite, hideBtn }
