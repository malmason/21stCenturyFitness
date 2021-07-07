const router = require('express').Router();
const { Workouts, User, Categories, Exercises } = require('../../models');
const withAuth = require('../../utils/auth');

// TODO: Complete the routes for saving and updating a new workout
router.post('/', withAuth, async (req, res) => {
  console.log("received post request");
  console.log(req.session.user_id);
  console.log(req.body);
try {
    const newWorkout = await Workouts.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newWorkout);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {
  try {
    const workoutData = await Workouts.update(req.body,{
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
    
    if (!workoutData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(workoutData);
  } catch (err) {
    console.log(req);
    res.status(500).json(err);
  }
});


router.delete('/:id', withAuth, async (req, res) => {
  try {
    const exerciseData = await Workouts.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!exerciseData) {
      res.status(404).json({ message: 'No workout found with this id!' });
      return;
    }

    res.status(200).json(exerciseData);
  } catch (err) {
    res.status(500).json(err);
  }

});

module.exports = router;