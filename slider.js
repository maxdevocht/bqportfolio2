// Select all elements with the class 'splide' and create Splide instances for each.
document.querySelectorAll('.splide').forEach(function (element) {
    // Options for each Splide instance.
    var options = {
        perPage: 1,
        perMove: 1,
        gap: '1rem',
        padding: '2rem',
        type: 'loop',
        drag: 'free',
        snap: true,
        autoplay: false,
        breakpoints: {
            640: {
                perPage: 2,
                gap: '.7rem',
                padding: '1.5rem',
            },
            480: {
                perPage: 1,
                gap: '.7rem',
                padding: '1.5rem',
            },
        },
    };

    // Create a new Splide instance for each element with the specified options.
    new Splide(element, options).mount();
});


  