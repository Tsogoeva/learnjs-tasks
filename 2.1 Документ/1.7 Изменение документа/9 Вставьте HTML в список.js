let ul = document.querySelector('.ul');

let partOfList = '<li>2</li><li>3</li>';

ul.children[1].innerHTML = partOfList;

//

let oneLi = document.querySelector('.one');

oneLi.insertAdjacentHTML('afterend', '<li>2</li><li>3</li>');
