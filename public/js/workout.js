const updateWorkout = async (e) => {

  console.log(e.target.getAttribute('data-id'));
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');
    const reps = document.querySelector(`#reps${id}`).value.trim();
    const sets = document.querySelector(`#sets${id}`).value.trim();
    const total_minutes = document.querySelector(`#minutes${id}`).value.trim();
   
    console.log(e.target.id);
    const response = await fetch(`api/workouts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({ reps, sets, total_minutes }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (response.ok) {
      document.location.replace('/schedule');
    } else {
      alert('Failed to update workout');
    }
  }
};

const deleteWorkout = async (e) => {
  if (e.target.hasAttribute('data-id')) {
    const id = e.target.getAttribute('data-id');

    const response = await fetch(`/api/workouts/${id}`, {
      method: 'DELETE',
    });

    if (response.ok) {
      document.location.replace('/schedule');
    } else {
      alert('Failed to delete workout');
    }
  }
};


document.querySelectorAll('.btnUpdate').forEach(item => {
  item.addEventListener('click', updateWorkout)
});

document.querySelectorAll('.btnDelete').forEach(item => {
  item.addEventListener('click', deleteWorkout)
});
