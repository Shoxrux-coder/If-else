// If-else
let dayNumber = new Date().getDay();

if (dayNumber === 0) {
  day = 'Воскресенье';
} else if (dayNumber === 1) {
  day = 'Понедельник';
} else if (dayNumber === 2) {
  day = 'Вторник';
} else if (dayNumber === 3) {
  day = 'Среда';
} else if (dayNumber === 4) {
  day = 'Четверг';
} else if (dayNumber === 5) {
  day = 'Пятница';
} else if (dayNumber === 6) {
  day = 'Суббота';
} else {
  day = 'Неизвестный день недели';
}

console.log('Сегодня ' + day.toLowerCase() + '.' + ' Это через If');


// Switch Case
var day = '';

switch(new Date().getDay()) {
  case 0:
    day = 'Воскресенье';
    break;
  case 1:
    day = 'Понедельник';
    break;
  case 2:
    day = 'Вторник';
    break;
  case 3:
    day = 'Среда';
    break;
  case 4:
    day = 'Четверг';
    break;
  case 5:
    day = 'Пятница';
    break;
  case 6:
    day = 'Суббота';
    break;
  default:
    day = 'Неизвестный день недели';
}

console.log('Сегодня ' + day.toLowerCase() + '.' + ' А это через switchCase');


// Тернарный оператор и значок Или
let name = prompt('What is your name?')
name == "Daler" || name == "Далер" ? console.log('Welcome, my bro!') : console.log('Did you enter your name correctly?')