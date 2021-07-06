
const changeLink = (e) => {
  const navLinks = document.querySelectorAll('.links a');

  navLinks.forEach(link => {
    if(link.text === e.target.text) {
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




