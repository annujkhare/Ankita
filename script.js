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
        "assets/gift2.jpg",
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
    // ... rest of the messages object remains the same ...
    balloon: [
        "You’re not just special—you’re irreplaceable. I hope this birthday reminds you of how much you’re loved.",
        "Happy Birthday to the most incredible person I know, Ankita! May your day be as radiant as your smile.",
        "You deserve every ounce of happiness today, Ankita. Thank you for being such a beautiful part of my life.",
        "Dear Ankita, birthdays come every year, but amazing people like you are once in a lifetime. Have the best day!",
    ],
    party: [
        "Happy Birthday to someone who fills life with meaning and memories. Your presence is a gift in itself.",
        "You deserve all the love and laughter this world can offer. Here’s to another beautiful year ahead!",
        "May this year bring you as much happiness as you bring to others. You’re a blessing to everyone around you.",
        "Let’s celebrate you today and every day because you’re truly extraordinary!",
    ],
    gifts: [
        "You’ve made my life so much brighter just by being in it. Today, let’s celebrate the wonderful person you are!",
        "Unwrapping joy and surprises! Each gift is a reminder of how cherished you are.",
        "On your special day, I hope you feel as loved and celebrated as you make everyone else feel.",
        "Surprises that speak volumes! May your day be filled with everything you love.",
    ],
    memories: [
        "Celebrating the beautiful journey we’ve shared! Every moment tells a story of joy and connection.",
        "Memories that last a lifetime! Reflecting on the incredible times with you.",
        "Happy Birthday to someone whose smile makes every moment brighter. Here’s to creating more unforgettable memories!",
        "Reflecting on amazing times and looking forward to more adventures with you!",
    ],
    friendship: [
        "Cheers to friendship and love! Thank you for being such an irreplaceable part of my life.",
        "Grateful for this incredible bond! Wishing you all the happiness in the world on your special day.",
        "Celebrating our amazing friendship and all the moments that make life beautiful with you.",
        "Friends like you make life worth celebrating. Here’s to another fantastic year together!",
    ],
};

function changeCardContent(button) {
    const card = button.closest(".birthday-card");
    const cardType = card.dataset.cardType;
    const imageElement = card.querySelector(".card-image");
    const messageElement = card.querySelector("p");

    // Get button position for confetti origin
    const buttonRect = button.getBoundingClientRect();
    createConfettiFromButton(buttonRect.left + buttonRect.width / 2, buttonRect.top);

    const images = imageCollections[cardType];
    const currentImageIndex = images.indexOf(imageElement.src);
    let newImageIndex = currentImageIndex;

    while (newImageIndex === currentImageIndex) {
        newImageIndex = Math.floor(Math.random() * images.length);
    }

    setTimeout(() => {
        imageElement.src = images[newImageIndex];
        imageElement.style.opacity = '1';
    }, 500);

    const messageSet = messages[cardType];
    messageElement.textContent = messageSet[Math.floor(Math.random() * messageSet.length)];
}

function createConfettiFromButton(x, y) {
    const container = document.getElementById("confetti-container");
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 50; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti", "from-button");
        
        // Set initial position to button's position
        confetti.style.left = x + "px";
        confetti.style.top = y + "px";
        
        // Random color
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
        
        // Random shape
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = `10px solid ${color}`;
        }
        
        // Random size
        const size = Math.random() * 8 + 4;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        // Random angle for explosion effect
        const angle = Math.random() * Math.PI * 2;
        confetti.style.setProperty('--angle', angle + 'rad');
        
        // Random speed
        const speed = Math.random() * 1 + 0.5;
        confetti.style.setProperty('--speed', speed);
        
        container.appendChild(confetti);
        
        // Remove confetti after animation
        setTimeout(() => {
            confetti.remove();
        }, 3000);
    }
}

// Initialize page load confetti
window.addEventListener('load', () => {
    const container = document.getElementById("confetti-container");
    const colors = ['#ff0000', '#00ff00', '#0000ff', '#ffff00', '#ff00ff', '#00ffff'];
    const shapes = ['circle', 'square', 'triangle'];

    for (let i = 0; i < 150; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");
        
        // Random position
        confetti.style.left = Math.random() * 100 + "%";
        confetti.style.top = -20 + "px";
        
        // Random color and other properties same as before
        const color = colors[Math.floor(Math.random() * colors.length)];
        confetti.style.backgroundColor = color;
        
        const shape = shapes[Math.floor(Math.random() * shapes.length)];
        if (shape === 'circle') {
            confetti.style.borderRadius = '50%';
        } else if (shape === 'triangle') {
            confetti.style.width = '0';
            confetti.style.height = '0';
            confetti.style.backgroundColor = 'transparent';
            confetti.style.borderLeft = '5px solid transparent';
            confetti.style.borderRight = '5px solid transparent';
            confetti.style.borderBottom = `10px solid ${color}`;
        }
        
        const size = Math.random() * 10 + 5;
        confetti.style.width = `${size}px`;
        confetti.style.height = `${size}px`;
        
        confetti.style.animationDuration = (Math.random() * 3 + 2) + "s";
        confetti.style.animationDelay = Math.random() * 5 + "s";
        
        container.appendChild(confetti);
    }
}); 
