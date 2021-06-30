const User = require('./User');
const Categories = require('./Categories');
const Exercises = require('./Exercises');


Exercises.belongsTo(Categories, {
  foreignKey: 'category',
});

Categories.hasMany(Exercises, {
 foreignKey: 'category',
 onDelete: 'CASCADE',
 onUpdate: 'CASCADE',
});


module.exports = {
  User,
  Categories,
  Exercises,
};
