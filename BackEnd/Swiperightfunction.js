function swipeRight() {
    // Do something when the user swipes right
    console.log('User swiped right!');
  }
  
  // Add touch event listeners to the document
  document.addEventListener('touchstart', handleTouchStart);
  document.addEventListener('touchmove', handleTouchMove);
  
  let xStart = null;
  
  function handleTouchStart(event) {
    // Get the starting X coordinate of the touch
    xStart = event.touches[0].clientX;
  }
  
  function handleTouchMove(event) {
    if (!xStart) {
      return;
    }
  
    let xEnd = event.touches[0].clientX;
    let xDiff = xEnd - xStart;
  
    if (xDiff > 0) {
      // The user swiped right
      swipeRight();
      xStart = null; // Reset the starting X coordinate
    }
      document.addEventListener('touchstart', function(event) {
  // Define a custom confirm message
  const message = "Are you sure you want to proceed?";

  // Call the built-in confirm function with the custom message
  const result = confirm(message);

  // If the user chooses to cancel, prevent the touch event from triggering
  if (!result) {
    event.preventDefault();
  }
          document.addEventListener("touchstart", function(event) {
  // Record the starting X coordinate of the touch
  const startX = event.touches[0].clientX;
  
  // Add a listener for the 'touchend' event
  document.addEventListener("touchend", function(event) {
    // Record the ending X coordinate of the touch
    const endX = event.changedTouches[0].clientX;
    
    // Check if the user swiped right
    if (endX > startX) {
      handleSwipeRight(); // Call the swipe right handler function
    }
  }, false);
}, false);
      // Define a function to track user input
function trackInput() {
  let userInput = ""; // Initialize user input as an empty string

  // Add a listener for the 'input' event on the input field
  const inputField = document.getElementById("myInput");
  inputField.addEventListener("input", function(event) {
    userInput = event.target.value; // Update user input with the new value
    console.log(userInput); // Log the updated user input to the console
  });
}
  }

  
