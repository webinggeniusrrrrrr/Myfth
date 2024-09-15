let points = 💰 0;
const clickButton = document.getElementById('click-button');
const pointsDisplay = document.getElementById('points');

// Load saved points from local storage
const savedPoints = localStorage.getItem('points');
if (savedPoints) {
  points = parseInt(savedPoints);
  pointsDisplay.textContent = ` ${points}`;
}

clickButton.addEventListener('click', () => {
  points++;
  pointsDisplay.textContent = ` ${points}`;

  // Save the updated points to local storage
  localStorage.setItem('points', points);
});

