
const listExercises = async (e) => {
  // Get the information from the checkbox that was clicked

  const id = e.target.getAttribute('data-id');
  const ckBox = document.querySelector(`#check${id}`);
  const exerciseName = document.querySelector(`#heading${id}`);

  // List group for to hold the selected exercises. 
  const exercises = document.querySelector('#exercise_selected');

  if(e.target.hasAttribute('data-id')) {
    var newExercise = document.createElement("li");
    newExercise.id = id;
    newExercise.innerHTML = exerciseName.innerHTML
    if(ckBox.checked) {
        // Add the exercise to the selected list. 
      newExercise.classList.add('list-group-item');
      exercises.appendChild(newExercise);
      } else {
        // Remove the exercise if it exists. 
        var oldExercise = document.getElementById(`#${id}`);
       
      }
  };
};

document
.querySelector('#exercise_accordion')
.addEventListener('click', listExercises);
