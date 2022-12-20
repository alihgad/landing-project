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


const sections = document.querySelectorAll("section");
for (let i =0 ;i<sections.length;i++){
sections[i].setAttribute("class","");
console.log(sections[i])
}

const ul = document.querySelector(".navbar__menu");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

function craeteList(){ 

//create freg DOM
const freg = document.createDocumentFragment() ;
sections.forEach(function(section){
//create li + a
    const  li = document.createElement("li");
    let a = document.createElement("a");
// add text and href and class to change style  
    a.innerText = `section ${section.innerText[8]}`
    a.setAttribute("href",`#section${section.innerText[8]}`)
    a.setAttribute("class","menu__link");
//append it to freg dom
    li.appendChild(a);
    freg.appendChild(li);
})
//append freg dom to list 
ul.appendChild(freg)
};

function sectionApperd (elem) {
let sectionPos = elem.getBoundingClientRect();
return (sectionPos.top >= 0);
}
    // Gives the section being viewed a different appearance
function chickActiv() {
    for (section of sections) {
    // If the section is in the viewport
    if (sectionApperd(section)) {
    // Check if it doesn't already contain "your-active-class"
        if (!section.classList.contains('your-active-class')) {
    // Then add it
        section.classList.add ("your-active-class");
            }else{
      // If it's out the viewport then remove "your-active-class"
        section.classList.remove("your-active-class");}    
    }
}
}

/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
craeteList();

// Add class 'active' to section when near top of viewport// Scroll to anchor ID using scrollTO event
document.addEventListener("scroll",chickActiv)

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active










