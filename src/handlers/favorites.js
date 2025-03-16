import {toggleBtn} from '../../index.js'

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite // по ссылке!!
  const { text, author, isFavorite } = quote
  toggleFavoriteIcon(isFavorite, btn)

  if (isFavorite) {
    showFavoriteCard(text, author, container)
  } else {
    hideFavoriteCard(text)
  }
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

function showFavoriteCard(text, author, container) {
  const favoriteCard = document.createElement('div')
  favoriteCard.classList.add('favorite-card')
  favoriteCard.innerHTML = `
      <p>${text}</p>
      <p class="author">${author}</p>
      `
  container.appendChild(favoriteCard)
}

function hideFavoriteCard(text) {
  const favoriteCards = document.querySelectorAll('.favorite-card')
  favoriteCards.forEach((card) => {
    if (card.textContent.includes(text)) {
      card.remove()
    }
  })
}

export { handleFavBtn, toggleFavorite, hideBtn }
