//your JS code here. If required.
const squares = document.querySelectorAll('.square');

squares.forEach((square, index) => {
  square.addEventListener('mouseenter', () => {
    squares.forEach((otherSquare, i) => {
      otherSquare.style.backgroundColor = i === index ? '#E6E6FA' : '#6F4E37'; // Coffee
    });
  });

  square.addEventListener('mouseleave', () => {
    squares.forEach(s => {
      s.style.backgroundColor = '#E6E6FA'; // Reset to Lavender
    });
  });
});