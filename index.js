const quotes = [
  {
    quote: 'The only way to do great work is to love what you do',
    author: 'Steve Jobs',
  },
  {
    quote: 'Innovation distinguishes between a leader and a follower',
    author: 'Steve Jobs',
  },
  {
    quote: "Your time is limited, so don't waste it living someone else's life",
    author: 'Steve Jobs',
  },
  {
    quote: 'All our dreams can come true if we have the courage to pursue them',
    author: 'Walt Disney',
  },
  {
    quote: 'The way to get started is to quit talking and begin doing',
    author: 'Walt Disney',
  },
  {
    quote: 'If you can dream it, you can do it',
    author: 'Walt Disney',
  },
  {
    quote:
      'Life is like riding a bicycle. To keep your balance, you must keep moving',
    author: 'Albert Einstein',
  },
  {
    quote: 'Strive not to be a success, but rather to be of value',
    author: 'Albert Einstein',
  },
  {
    quote: 'I have no special talent. I am only passionately curious',
    author: 'Albert Einstein',
  },
  {
    quote: 'It always seems impossible until it’s done',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'Do not judge me by my successes, judge me by how many times I fell down and got back up again',
    author: 'Nelson Mandela',
  },
  {
    quote:
      'I learned that courage was not the absence of fear, but the triumph over it',
    author: 'Nelson Mandela',
  },
  {
    quote: 'I have a dream that one day this nation will rise up',
    author: 'Martin Luther King Jr.',
  },
  {
    quote: 'The time is always right to do what is right',
    author: 'Martin Luther King Jr.',
  },
  {
    quote:
      'Faith is taking the first step even when you can’t see the whole staircase',
    author: 'Martin Luther King Jr.',
  },
  {
    quote: 'Whether you think you can, or you think you can’t – you’re right',
    author: 'Henry Ford',
  },
  {
    quote:
      'Failure is simply the opportunity to begin again, this time more intelligently',
    author: 'Henry Ford',
  },
  {
    quote:
      'Coming together is a beginning; keeping together is progress; working together is success',
    author: 'Henry Ford',
  },
  {
    quote: 'Be the change that you wish to see in the world',
    author: 'Mahatma Gandhi',
  },
  {
    quote:
      'Strength does not come from physical capacity. It comes from an indomitable will',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'The future depends on what we do in the present',
    author: 'Mahatma Gandhi',
  },
  {
    quote: 'It does not matter how slowly you go as long as you do not stop',
    author: 'Confucius',
  },
  {
    quote:
      'Our greatest glory is not in never falling, but in rising every time we fall',
    author: 'Confucius',
  },
  {
    quote: 'Life is really simple, but we insist on making it complicated',
    author: 'Confucius',
  },
  {
    quote:
      'Success is not final, failure is not fatal: it is the courage to continue that counts',
    author: 'Winston Churchill',
  },
  {
    quote: 'If you are going through hell, keep going',
    author: 'Winston Churchill',
  },
  {
    quote: 'Never, never, never give up',
    author: 'Winston Churchill',
  },
]

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
