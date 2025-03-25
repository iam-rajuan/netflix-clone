// let left_button = document.getElementsByClassName("bi-chevron-left")[0];
// let right_button = document.getElementsByClassName("bi-chevron-right")[0];
// let cards = document.getElementsByClassName('card-elements')[0]

// left_button.addEventListener('click', ()=>{
//     cards.scrollLeft -=200;
//     console.log("hi");
    
// })

// right_button.addEventListener('click', ()=>{
//     cards.scrollLeft +=200;
//     console.log("hlw");
// })


let left_button = document.getElementsByClassName("bi-chevron-left")[0];
let right_button = document.getElementsByClassName("bi-chevron-right")[0];
let cardsContainer = document.getElementsByClassName('card-wrapper')[0];

// Calculate scroll amount based on card width
const scrollAmount = 420; // Adjust based on your card width + margin

left_button.addEventListener('click', () => {
    cardsContainer.scrollBy({
        left: -scrollAmount,
        behavior: 'smooth'
    });
});

right_button.addEventListener('click', () => {
    cardsContainer.scrollBy({
        left: scrollAmount,
        behavior: 'smooth'
    });
});





// loop
document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.card-container');
    const elements = document.querySelector('.card-elements');
    const cards = document.querySelectorAll('.cards');
    const cardWidth = cards[0].offsetWidth + 20; // Include margin
    
    let currentPosition = 0;
    let isPaused = false;
    let scrollInterval;
  
    function scrollStep() {
      if (isPaused) return;
      
      currentPosition += cardWidth;
      if (currentPosition > (cards.length - 6) * cardWidth) {
        currentPosition = 0;
      }
      
      elements.style.transform = `translateX(-${currentPosition}px)`;
      
      // Pause after each movement
      isPaused = true;
      setTimeout(() => {
        isPaused = false;
      }, 2000); // Pause for 1 second
    }
  
    // Start auto-scroll with initial delay
    setTimeout(() => {
      scrollInterval = setInterval(scrollStep, 2000); // Move every 2 seconds (1s movement + 1s pause)
    }, 2000);
  
    // Pause on hover
    container.addEventListener('mouseenter', () => {
      clearInterval(scrollInterval);
    });
  
    // Resume on mouse leave
    container.addEventListener('mouseleave', () => {
      scrollInterval = setInterval(scrollStep, 2000);
    });
  
    // Manual navigation buttons
    document.querySelector('.bi-chevron-left').addEventListener('click', () => {
      currentPosition = Math.max(0, currentPosition - cardWidth);
      elements.style.transform = `translateX(-${currentPosition}px)`;
    });
  
    document.querySelector('.bi-chevron-right').addEventListener('click', () => {
      currentPosition = Math.min((cards.length - 5) * cardWidth, currentPosition + cardWidth);
      elements.style.transform = `translateX(-${currentPosition}px)`;
    });
  });

  