let styles = ['Джаз', 'Блюз'];

styles.push('Рок-н-ролл');

styles[Math.floor((styles.length - 1) / 2)] = 'Классика';

let firstElem = styles.shift();
alert(firstElem);

styles.unshift('Рэп', 'Регги');
