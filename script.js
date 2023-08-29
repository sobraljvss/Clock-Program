let datetime, hours, selected_daypart, conditions

// possible pairs of greetings and arts
const STYLES = [{phrase: 'Good Morning!', art: 'morning'},
                {phrase: 'Good Afternoon!', art: 'afternoon'},
                {phrase: 'Good Evening!', art: 'evening'},
                {phrase: 'Good Night!', art: 'night'}]

function update() {
  // time and date in a certain moment
  datetime = new Date();
  hours = datetime.getHours();

  // conditions for each style
  conditions = [Boolean(hours >= 4 && hours < 12),
                Boolean(hours >= 12 && hours < 17),
                Boolean(hours >= 17 && hours < 21),
                Boolean(hours >= 21 || hours < 4)]

  // displaying date and time
  document.getElementById('time').textContent = datetime.toLocaleTimeString('en');
  document.getElementById('date').textContent = `${datetime.toLocaleString('en', {month: 'long'})} ${datetime.getDate()}, ${datetime.getFullYear()} (${datetime.toLocaleString('en', {weekday: 'short'})})`;

  // selecting a pair of greeting and art
  for (let i = 0; i < conditions.length; i++) {
    if (conditions[i]){
      document.getElementById('greetings').textContent = STYLES[i].phrase;
      document.body.style.backgroundImage = `url(media/${STYLES[i].art}.png)`;
    }
  }
}

let clock = setInterval(update, 1000);