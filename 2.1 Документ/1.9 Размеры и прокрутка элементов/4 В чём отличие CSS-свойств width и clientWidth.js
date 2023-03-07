// 1. clientWidth включает в себя padding, а width нет.
// 2. clientWidth вернет число getComputedStyle(elem).width - строку.
// 3. clientWidth во всех браузерах вернет размер за вычетов прокрутки.
//    А CSS-свойства ведут себя по-разному.
