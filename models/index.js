const User = require('./User');
const Categories = require('./Categories');
const Exercises = require('./Exercises');
const Muscles = require('./Muscles');

const ExerciseImage = require('./ExerciseImage');

Exercises.belongsTo(Categories, {
  foreignKey: 'category_id',
});

Categories.hasMany(Exercises, {
 foreignKey: 'category_id',
 onDelete: 'CASCADE',
 onUpdate: 'CASCADE',
});


module.exports = {
  User,
  Categories,
  Exercises,
  Muscles,

  ExerciseImage,

};
