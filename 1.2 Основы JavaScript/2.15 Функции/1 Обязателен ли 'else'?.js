// Если убрать else, работа функции не поменяется 
// из-за return в условии (age > 18)

function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
}


// Отличий в поведении от первой функции нет

function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Родители разрешили?');
  }
