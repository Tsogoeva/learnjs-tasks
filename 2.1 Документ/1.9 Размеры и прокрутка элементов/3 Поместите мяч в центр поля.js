let field = document.querySelector('#field');
let ball = document.querySelector('#ball');

let top = field.clientHeight / 2 - ball.clientHeight / 2;
let left = field.clientWidth / 2 - ball.clientWidth / 2;

ball.style.top = top + 'px';
ball.style.left = left + 'px';
