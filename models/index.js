const User = require('./User');
const Categories = require('./Categories');
const Exercises = require('./Exercises');
// const Muscles = require('./Muscles');


Exercises.belongsTo(Categories, {
  foreignKey: 'category_id',
});

Categories.hasMany(Exercises, {
 foreignKey: 'category_id',
 onDelete: 'CASCADE',
 onUpdate: 'CASCADE',
});

// Muscles.belongsTo(Exercises, {
//   foreignKey: 'muscle_id'
// });



module.exports = {
  User,
  Categories,
  Exercises,
  // Muscles,
};
