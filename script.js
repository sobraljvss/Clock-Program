var datetime, hours, selected_daypart, conditions

// possible pairs of greetings and arts
const STYLES = [{phrase: 'Good Morning!', art: 'morning', pos: '30%'},
                {phrase: 'Good Afternoon!', art: 'afternoon', pos: '60%'},
                {phrase: 'Good Evening!', art: 'evening', pos: '30%'},
                {phrase: 'Good Night!', art: 'night', pos: '60%'}]

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
  $('#time').text(datetime.toLocaleTimeString('en'));
  $('#date').text(`${datetime.toLocaleString('en', {month: 'long'})} ${datetime.getDate()}, ${datetime.getFullYear()} (${datetime.toLocaleString('en', {weekday: 'short'})})`);

  // selecting a pair of greeting and art
  for (let i = 0; i < conditions.length; i++) {
    if (conditions[i]){
      if ($('#greetings').text() == '') {
        $('#greetings').text(STYLES[i].phrase);
        $('#art').css('background-image', `url('images/${STYLES[i].art}.png')`);
        $('#art').css('background-position', STYLES[i].pos);
      }
      else if ($('#greetings').text() != STYLES[i].phrase) {
        $('#art').fadeOut(1000, () => {
          $('#greetings').text(STYLES[i].phrase);
          $('#art').css('background-image', `url('images/${STYLES[i].art}.png')`);
          $('#art').css('background-position', STYLES[i].pos);
          $('#art').fadeIn(1000);
        });
      } 
    }
  }
}

setInterval(update, 1000);