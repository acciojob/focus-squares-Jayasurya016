document.addEventListener('DOMContentLoaded', () => {
    // Select all elements with the class 'square'
    const squares = document.querySelectorAll('.square');

    // Define the colors
    const lavender = '#E6E6FA';
    const coffee = '#6F4E37';

    // Add mouseenter and mouseleave event listeners to each square
    squares.forEach(hoveredSquare => {
        hoveredSquare.addEventListener('mouseenter', () => {
            // Change the color of all squares except the one being hovered
            squares.forEach(otherSquare => {
                if (otherSquare !== hoveredSquare) {
                    otherSquare.style.backgroundColor = coffee;
                }
            });
        });

        hoveredSquare.addEventListener('mouseleave', () => {
            // When the mouse leaves, reset the color of all squares to lavender
            squares.forEach(square => {
                square.style.backgroundColor = lavender;
            });
        });
    });
});