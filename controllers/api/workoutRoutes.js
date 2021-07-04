const router = require('express').Router();
const { Workouts, User, Categories, Exercises } = require('../../models');
const withAuth = require('../../utils/auth');

// TODO: Complete the routes for saving and updating a new workout
router.post('/', withAuth, async (req, res) => {
  console.log("received post request");
  console.log(req.session.user_id);
try {
    const newWorkout = await Workouts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newExercise);
  } catch (err) {
    res.status(400).json(err);
  }
});


module.exports = router;