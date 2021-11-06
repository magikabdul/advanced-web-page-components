const btn = document.querySelector('.btn');

const btnAnimation = (e) => {
  const top = e.clientY;
  const left = e.clientX;

  const btnTopPosition = e.target.offsetTop;
  const btnLeftPosition = e.target.offsetLeft;

  const insideBtnTop = top - btnTopPosition;
  const insideBtnLeft = left - btnLeftPosition;

  const circle = document.createElement('span');
  circle.classList.add('circle');

  e.target.appendChild(circle);
  circle.style.top = insideBtnTop + 'px';
  circle.style.left = insideBtnLeft + 'px';

  setTimeout(() => circle.remove(), 300);
}

btn.addEventListener('click', btnAnimation);
