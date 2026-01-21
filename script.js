const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');

let noClickCount = 0;
const messages = [
    "Are you sure?",
    "Really sure?",
    "Think again!",
    "Last chance!",
    "Surely not?",
    "You might regret this!",
    "Give it another thought!",
    "Are you absolutely certain?",
    "This could be a mistake!",
    "Have a heart!",
    "Don't be so cold!",
    "Change of heart?",
    "Wouldn't you reconsider?",
    "Is that your final answer?",
    "You're breaking my heart ;("
];

noBtn.addEventListener('click', () => {
    noClickCount++;
    
    // Change the text of the No button
    if (noClickCount <= messages.length) {
        noBtn.innerText = messages[noClickCount - 1];
    } else {
        noBtn.innerText = messages[messages.length - 1];
    }
    
    // Increase the size of the Yes button
    const currentSize = parseFloat(window.getComputedStyle(yesBtn).fontSize);
    yesBtn.style.fontSize = `${currentSize * 1.5}px`;
});

yesBtn.addEventListener('click', () => {
    questionContainer.classList.add('hidden');
    resultContainer.classList.remove('hidden');
});
