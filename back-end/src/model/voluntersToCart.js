import { dataBase } from "../database/config.js";
import { DataTypes } from "sequelize";


const VoluntersToCart = dataBase.define("VoluntersToCart", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  fullName: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },

  availableStartTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },

  availableEndTime: {
    type: DataTypes.TIME,
    allowNull: false,
  },

  availableDaysOfTheWeek: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },

  fixedDays: {
    type: DataTypes.STRING(200), // "sim" ou NULL
    allowNull: true,
  },
});



export {VoluntersToCart} ;