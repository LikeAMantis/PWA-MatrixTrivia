import { repository } from "../service-worker";

const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const options = document.querySelector("#options");
const explanation = document.querySelector("#explanation");
var index = JSON.parse(localStorage?.matrix ?? null)?.index ?? 0;
index--;

// onLoad
nextQuestion();




function showAnswer() {
    answer.style.display = "block";
    answer.parentElement.children[1].style.display = "none";
    explanation.parentElement.children[1].style.display = "block";
}

function showExplanation() {
    explanation.style.display = "block";
    explanation.parentElement.children[1].style.display = "none";
}

function nextQuestion() {
    index = ++index % questions.length;
    displayQuestion();
    document.querySelector("#numberCopy").innerText = index + 1;

    localStorage.matrix = JSON.stringify({ index });
}

function prevQuestion() {
    index = (--index % questions.length);
    index = index < 0 ? questions.length - 1 : index;
    displayQuestion();
    document.querySelector("#numberCopy").innerText = index + 1;

    localStorage.matrix = JSON.stringify({ index });
}

function displayQuestion() {
    reset();
    question.innerText = parseComma(questions[index].question);
    answer.innerText = parseComma(questions[index].answer);
    explanation.innerText = parseComma(questions[index].explanation);
    options.innerText = questions[index].options;
}

function animationNext() {
    // animateCSS("#next", "pop");
    animateCSS("#numberCopy", "slideInTop");
    animateCSS("#number", "slideOutBottom").then(() => document.querySelector("#number").innerText = index + 1);
    animateCSS(".questionContainer", "slideInLeft");
}

function animationPrev() {
    // animateCSS(".buttons i", "pop");
    animateCSS("#numberCopy", "slideInBottom");
    animateCSS("#number", "slideOutTop").then(() => document.querySelector("#number").innerText = index + 1);
    animateCSS(".questionContainer", "slideInRight");
}

function reset() {
    answer.style.display = "none";
    answer.parentElement.children[1].style.display = "block";
    explanation.style.display = "none";
    explanation.parentElement.children[1].style.display = "none";
}

function parseComma(text) {
    return text.replaceAll(";", ",");
}

function animateCSS(element, animation) {
    // We create a Promise and return it
    return new Promise((resolve, reject) => {
        const animationName = animation;
        const node = document.querySelector(element);

        node.classList.add(animationName);

        // When the animation ends, we clean the classes and resolve the Promise
        function handleAnimationEnd(event) {
            event.stopPropagation();
            node.classList.remove(animationName);
            resolve('Animation ended');
        }

        node.addEventListener('animationend', handleAnimationEnd, { once: true });
    });
}



//PWA
if ('serviceWorker' in navigator) {
    // Use the window load event to keep the page load performant
    window.addEventListener('load', () => {
        navigator.serviceWorker.register(`/${repository}/service-worker.js`, {scope: `/${repository}/`});
    });
}

let deferredPrompt;
window.addEventListener('beforeinstallprompt', (e) => {
    // Prevent the mini-infobar from appearing on mobile
    e.preventDefault();
    // Stash the event so it can be triggered later.
    deferredPrompt = e;
    // Update UI notify the user they can install the PWA
    showInstallPromotion();
    // Optionally, send analytics event that PWA install promo was shown.
    console.log(`'beforeinstallprompt' event was fired.`);
});