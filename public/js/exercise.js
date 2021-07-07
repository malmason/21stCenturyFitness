document.querySelector('#startDt').defaultValue = moment().format("YYYY-MM-DD");
document.querySelector('#endDt').defaultValue = moment().format("YYYY-MM-DD");
document.querySelector('#repeatWorkout').defaultValue = 1;
const saveWorkout = async (e) => {
  e.preventDefault();
  const workouts = document.querySelectorAll('#exercise_selected li');
  const stDate = new Date(document.querySelector('#startDt').value);
  const endDate = new Date(document.querySelector('#endDt').value);
  const repeatDays = document.querySelector('#repeatWorkout').value;

  const oneDay = 1000 * 60 *60 * 24; // one day in milliseconds
  const diffInTime = endDate.getTime() - stDate.getTime();
  const diffInDays = Math.round(diffInTime / oneDay);

  console.log(diffInDays);
  let saveDate = moment(stDate,"YYYY-MM-DD");
  saveDate.subtract(2,'days');  // Subtracted 2 days due to how moment pulled in date from input field
  for(x=0; moment(saveDate,"YYYY-MM-DD") < moment(endDate, "YYYY-MM-DD"); x = x + repeatDays) {
    saveDate.add(repeatDays, 'days');
     for (i=0; i < workouts.length; i++) {
    let data = {
      exercise_id: workouts[i].getAttribute('data-exercise'),
      workout_date: saveDate
    }
    const response = await fetch(`/api/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
  
      body: JSON.stringify(data)
    });
   }
  }; 
   document.location.replace('/schedule');
};

const listExercises = async (e) => {
  // Get the information from the checkbox that was clicked

  const id = e.target.getAttribute('data-id');
  const ckBox = document.querySelector(`#check${id}`);
  const exerciseName = document.querySelector(`#heading${id}`);

  // List group to hold the selected exercises. 
  const exercises = document.querySelector('#exercise_selected');

  if(e.target.hasAttribute('data-id')) {
    let newExercise = document.createElement("li");
    newExercise.id = `workout${id}`;
    newExercise.innerHTML = exerciseName.innerHTML
    newExercise.setAttribute('data-exercise', id);

    if(ckBox.checked) {
        // Add the exercise to the selected list. 
      newExercise.classList.add('list-group-item');
      exercises.appendChild(newExercise);
      } else {
        // Remove the exercise if it exists. 
        let oldExercise = document.querySelector(`#workout${id}`);
        exercises.removeChild(oldExercise);
      }
  };
};



document
.querySelector('#exercise_accordion')
.addEventListener('click', listExercises);

document
.querySelector('#btnWorkout')
.addEventListener('click', saveWorkout);



