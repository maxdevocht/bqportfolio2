var splide = new Splide( '.splide', {
    perPage: 1,
    perMove: 1,
    gap    : '1rem',
    padding: '2rem',
    type: 'loop',
    drag: 'free',
    snap: true,
    autoplay: true,
    breakpoints: {
      640: {
        perPage: 2,
        gap    : '.7rem',
        padding: '1.5rem',
      },
      480: {
        perPage: 1,
        gap    : '.7rem',
        padding: '1.5rem',
      },
    },
} );
  
splide.mount();
  