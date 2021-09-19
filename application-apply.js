//className mean get a current value and if you click the title that would not print any value
//In the case that put a class name on h1 then possible to get class name using by console.log

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    h1.className = "active"
    console.log(h1.className);
}

h1.addEventListener("click", handleTitleClick);
------------------------------------------------------------------

//change the sequence by IF-ELSE statement

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    if(h1.className === "active") {
        h1.className = "";
    } else {
        h1.className = "active";
    }
}

h1.addEventListener("click", handleTitleClick);
------------------------------------------------------------------
const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    if(h1.className === "clicked") {
        h1.className = "";
    } else {
        h1.className = "clicked";
    }
}

h1.addEventListener("click", handleTitleClick);
------------------------------------------------------------------

//If you put same string both of two lines has an error problem
//Instead of using same string that will change const statement as below
//Do not mistake while save the string into the variable

const h1 = document.querySelector("div.hello:first-child h1")

function handleTitleClick(){
    const clickedClass = "clicked";
    if(h1.className === clickedClass) {
        h1.className = "";
    } else {
        h1.className = clickedClass;
    }
}

h1.addEventListener("click", handleTitleClick);
------------------------------------------------------------------

//In html, the developer add class variable in h1 bracket then have to add both js and css

js
function handleTitleClick(){
    const clickedClass = "clicked sexy-font";
  
css
.sexy-font {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
}
  
html
<div class="hello">
      <h1 class="sexy-font">Click Me!</h1>
--------------------------------------------------------------------
 // Our duty what the right attitude developer is maintain all the class names by javascript.
  



