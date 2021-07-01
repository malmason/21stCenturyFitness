const User = require('./User');
const Categories = require('./Categories');
const Exercises = require('./Exercises');


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
};
