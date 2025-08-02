const questionContainer = document.getElementById('question-container');
const resultContainer = document.getElementById('result-container');
const yesBtn = document.getElementById('yes-btn');
const noBtn = document.getElementById('no-btn');
const container = document.querySelector('.container');

yesBtn.addEventListener('click', () => {
  questionContainer.style.display = 'none';
  resultContainer.style.display = 'block';
  setTimeout(() => {
    location.reload();
  }, 6000);
});

noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('click', moveButton);

function moveButton() {
  const containerRect = container.getBoundingClientRect();
  const btnRect = noBtn.getBoundingClientRect();

  const newTop = Math.random() * (container.clientHeight - btnRect.height);
  const newLeft = Math.random() * (container.clientWidth - btnRect.width);

  noBtn.style.position = 'absolute';
  noBtn.style.top = `${newTop}px`;
  noBtn.style.left = `${newLeft}px`;
}
