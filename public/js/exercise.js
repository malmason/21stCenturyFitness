const saveWorkout = async (e) => {
  e.preventDefault();
  const workouts = document.querySelectorAll('#exercise_selected li');
  let data = {
    exercise_id: workouts[0].getAttribute('data-exercise'),
    workout_date: '2021-07-04'
  }

  const response = await fetch(`/api/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8'
    },
    body: JSON.stringify(data)
  });
  if (response.ok) {
    document.location.replace('/profile');
  } else {
    alert('Failed to create a new workout');
  }
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
