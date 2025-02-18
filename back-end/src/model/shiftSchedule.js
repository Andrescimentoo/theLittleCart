import Sequelize from "sequelize";
import { DataTypes } from "sequelize";



    const ShiftSchedule = Sequelize.define('ShiftSchedule', {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      volunteerId_1: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'VoluntersToCart', // Nome da tabela relacionada
          key: 'id',
        },
      },
      volunteerId_2: {
        type: DataTypes.INTEGER,
        allowNull: true,
        references: {
          model: 'VoluntersToCart', // Nome da tabela relacionada
          key: 'id',
        },
      },
      day_of_week: {
        type: DataTypes.STRING(50),
        allowNull: false,
      },
      start_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
      end_time: {
        type: DataTypes.TIME,
        allowNull: false,
      },
    }, {
      tableName: 'shiftSchedule',
      timestamps: false, // Desabilita os campos 'createdAt' e 'updatedAt'
    });
  
    // Relacionamentos
    ShiftSchedule.associate = (models) => {
      ShiftSchedule.belongsTo(models.VoluntersToCart, {
        foreignKey: 'volunteerId_1',
        as: 'volunteer_1',
      });
      ShiftSchedule.belongsTo(models.VoluntersToCart, {
        foreignKey: 'volunteerId_2',
        as: 'volunteer_2',
      });
    };
  
    return ShiftSchedule;

    export{ShiftSchedule}
  