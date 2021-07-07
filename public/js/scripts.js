let info = document.querySelectorAll(".info");

// Function to make array of event objects from user selections
const makeEvents = () => {
  let all = [];
  info.forEach(e => {
    let event = {
      title: e.getAttribute('data-exerciseName'),
      start: e.getAttribute('data-date'),
      end: e.getAttribute('data-date'),
    };
    all.push(event);
  });
  return all
};

const changeLink = (e) => {
  const navLinks = document.querySelectorAll('.links a');

  navLinks.forEach(link => {
    if (link.text === e.target.text) {
      console.log('true');
      link.classList.add('active');
    } else {
      console.log('false')
      link.classList.remove('active');
    }
  });

};

// Add an event listener to all of the navigation links to change the Active status. 
document.querySelectorAll('.links a').forEach(item => {
  item.addEventListener('click', changeLink)
});

let all = makeEvents();

console.log(all)

document.addEventListener('DOMContentLoaded', function () {
  var calendarEl = document.getElementById('calendar');
  var calendar = new FullCalendar.Calendar(calendarEl, {
    initialView: 'dayGridWeek',

    views: {
      dayGrid: {
        // options apply to dayGridMonth, dayGridWeek, and dayGridDay views
      },
      timeGrid: {
        // options apply to timeGridWeek and timeGridDay views
      },
      week: {
        // options apply to dayGridWeek and timeGridWeek views
      },
      day: {
        // options apply to dayGridDay and timeGridDay views
      }
    },
    height: 450,
    themeSystem: 'bootstrap',
    headerToolbar: {
      start: 'title',
      center: '',
      end: 'today dayGridWeek dayGridMonth listWeek prev,next'
    },

    events: all
  });

  calendar.render();
});
