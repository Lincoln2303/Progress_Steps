// II.01. We start it out by saving the progress, buttons, and circles to a variable:
const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

// II.02. Then we're gonna set the current index:
// NOTE: We use this currentActive as a variable for "deciding things"
let currentActive = 1;

// II.03. We're adding an evenetListener to the next button:
next.addEventListener('click', () => {
    // NOTE: Here we want to take the current active and increase it by one
    currentActive++;
    // Testing:
    // console.log(currentActive);
    // NOTE: We create a boolean
    if(currentActive > circles.length) {
        currentActive = circles.length;
    } 
    // Testing:
    // console.log(currentActive);
    // II.06. Adding update() function: (NOTE: That's how circles turn to blue or grey)
    update();
})

// II.04. We're also going to create eventListener for prev button:
prev.addEventListener('click', () => {
    // NOTE: Here we're going to decrament the currentActive number:
    currentActive--;
    // NOTE: Setting a boolean (in case if currentActive would go below 1)
    if(currentActive < 1) {
        currentActive = 1;
    }
    // II.06. Adding update() function: (NOTE: That's how circles turn to blue or grey)
    update();
})

// II.05. We're making a function:
// NOTE: Here for each circle we're going to check, if the index of the current circle is less than currentActive, then we add the active class, else remove it
// AFTER: We're adding the function to both button eventListeners (II.06.)
function update() {
    circles.forEach((circle, idx) => {
        if(idx < currentActive) {
            circle.classList.add('active'); 
        } else {
            circle.classList.remove('active');
        }
    })
    // II.07. Saving all the actives to a variable:
    const actives = document.querySelectorAll('.active');
    // Testing: (NOTE: This is a way how we can decide what should be the width for the active lines )
    // console.log(actives.length, circles.length);
    // II.08. We'll change the active line:
    progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + '%';
    // II.09. We set up a boolean for disabling the buttons:
    // NOTE: If currentActive equals to the inital number, then the prev button is disabled, the currentActive reaches the end of the length of the cirle, then next button is disabled, but any other way they aren't disabled
    if(currentActive === 1) {
        prev.disabled = true;
    } else if (currentActive === circles.length) {
        next.disabled = true;
    } else {
        prev.disabled = false;
        next.disabled = false;
    }
}



