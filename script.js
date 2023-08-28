let datetime = new Date();
let hours = datetime.getHours();

const BODY = document.body;
const GREETINGS = document.getElementById('greetings');
const TIME = document.getElementById('time');
const DATE = document.getElementById('date');

const DAYPARTS = new Map([
  [[hours >= 4 && hours < 12], {phrase: 'Good Morning!', art: 'morning.png'}],
  [[hours >= 12 && hours < 17], {phrase: 'Good Afternoon!', art: 'afternoon.png'}],
  [[hours >= 17 && hours < 21], {phrase: 'Good Evening!', art: 'evening.png'}],
  [[hours >= 21 || hours < 4], {phrase: 'Good Night!', art: 'night.png'}]
]);

let clock = setInterval(() => {
  TIME.textContent = `${hours.toLocaleString('en', {minimumIntegerDigits: 2})}:${datetime.getMinutes().toLocaleString('en', {minimumIntegerDigits: 2})}:${datetime.getSeconds().toLocaleString('en', {minimumIntegerDigits: 2})}`;
  DATE.textContent = `${datetime.toLocaleString('en', {month: 'long'})} ${datetime.getDate()}, ${datetime.getFullYear()} (${datetime.toLocaleString('en', {weekday: 'short'})})`
  DAYPARTS.forEach((styles, condition) => {
    if (condition[0]){
      BODY.style.backgroundImage = `url('media/${styles.art}')`;
      GREETINGS.textContent = styles.phrase;
    }
  });
  datetime = new Date();
  hours = datetime.getHours();
}, 1000);
