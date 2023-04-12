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
  }
  