const imageCollections = {
    cake: [
        "assets/cake1.jpg",
        "assets/cake2.jpg",
        "assets/friendship1.jpg",
        "assets/friendship2.jpg",
    ],
    balloon: [
        "assets/ballon1.jpg",
        "assets/ballon2.jpg",
        "assets/friendship3.jpg",
        "assets/friendship4.jpg",
    ],
    party: [
        "assets/party1.jpg",
        "assets/party2.jpg",
        "assets/cake2.jpg",
        "assets/cake1.jpg",
    ],
    gifts: [
        "assets/gifts1.jpg", 
        "assets/gifts2.jpg",
        "assets/ballon2.jpg",
        "assets/ballon1.jpg",
    ],
    memories: [
        "assets/moment1.jpg",
        "assets/moment2.jpg",
        "assets/party2.jpg",
        "assets/party1.jpg",
    ],
    friendship: [
        "assets/friendship1.jpg",
        "assets/friendship2.jpg",
        "assets/friendship3.jpg",
        "assets/friendship4.jpg",
    ],
};

const messages = {
    cake: [
        "Ankita, you are truly one of a kind. Celebrate this day knowing how much you mean to those around you!",
        "There are friends, and then there's you—someone who is in a league of her own. Have the happiest birthday!",
        "Not everyone gets to meet someone who's a constant source of joy, but I did—and today, we celebrate you!",
        "You've always held a special place in my heart, and today is the perfect chance to celebrate the amazing person you are.",
    ],
    balloon: [
        "You’re not just special—you’re irreplaceable. I hope this birthday reminds you of how much you’re loved.",
        "Happy Birthday to the most incredible person I know, Ankita! May your day be as radiant as your smile.",
        "You deserve every ounce of happiness today, Ankita. Thank you for being such a beautiful part of my life.",
        "Dear Ankita, birthdays come every year, but amazing people like you are once in a lifetime. Have the best day!",
    ],
};

function changeCardContent(button) {
    const card = button.closest(".birthday-card");
    const cardType = card.dataset.cardType;
    const imageElement = card.querySelector(".card-image");
    const messageElement = card.querySelector("p");

    // Get button position for confetti origin
    const buttonRect = button.getBoundingClientRect();
    setTimeout(() => {
        createConfettiFromButton(buttonRect.left + buttonRect.width / 2, buttonRect.top);
    }, 300);

    const images = imageCollections[cardType];
    let newImageIndex;
    do {
        newImageIndex = Math.floor(Math.random() * images.length);
    } while (images[newImageIndex] === imageElement.src);

    setTimeout(() => {
        imageElement.src = images[newImageIndex];
    }, 500);

    const messageSet = messages[cardType];
    messageElement.textContent = messageSet[Math.floor(Math.random() * messageSet.length)];
}

function createConfettiFromButton(x, y) {
    const container = document.getElementById("confetti-container");
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const shapes = ['circle', 'square', 'triangle', 'heart', 'star'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti", "from-button");
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
        const shape = shapes[Math.floor(Math.random() * shapes.length)];

        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = `10px solid ${color}`;
        } else if (shape === 'heart') {
            confetti.innerHTML = '❤️';
            confetti.style.fontSize = '10px';
        } else if (shape === 'star') {
            confetti.innerHTML = '⭐';
            confetti.style.fontSize = '10px';
        }

        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        confetti.style.setProperty('--angle', Math.random() * Math.PI * 2 + 'rad');
        confetti.style.setProperty('--speed', Math.random() * 1 + 0.5);
        container.appendChild(confetti);
        setTimeout(() => confetti.remove(), 3000);
    }
}

window.addEventListener('load', () => {
    setTimeout(() => {
        const container = document.getElementById("confetti-container");
        const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
        const shapes = ['circle', 'square', 'triangle', 'heart', 'star'];

        for (let i = 0; i < 150; i++) {
            const confetti = document.createElement("div");
            confetti.classList.add("confetti");
            confetti.style.left = Math.random() * 100 + "%";
            confetti.style.top = -20 + "px";
            const color = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.backgroundColor = color;
            const shape = shapes[Math.floor(Math.random() * shapes.length)];
            if (shape === 'heart') {
                confetti.innerHTML = '❤️';
                confetti.style.fontSize = '10px';
            } else if (shape === 'star') {
                confetti.innerHTML = '⭐';
                confetti.style.fontSize = '10px';
            }
            confetti.style.animationDuration = (Math.random() * 1 + 1) + "s";
            confetti.style.animationDelay = Math.random() * 2 + "s";
            container.appendChild(confetti);
        }
    }, 500);
    document.addEventListener("DOMContentLoaded", () => {
    const music = document.getElementById("bgMusic");

    function playMusic() {
        music.play().then(() => {
            console.log("Music is playing.");
        }).catch(err => {
            console.log("Autoplay blocked, waiting for user interaction.");
        });
    }

    // Try autoplay
    playMusic();

    // Add event listener for user interaction
    document.body.addEventListener("click", () => {
        playMusic();
    }, { once: true });
});

});
