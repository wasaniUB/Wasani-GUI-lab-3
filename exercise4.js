const box = document.querySelector('.box');

/*The arrow function does not have it's own //this// because it inherits it from the surrounding scope which is often the window.
    When we executed the function, the //this/ was set to window which does not have a classList property which made it return an error.*/
box.addEventListener('click', (event) => {
    // BUG: this.classList.add('active') throws an error

    /*When using currentTarget, we explicitly told the function to refer specifically to the box which is attached to the addEventListener and not the window.
        This is what currentTarget returns and it's more reliable than //this// as it always refers to the attached element and not the broader scope. */
event.currentTarget.classList.add('active');
});