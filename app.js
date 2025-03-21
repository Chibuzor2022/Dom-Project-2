

// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
  // Select the color box and button
  const colorBox = document.getElementById('color-box');
  const changeColorBtn = document.getElementById('change-color-btn');

  // Function to generate a random color
  function getRandomColor() {
    const num = '0123456789ABCDEF';
    let color = '#';
    for (let x = 0; x < 6; x++) {
      color += num[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // Add event listener to the button
  changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
