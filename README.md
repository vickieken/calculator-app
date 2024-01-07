# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./Screenshot%202024-01-08%20at%206.44.29%20AM.png)
![](./Screenshot%202024-01-08%20at%206.45.03%20AM.png)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- javaScript

### What I learned

While working on this project I learnt how to make changes to placeholders using javascript and also how to toggle from bright mode to dark mode

below are some of my code snippets:

```html
<input type="checkbox" id="checkbox" class="checkbox">
          <label for="checkbox" class="label"><div class="toggle"></div></label>
```
```css
.checkbox:checked + .label .toggle {
    left: 60%;
    background-color: var(--Orange-key-background-toggle);
}
```
```js
checkbox.addEventListener("change", ()=> {
    body.classList.toggle("theme2-body");
    pELs.forEach(pEl => {
        pEl.classList.toggle("theme2");
    });

    buttonELs.forEach(buttonEL => {
        buttonEL.classList.toggle("theme2-button")
    });

    digitsEl.classList.toggle("theme2-digits");

    resetEl.classList.toggle("theme2-reset");

    equalbtnEl.classList.toggle("theme2-equalbtn");

    delEl.classList.toggle("theme2-del");

    label.classList.toggle("theme2-toggle-bg");

    inputEL.classList.toggle("theme2-input");

    inputEL.classList.add("black");

    spanEL.classList.toggle("theme2");

    spanEL.style.transition;
})
```

### Continued development

In my future projects I'd love to learn how to add more than 2 modes to my website or project

## Author

- Frontend Mentor - [@kenvickie](https://www.frontendmentor.io/profile/kenvickie)
- linkedin - [@yourusername](https://www.linkedin.com/mynetwork/)