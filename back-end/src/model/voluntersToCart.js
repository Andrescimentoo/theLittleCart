import { dataBase } from "../database/config.js";
import { DataTypes } from "sequelize";

const VoluntersToCart = dataBase.define('VoluntersToCart', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
   
    name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    
    last_name: {
      type: DataTypes.STRING(200),
      allowNull: false
    },
    
    availableHours: {
      type: DataTypes.STRING(200),  // Ou TEXT, se precisar de mais flexibilidade
      allowNull: true
    },
    
    availableDays: {
      type: DataTypes.STRING(200),  
      allowNull: true
    },
    
    fixedDays: {
      type: DataTypes.STRING(200),  
      allowNull: true
    },
   
    status: {
      type: DataTypes.STRING(100),  
      allowNull: true
    }
  }, {
    timestamps: false 
  });
  
  export{VoluntersToCart}