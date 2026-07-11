// Typing Animation
const message =
"Hey Annayaaaa... 💙\n\nI made this little surprise just for you.\n\nEvery photo, every word, every memory here is a piece of my heart. ❤️";

let i = 0;
const typing = document.getElementById("typing");

function type() {
    if (i < message.length) {
        typing.innerHTML += message.charAt(i);
        i++;
        setTimeout(type, 45);
    }
}

type();

// Show Story
function startStory() {
    document.getElementById("story").classList.remove("hidden");

    window.scrollTo({
        top: document.getElementById("story").offsetTop,
        behavior: "smooth"
    });
}

// Timer
const startDate = new Date("March 30, 2026 00:00:00");

function updateTimer() {

    const now = new Date();

    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));

    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);

    const minutes = Math.floor((diff / (1000 * 60)) % 60);

    document.getElementById("counter").innerHTML =
    `${days} Days ❤️<br>${hours} Hours 💙<br>${minutes} Minutes 🌸`;

}

updateTimer();

setInterval(updateTimer,60000);

// Cherry Blossom Petals

function createPetal(){

const petal=document.createElement("div");

petal.className="petal";

petal.innerHTML="🌸";

petal.style.left=Math.random()*100+"vw";

petal.style.animationDuration=(5+Math.random()*5)+"s";

petal.style.fontSize=(18+Math.random()*20)+"px";

document.body.appendChild(petal);

setTimeout(()=>{
petal.remove();
},10000);

}

setInterval(createPetal,250);
