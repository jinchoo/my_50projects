const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');
const prev = document.getElementById('prev');
const next = document.getElementById('next');

// it is starting from 1
let currentActive = 1;

//listening for the click event on the next button
next.addEventListener('click', () => {
//    increment the currentActive
  currentActive++;
  // if currentActive is greater than the length of the circle, set it to the length of the circle
    if (currentActive > circle.length) {
    currentActive = circle.length;
    }
    //function to update the progress bar
    update();
});

//listening for the click event on the prev button
prev.addEventListener('click', () => {
  // decrement the currentActive
    currentActive--;
    // if currentActive is less than 1, set it to 1
  if (currentActive < 1) {
    currentActive = 1;
  }
    //function to update the progress bar
    update();
});

//function to update the progress bar
function update() {
    // loop through the circle
    circle.forEach((circle, idx) => {
        // if the idx is less than the currentActive, add the active class to the circle
        if (idx < currentActive) {
            circle.classList.add('active');
            // else remove the active class from the circle
        } else {
            circle.classList.remove('active');
        }
    })
    
    const actives = document.querySelectorAll('.active');
    
    // length of the actives -1  / the length of the circle - 1 = the percentage of the progress bar
    progress.style.width = (actives.length - 1) / (circle.length - 1) * 100 + '%';

   // if the currentActive is equal to 1, remove the disabled class from the prev button
    if (currentActive === 1) {
        prev.diabled = true;
    // else if the currentActive is equal to the length of the circle, remove the disabled class from the next button
    } else if (currentActive === circle.length) {
        next.disabled = true;
    // else remove the disabled class from both the prev and next buttons
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}
