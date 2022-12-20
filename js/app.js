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
for (let i = 0; i < sections.length; i++) {
    sections[i].setAttribute("class", "");
}

const firstPos = sections[0].getBoundingClientRect().top;
const secPos = sections[1].getBoundingClientRect().top;
const thirdPos = sections[2].getBoundingClientRect().top;
const fourthPos = sections[3].getBoundingClientRect().top;
console.log(firstPos["y"]);

const firstSection = document.getElementById("section1");
const secSection = document.getElementById("section2");
const thirdSection = document.getElementById("section3");
const fourthSection = document.getElementById("section4");



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
    })
    //append freg dom to list 
    ul.appendChild(freg)
};

function addActiv() {
    if ( firstPos["y"] === 0 ) {
            firstSection.calssList.add('your-active-class');
            console.log("active add to first");
        
    } else if (secPos["y"] === 0 ) {
            secSection.calssList.add('your-active-class');
            console.log("active add to sec");
        
    } else if (thirdPos["y"] === 0) {
            thirdSection.calssList.add('your-active-class');
            console.log("active add to third");
        
    } else if (fourthPos["y"] === 0 ) {
            fourthSection.calssList.add('your-active-class');
            console.log("active add to fourth");
        
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


/**
 * End Main Functions
 * Begin Events
 *
*/
window.addEventListener("scroll",function(){
    // console.log(this.window.innerHeight);
    console.log(sections[0].getBoundingClientRect().top)
    for (let i = 0 ; i< sections.length ; i++){
    if (sections[i].getBoundingClientRect().top < this.window.innerHeight){
        document.getElementById(`section${i+1}`).classList.add("your-active-class");
    } }
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().bottom < this.window.innerHeight) {
            document.getElementById(`section${i + 1}`).classList.remove("your-active-class");
        }
    }
});


// Build menu

// Scroll to section on link click

// Set sections as active
function printPos () {
    console.log(scrollY)
} 










