// downloading a DOM element
const btn = document.querySelector("button");

//creating a variable (let, because will be changed)
let number = 1;


//or btn.addEventListener("click" , () => { ... }
btn.addEventListener("click" , function () { 

    //let number = 1  (only displayed once, because inside a function)


    //creates a div element and assigns it to a variable "divElement"
    const divElement = document.createElement('div');


    //add text to an "divElement"
    divElement.textContent = number

    //add the if() statment
    //if "number" is divisible by 5 do...
    if(number % 5 == 0) {

        //add class "circle" to div (<div class="circle"></div>)
        divElement.classList.add("circle");
        //console.log("true")
    }

    //add an item to the body (will be displayed on the website)
    document.body.appendChild(divElement);

    //add 1 to the "number"  (increment)
    number ++;
})
