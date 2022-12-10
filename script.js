const image = document.querySelector("#myImage");
const text = document.querySelector("h2");
const buttonOne = document.querySelector("#one");
const buttonTwo = document.querySelector("#two");
const buttonThree = document.querySelector("#three");
const buttonBack = document.querySelector("#back");

buttonOne.addEventListener("click", strong);
buttonTwo.addEventListener("click", light);

buttonThree.style="display: none";
buttonBack.style="display: none";

function strong() {
    text.innerHTML="Ready for adventures?";
    buttonOne.innerHTML="Not today";
    buttonTwo.innerHTML="Yep";

    buttonOne.addEventListener("click", dinner);
    buttonTwo.addEventListener("click", goOut);
    buttonThree.style="display: none";
    buttonBack.style="display: none";
}

function dinner() {
    text.textContent="Prepare a dinner. Poor yourself a glass of Whiskey";
    image.setAttribute("src", "icons8-whiskey-64.png")
    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    buttonBack.style="display: block";
    buttonBack.addEventListener("click", Back);
}

function goOut() {
    text.textContent="Hit the town with your gang and Red Bull Vodka";
    image.setAttribute("src", "icons8-vodka-64.png");
    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    buttonThree.style="display: none";
    buttonBack.style="display: block";
    buttonBack.addEventListener("click", Back);
}

function light() {
    text.innerHTML="What mood is aimed?";
    buttonOne.innerHTML="Spirit-lifting";
    buttonTwo.innerHTML="Grounding";
    buttonThree.style="display: block";
    buttonThree.innerHTML="Invigorating";

    buttonOne.addEventListener("click", aperol);
    buttonTwo.addEventListener("click", lastNight);
    buttonThree.addEventListener("click", coffee);
    
}

function aperol() {
    text.textContent="Go to a rooftop on a sunny day, order an Aperol.";
    image.setAttribute("src", "icons8-cocktail-64.png");
    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    buttonBack.style="display: block";
    buttonBack.addEventListener("click", Back);
    }

function coffee() {
    text.textContent="Make a coffee cocktail.";
    image.setAttribute("scr", "icons8-martini-64.png");
    buttonOne.style="display: block";
    buttonOne.textContent="Done";
    buttonOne.addEventListener("click", coffeeDecision);
    buttonTwo.style="display: none";
    buttonThree.style="display: none";
    buttonBack.style="display: none";

      
}
function coffeeDecision() {
    text.textContent="Goal achieved?";
        
        buttonOne.style="display: block";
        buttonTwo.style="display: block";
        buttonThree.style="display: none";
        buttonBack.style="display: none";

        buttonOne.innerHTML="Yes";
        buttonTwo.innerHTML="No";
    
        buttonOne.addEventListener("click", done);
        buttonTwo.addEventListener("click", coffee);
    
    }


function lastNight() {
    text.innerHTML="Woke up sweating from too many drinks last night?";
    buttonOne.innerHTML="No";
    buttonTwo.innerHTML="Yes";

    buttonOne.addEventListener("click", beer);
    buttonTwo.addEventListener("click", bloodyMary);
    buttonThree.style="display: none";
}

function beer() {
    text.innerHTML="Go for a Beer!";
    image.setAttribute("src", "icons8-beer-64.png");
    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    buttonBack.style="display: block";
    buttonBack.addEventListener("click", Back);
}

function bloodyMary() {
    text.innerHTML="You need a Bloody Mary";
    image.setAttribute("src", "icons8-martini-64.png");
    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    buttonBack.style="display: block";
    buttonBack.addEventListener("click", done);
}

function done() {
    text.innerHTML="Done!";
    image.setAttribute("src", "icons8-cocktail-shaker-64.png");
    buttonOne.style="display: none";
    buttonTwo.style="display: none";
    buttonThree.style="display: none"
    buttonBack.style="display: block";
    buttonBack.addEventListener("click", Back);
}

function Back() {
    location.reload();
  }
  