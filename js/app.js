// mini-slider

const treningCardsContainer = document.querySelector('.trening-cards');
const nextButton = document.getElementById('next');
const backButton = document.getElementById('back');
const cardWidth = 405;

let currentSlide = 0;

nextButton.addEventListener('click', () => {
    if (currentSlide < treningCardsContainer.children.length - 3) {
        currentSlide++;
        treningCardsContainer.style.transition = 'transform 0.3s ease-in-out';
        treningCardsContainer.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
});

backButton.addEventListener('click', () => {
    if (currentSlide > 0) {
        currentSlide--;
        treningCardsContainer.style.transition = 'transform 0.3s ease-in-out';
        treningCardsContainer.style.transform = `translateX(-${currentSlide * cardWidth}px)`;
    }
});

// timer

const timerElements = document.querySelectorAll('.timer');

function updateTimer(targetTime, timerElement) {
    const currentTime = new Date();
    const timeDiff = targetTime - currentTime;
    
    const hours = Math.floor(timeDiff / (60 * 60 * 1000));
    const minutes = Math.floor((timeDiff % (60 * 60 * 1000)) / (60 * 1000));
    const seconds = Math.floor((timeDiff % (60 * 1000)) / 1000);
    
    const formattedTime = `${hours.toString().padStart(2, '0')}h : ${minutes.toString().padStart(2, '0')}m : ${seconds.toString().padStart(2, '0')}s`;
    
    timerElement.textContent = formattedTime;
}

timerElements.forEach(timerElement => {
    const targetTime = new Date();
    targetTime.setHours(targetTime.getHours() + 15);
    targetTime.setMinutes(targetTime.getMinutes() + 5);
    targetTime.setSeconds(targetTime.getSeconds() + 25);

    setInterval(() => updateTimer(targetTime, timerElement), 1000);
});





