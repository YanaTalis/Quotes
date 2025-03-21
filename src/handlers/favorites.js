import { toggleBtn } from '../../index.js'

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite // по ссылке!!
  const { id, isFavorite } = quote
  toggleFavoriteIcon(isFavorite, btn)

  isFavorite ? showFavoriteCard(quote, container) : hideFavoriteCard(id)
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

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.dataset.quoteId = id
  favoriteCard.innerHTML = ` 
      <p>${text}</p>
      <p class="author">${author}</p>
      <button class="btn btn-delete">Unfavorite</button>
      `
  container.appendChild(favoriteCard)

  const removeBtn = favoriteCard.querySelector('.btn-delete')
  removeBtn.addEventListener('click', () => {
    quote.isFavorite = !quote.isFavorite
    hideFavoriteCard(id)
    toggleFavoriteIcon(quote.isFavorite)
  })
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`)
  if (card) {
    card.remove()
  }
}

export { handleFavBtn, toggleFavorite, hideBtn }
