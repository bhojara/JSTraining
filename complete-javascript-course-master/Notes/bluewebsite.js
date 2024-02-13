// Get the button element (assuming it exists on the page with the ID "myButton")
const button = document.getElementById("myButton");

// Set initial value (true for "Yes", false for "No")
let currentValue = true;

// Add click event listener to the button
button.addEventListener("click", () => {
  // Toggle the value
  currentValue = !currentValue;

  // Get the window dimensions
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;

  // Generate random values for new coordinates within window bounds
  const newX = Math.floor(Math.random() * (windowWidth - button.offsetWidth));
  const newY = Math.floor(Math.random() * (windowHeight - button.offsetHeight));

  // Update the button's style with new coordinates
  button.style.left = `${newX}px`;
  button.style.top = `${newY}px`;

  // Update the button text based on the value
  button.textContent = currentValue ? "Yes" : "No";
});
