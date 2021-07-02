const router = require('express').Router();
const sequelize = require('../config/connection');
const { Exercises, Categories, User, ExerciseImage, Muscles } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
  //  Get all exercise categories
    const categoryData = await Categories.findAll({
      include: [
        {
          model: Exercises,
          attributes: ['name'],
        },
      ],
    });

    // Serialize data so the template can read it
    const categories = categoryData.map((category) => category.get({ plain: true }));
    // Pass serialized data and session flag into template
    res.render('homepage', { 
      categories, 
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/exercise', async (req, res) => {
  try {
    const exerciseData = await Categories.findAll({
      // where:{ category_id: 9 }, // Can be replaced with a parameter passed in
      order: [['name', 'ASC'], [Exercises, 'name', 'ASC']],
      include: [
        {
          model: Exercises,
          attributes: ['name','description','id','gif_image'],
        },
        
      ],
    });
    console.log(JSON.stringify(exerciseData)); // To view the details of the exerciseData object. 
    
    const categories = exerciseData.map((exercise) => exercise.get({ plain: true}));

    res.render('exercise', {
      categories,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});


// Works, but page doesn't reload with filtered list, look into this with sequelize/handlebars.....M.Mason
router.get('/exercise/:id', async (req, res) => {

  // Find all exercises in a given category
  try {
    const exerciseData = await Exercises.findAll({
      where:{ category_id: req.params.id },
      order: [['name', 'ASC']],
      include: [
        {
          model: Categories,
          attributes: ['name'],
        },
        
      ],
    });
    
    const exercises = exerciseData.map((exercise) => exercise.get({ plain: true}));
    console.log(exercises);

    res.render('exercise', {
      exercises,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// Use withAuth middleware to prevent access to route
router.get('/profile', withAuth, async (req, res) => {

  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
    });

    console.log(JSON.stringify(userData));

    const user = userData.get({ plain: true });
    res.render('profile', {
      ...user,
      logged_in: true
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If the user is already logged in, redirect the request to another route
  if (req.session.logged_in) {
    res.redirect('/profile');
    return;
  }

  res.render('login');
});


module.exports = router;