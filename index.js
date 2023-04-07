let switchButtonState = false;

const budgetTitle = document.getElementById('budget');
const contractTitle = document.getElementById('contract');

const deadline1 = document.getElementById('deadline_1');
const deadline2 = document.getElementById('deadline_2');
const period1 = document.getElementById('period_1');
const period2 = document.getElementById('period_2');
const switchButton = document.querySelector('.switch-button');

const header = document.querySelector('header');

let prevScrollPos = window.scrollY;

const hideOrShowHeader = () => {
  const currScrollPos = window.scrollY;

  if (prevScrollPos <= currScrollPos) {
    header.style.top = '-108px';
  } else {
    header.style.top = '0';
  }
  prevScrollPos = currScrollPos;
};

const createLinksEvents = () => {
  for (let link of document.getElementsByClassName('link')) {
    link.addEventListener('mouseover', addHoverClass);
    link.addEventListener('mouseout', removeHoverClass);
  }
};

const changeContent = () => {
  // const deadline1Heading = deadline1.querySelector('.deadline__heading');
  const deadline1Date = deadline1.querySelector('.deadline__date');
  const deadline2Heading = deadline2.querySelector('.deadline__heading');
  const deadline2Date = deadline2.querySelector('.deadline__date');
  // const period1Heading = period1.querySelector('.deadline__heading');
  const period1Date = period1.querySelector('.deadline__date');
  const period2Heading = period2.querySelector('.deadline__heading');
  const period2Date = period2.querySelector('.deadline__date');
  if (switchButtonState) {
    deadline1Date.innerHTML = '20.06 - 23.09';
    deadline2Heading.innerHTML = 'Очно-заочная и заочная формы обучения:';
    deadline2Date.innerHTML = '20.06 - 28.10';
    period1Date.innerHTML = '04.07 - 13.08 и 22.08 - 24.09';
    period2Heading.innerHTML = 'Очно-заочная и заочная формы обучения:';
    period2Date.innerHTML = '04.07 - 13.08 и 22.08 - 29.10';
  } else {
    deadline1Date.innerHTML = '20.06 - 08.08';
    deadline2Heading.innerHTML = 'Очно-заочная форма обучения:';
    deadline2Date.innerHTML = '20.06 - 08.08';
    period1Date.innerHTML = '04.07 - 13.08';
    period2Heading.innerHTML = 'Очно-заочная форма обучения:';
    period2Date.innerHTML = '04.07 - 13.09 и 22.08 - 12.09';
  }
};

const toggleSwitch = (event) => {
  const circle = event.currentTarget.querySelector('.switch-button__circle');
  switchButtonState = !switchButtonState;
  if (switchButtonState) {
    circle.classList.add('switch-button__circle_contract');
    circle.classList.remove('switch-button__circle_budget');
    budgetTitle.classList.remove('chosen');
    contractTitle.classList.add('chosen');
  } else {
    circle.classList.add('switch-button__circle_budget');
    circle.classList.remove('switch-button__circle_contract');
    budgetTitle.classList.add('chosen');
    contractTitle.classList.remove('chosen');
  }
  changeContent();
};

const addHoverClass = (event) => {
  const line = event.currentTarget.querySelector('.underline');
  line.classList.add('hover');
};

const removeHoverClass = (event) => {
  const line = event.currentTarget.querySelector('.underline');
  line.classList.remove('hover');
};

createLinksEvents();

switchButton.addEventListener('click', toggleSwitch);
window.addEventListener('scroll', hideOrShowHeader);
