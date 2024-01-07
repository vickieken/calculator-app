const label = document.querySelector(".label")

const body = document.querySelector("body")

const checkbox = document.getElementById("checkbox")

const pELs = document.querySelectorAll("p")

const buttonELs = document.querySelectorAll("button")

const spanEL = document.querySelector("span")

const inputEL = document.querySelector("#input")

inputEL.classList.add("white")


const digitsEl = document.querySelector(".digits")

const resetEl = document.querySelector(".reset")

const equalbtnEl = document.querySelector(".equalbtn")

const delEl = document.querySelector(".del")

let string = "";


console.log(input.Placeholder);

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

buttonELs.forEach(buttonEL => {
    buttonEL.addEventListener("click", (e)=> {
        if(e.target.innerHTML == "=") {
            string = eval(string);
            inputEL.value = string;
        } else if (e.target.innerHTML == "RESET") {
            string = "";
            inputEL.value = string;
        } else if (e.target.innerHTML == "DEL") {
            string = string.substring(0, string.length-1);
            inputEL.value = string;
        } else {
            string += e.target.innerHTML;
            inputEL.value = string;
        }
    }) 
});