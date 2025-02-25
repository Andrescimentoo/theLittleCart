import { DataTypes } from "sequelize";
import { dataBase } from "../database/config";

const ShiftSchedule = dataBase.define("ShiftSchedule", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  dayOfWeek: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },

  startTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },

  endTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },

  shift: {
    type: DataTypes.STRING(20), 
    allowNull: false,
  },

  fixedDay: {
    type: DataTypes.STRING(10), 
    allowNull: true,
  },

  volunteer_1: {
    type: DataTypes.STRING(200), 
    allowNull: true,
  },

  volunteer_2: {
    type: DataTypes.STRING(200), 
    allowNull: true,
  },
});

export {ShiftSchedule}; 

    