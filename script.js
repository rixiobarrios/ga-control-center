/*
 * You task is to make it so that when a user clicks on any of the 100 buttons
 * on the page, an alert pops up that says "You clicked a button!".
 *
 * BONUS: Can you make it so that when the user clicks on a button, the alert
 * tells them the number button they clicked on? (i.e. "You clicked button
 * number 74")
 *
 * Your solution here:
 */

const buttons = Array.from(document.querySelectorAll('.js-button'));
buttons.forEach((button, idx) => {
    button.addEventListener('click', () => {
        alert(`You clicked button ${idx}!`);
    });
});

// Link for repo here: https://github.com/rixiobarrios/js-event-propagation-practice */
