const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Workouts extends Model {}

Workouts.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    workout_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    sets: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    reps: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    total_minutes: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    exercise_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'exercises',
        key: 'id',
      },
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'workouts',
  }
);

module.exports = Workouts;