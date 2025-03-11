import quotes from './quotes.js'

const quoteElement = document.getElementById('quote')
const quoteAuthorElement = document.getElementById('author')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  const randomQuote = quotes[randomIndex]
  quoteElement.textContent = randomQuote.quote
  quoteAuthorElement.textContent = randomQuote.author
}

generateBtn.addEventListener('click', generateRandomQuote)
