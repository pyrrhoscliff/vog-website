document.addEventListener("DOMContentLoaded", function() {

    console.log('Your Page Loaded');

    // Get the caption DIV
    const maskCaption = document.querySelector('.landing-page__title-mask-graphic-caption');

    // Get the tagline DIV
    const tagline = document.querySelector('.landing-page__tagline');

    // MAKE THE TAGLINE PULL FROM AN ARRAY
    // Array of taglines
    let taglineArray = [
    'There will be something here... One day.',
    'The voice of the people is the voice of grog.',
    'Are you telling me you built a TIME MACHINE... out of a delorean?!'
    ];

    // Pull a random tagline from the array    
    const random = function(array) {
        let randomItem = array[Math.floor(Math.random() * array.length)]
        return randomItem;
    }
    
    // Place the random tagline into the tagline DIV
    tagline.innerText =  random(taglineArray);


    // Load the caption DIV after a specific amount of time
    setTimeout(function () {
        maskCaption.style.opacity = '1'
    }, 3000);



});