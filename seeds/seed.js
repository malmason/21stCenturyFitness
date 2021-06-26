const sequelize = require('../config/connection');
const { User, Categories, Exercises } = require('../models');

const userData = require('./userSeed.json');
const categoryData = require('./categorySeed.json');
const exerciseData = require('./exerciseSeed.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  const categories = await Categories.bulkCreate(categoryData);
  const exercise = await Exercises.bulkCreate(exerciseData);

  process.exit(0);
};

seedDatabase();