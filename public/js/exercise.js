const showExercises = async (event) => {
  event.preventDefault();

  const id = event.target.value
  const category = `category${id}` // Category to show. 
  const accordions = document.querySelectorAll('.accordion-item');  

  console.log(category);

  accordions.forEach((accordion) => {
    if(accordion.classList.contains(category)) {
      accordion.classList.add('showCategory');
      accordion.classList.remove('hideCategory')
    } else {
      accordion.classList.add('hideCategory');
      accordion.classList.remove('showCategory');
    }
  });

};

document
.querySelector('.exercise-list')
.addEventListener('click', showExercises);