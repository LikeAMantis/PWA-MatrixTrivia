const question = document.querySelector("#question");
const answer = document.querySelector("#answer");
const options = document.querySelector("#options");
const explanation = document.querySelector("#explanation");
const header = document.querySelector(".header");
var index = JSON.parse(localStorage?.matrix ?? null)?.index ?? 0; // später über client Storage bekommen und speichern



// onLoad
header.children[1].innerText = index + 1;
header.children[0].innerText = index + 1;
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
    index = index % questions.length;
    question.innerText = parseComma(questions[index].question);
    answer.innerText = parseComma(questions[index].answer);
    explanation.innerText = parseComma(questions[index].explanation);
    options.innerText = questions[index].options;
    document.querySelector("#numberCopy").innerText = index + 1;
    reset();

    localStorage.matrix = JSON.stringify({ index });
    index++;
}

async function animationNext() {
    animateCSS("#numberCopy", "slideInTop");
    animateCSS("#number", "slideOutTop").then(() => document.querySelector("#number").innerText = index);
    animateCSS("#next", "pop");
    animateCSS(".questionContainer", "slideInLeft");
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

async function animateCSS(element, animation) {
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



// PWA
// if ('serviceWorker' in navigator) {
//     // Use the window load event to keep the page load performant
//     window.addEventListener('load', () => {
//         navigator.serviceWorker.register('../service-worker.js');
//     });
// }

// let deferredPrompt;
// window.addEventListener('beforeinstallprompt', (e) => {
//     // Prevent the mini-infobar from appearing on mobile
//     e.preventDefault();
//     // Stash the event so it can be triggered later.
//     deferredPrompt = e;
//     // Update UI notify the user they can install the PWA
//     showInstallPromotion();
//     // Optionally, send analytics event that PWA install promo was shown.
//     console.log(`'beforeinstallprompt' event was fired.`);
// });