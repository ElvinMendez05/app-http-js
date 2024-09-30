
const fechQuote = async() => {
   
    const res = await fetch('https://api.breakingbadquotes.xyz/v1/quotes');
    const data = await res.json();
    
    console.log(data[0]);
    return data[0];

}

export const breakingBadApp = async(element) => {
   
    document.querySelector('#app-title').innerHTML = 'App-BreakingBad-js';
    element.innerHTML = 'Loading.....';
    // const quote = await fechQuote();
    // element.innerHTML = 'Listo';

    const quoteLabel = document.createElement('blockquote');
    const authoLabel = document.createElement('h3');
    const nextQuoteButton = document.createElement('button');
    nextQuoteButton.classList.add('green');
    nextQuoteButton.innerText = 'Next Quote';

    const renderQuote = (data) => {
        quoteLabel.innerHTML = data.quote;
        authoLabel.innerHTML = data.author;
        element.replaceChildren(quoteLabel, authoLabel, nextQuoteButton);
    }

     nextQuoteButton.addEventListener('click', async(data) => {
          element.innerHTML = 'Loading.....'; 
          const quote = await fechQuote(); 
          renderQuote(quote); 
     })

    fechQuote()
       .then(renderQuote);

}