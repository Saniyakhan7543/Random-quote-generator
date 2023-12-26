function getRandomQuote() {
  const quoteContainer = document.getElementById('quote-text');
  const newQuoteBtn = document.getElementById('new-quote-btn');

  // Disable the button during the fetch to prevent multiple requests
  newQuoteBtn.disabled = true;

  fetch('https://api.quotable.io/random')
    .then(response => response.json())
    .then(data => {
      quoteContainer.textContent = `"${data.content}" - ${data.author}`;
    })
    .catch(error => {
      console.error('Error fetching quote:', error);
      quoteContainer.textContent = 'Error fetching quote. Please try again.';
    })
    .finally(() => {
      // Re-enable the button after the fetch is complete
      newQuoteBtn.disabled = false;
    });
}

// Initial load of a quote when the page loads
getRandomQuote();


// explaination:

// getRandomQuote Function:
// function getRandomQuote() { ... }: Defines a function named getRandomQuote.

// const quoteContainer = document.getElementById('quote-text');: Retrieves the HTML element with the ID "quote-text" and stores it in the quoteContainer variable. This element will be used to display the fetched quote.

// const newQuoteBtn = document.getElementById('new-quote-btn');: Retrieves the HTML element with the ID "new-quote-btn" and stores it in the newQuoteBtn variable. This button will be disabled during the quote fetch to prevent multiple requests.

// newQuoteBtn.disabled = true;: Disables the "New Quote" button to prevent users from triggering multiple quote requests while one is still being fetched.

// fetch('https://api.quotable.io/random'): Initiates a fetch request to the Quotable API to get a random quote.

// .then(response => response.json()): Chains a promise to handle the response from the API. It converts the response to JSON format.

// .then(data => { quoteContainer.textContent = "${data.content}" - ${data.author}; }): Chains another promise to handle the parsed JSON data. It updates the textContent of the quoteContainer with the content and author of the fetched quote.

// .catch(error => { console.error('Error fetching quote:', error); quoteContainer.textContent = 'Error fetching quote. Please try again.'; }): Catches any errors that might occur during the fetch process. If an error occurs, it logs the error to the console and updates the textContent of quoteContainer with an error message.

// .finally(() => { newQuoteBtn.disabled = false; });: Executes the specified function in the finally block, regardless of whether the fetch was successful or resulted in an error. In this case, it re-enables the "New Quote" button.

// getRandomQuote Initialization:
// getRandomQuote();: Calls the getRandomQuote function immediately to fetch and display a random quote when the page loads.
// This code sets up a function to fetch a random quote from an API, disables the button during the fetch to prevent multiple requests, and handles success or error scenarios. The finally block ensures that the button is re-enabled after the fetch is complete. The function is called initially to display a quote when the page loads