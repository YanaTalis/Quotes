const quotes = [
  'The only way to do great work is to love what you do. - Steve Jobs',
  'Innovation distinguishes between a leader and a follower. - Steve Jobs',
  "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",

  'All our dreams can come true if we have the courage to pursue them. - Walt Disney',
  'The way to get started is to quit talking and begin doing. - Walt Disney',
  'If you can dream it, you can do it. - Walt Disney',

  'Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein',
  'Strive not to be a success, but rather to be of value. - Albert Einstein',
  'I have no special talent. I am only passionately curious. - Albert Einstein',

  'It always seems impossible until it’s done. - Nelson Mandela',
  'Do not judge me by my successes, judge me by how many times I fell down and got back up again. - Nelson Mandela',
  'I learned that courage was not the absence of fear, but the triumph over it. - Nelson Mandela',

  'I have a dream that one day this nation will rise up. - Martin Luther King Jr.',
  'The time is always right to do what is right. - Martin Luther King Jr.',
  'Faith is taking the first step even when you can’t see the whole staircase. - Martin Luther King Jr.',

  'Whether you think you can, or you think you can’t – you’re right. - Henry Ford',
  'Failure is simply the opportunity to begin again, this time more intelligently. - Henry Ford',
  'Coming together is a beginning; keeping together is progress; working together is success. - Henry Ford',

  'Be the change that you wish to see in the world. - Mahatma Gandhi',
  'Strength does not come from physical capacity. It comes from an indomitable will. - Mahatma Gandhi',
  'The future depends on what we do in the present. - Mahatma Gandhi',

  'It does not matter how slowly you go as long as you do not stop. - Confucius',
  'Our greatest glory is not in never falling, but in rising every time we fall. - Confucius',
  'Life is really simple, but we insist on making it complicated. - Confucius',

  'Success is not final, failure is not fatal: it is the courage to continue that counts. - Winston Churchill',
  'If you are going through hell, keep going. - Winston Churchill',
  'Never, never, never give up. - Winston Churchill',
]

const quoteElement = document.getElementById('quote')
const generateBtn = document.getElementById('generate-btn')

function generateRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length)
  console.log(randomIndex)
  const randomQuote = quotes[randomIndex]
  quoteElement.textContent = randomQuote
}

generateBtn.addEventListener('click', generateRandomQuote)

