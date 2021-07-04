const saveWorkout = async (e) => {
  e.preventDefault();

  // Loop through the list items and add to the database. 
  const workouts = document.querySelectorAll('#exercise_selected li');

  await workouts.forEach(function(workout) {
    console.log(workout.getAttribute('data-exercise'));
    let Data = {
      exercise_id: workout.getAttribute('data-exercise')
    } 
    const response = fetch(`api/workouts`, {
      method: 'POST',
      body: Data,
      headers: {
        'Content-Type': 'applicaton/json',
      }
    });
    if(response.ok) {
      document.location.replace('/profile');
    } else {
      alert('Failed to create new Workout');
    }
  });
};

const listExercises = async (e) => {
  // Get the information from the checkbox that was clicked

  const id = e.target.getAttribute('data-id');
  const ckBox = document.querySelector(`#check${id}`);
  const exerciseName = document.querySelector(`#heading${id}`);

  // List group for to hold the selected exercises. 
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
