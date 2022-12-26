/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

// select sections from html by element
const sections = document.querySelectorAll("section");
const ul = document.querySelector(".navbar__menu");

/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



function craeteList() {
    
    //create freg DOM
    const freg = document.createDocumentFragment();
    sections.forEach(function (section) {
        //create li + a
        const li = document.createElement("li");
        let a = document.createElement("a");
        // add text and href and class to change style  
        a.innerText = `section ${section.innerText[8]}`
        a.setAttribute("href", `#section${section.innerText[8]}`)
        a.setAttribute("class", "menu__link");
        //append it to freg dom
        li.appendChild(a);
        freg.appendChild(li);
        li.setAttribute("class","link");
        for (let i=0;i<sections.length;i++){
            li.setAttribute("index",`${i}`)
        }
    })
    //append freg dom to list 
    ul.appendChild(freg)
};

function activ() {
    for (let i = 0; i < sections.length; i++) {
        // add the class when section be in view port
        if (sections[i].getBoundingClientRect().bottom < window.innerHeight) {
            document.getElementById(`section${i + 1}`).classList.add("your-active-class");
        }
    }

    for (let i = 0; i < sections.length; i++) {
        // remove the class when section be out view port
        if (sections[i].getBoundingClientRect().bottom <= 0 ) {
            document.getElementById(`section${i + 1}`).classList.remove("your-active-class");
        }
    }
};
















/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
craeteList();


// Add class 'active' to section when near top of viewport// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 *
*/
window.addEventListener("scroll",activ);



// Build menu

// Scroll to section on link click

// Set sections as active
const li = document.querySelectorAll('.link');


for (let i =0;i<sections.length;i++){
    li[i].addEventListener("click", evt => {
        evt.preventDefault()
        sections[i].scrollIntoView({
            behavior : "smooth"
        })
    });
}







