document.addEventListener("DOMContentLoaded", function () {

    // Letting me know the page finished loading
    console.log('Your Page Loaded');

    // Get the mask-graphic-caption DIV
    const maskCaption = document.querySelector('.landing-page__title-mask-graphic-caption');

    // Get the tagline DIV
    const tagline = document.querySelector('.landing-page__tagline');
    const taglineSource = document.querySelector('.landing-page__tagline-source');

    // Pull a random tagline from the array    
    const randomQuote = function (array) {
        let randomItem = array[Math.floor(Math.random() * array.length)];
        return array[randomItem.quote];
    }

    // Fetching the quotes JSON File
    const getQuotes = async () => {

        const response = await fetch('./data/quotes.json');
        const data = await response.json();
        
        // Get random item from data
        const currentQuote = data[Math.floor(Math.random() * data.length)];

        // Place the random tagline into the landing-page__tagline DIV
        tagline.innerText = `${currentQuote.quote}`;
        // Place the tagline source into the landing-page__tagline-source DIV
        console.log(taglineSource);
        taglineSource.innerText = `- ${currentQuote.source}`;

    };

    // Initiate fetch for a quote from the JSON file
    getQuotes();

    // Load the mask-graphic-caption DIV after 3 seconds
    setTimeout(function () {
        maskCaption.style.opacity = '1'
    }, 3000);

});