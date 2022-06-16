const randomQuoteBtn = document.querySelector('button#random-quote');
const randomQuoteResponse = document.querySelector('code#random-quote-response');

randomQuoteBtn.addEventListener('click', fetchRandomQuote)

async function fetchRandomQuote() {
  try {
    const response = await fetch('http://ghibli-quotes.herokuapp.com/api/random');
    const { film, quote } = await response.json();

    randomQuoteResponse.innerHTML = `
      {
        film: <span class="string">${film},</span>
        quote: <span class="string">${truncateStr(quote, 70)},</span>
      }
    `;
  } catch (err) {
    console.error(`Error: ${err}`)
  }
}

function truncateStr(string, num) {
  if (string.length <= num) return string;

  return string.slice(0, num) + '...'
}