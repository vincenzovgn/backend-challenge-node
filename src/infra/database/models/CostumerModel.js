'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const types = {
    Required_String: {
      type: DataTypes.STRING,
      allowNull: false
    }
  };

  class Costumer extends Model {
    static associate(models) {
      // define association here
      const { Costumer, Order } = models;
      Costumer.hasMany(Order, {
        as: 'orders',
        foreignKey: 'idCostumer'
      });
    }
  }
  Costumer.init(
    {
      name: { ...types.Required_String },
      cpf: { ...types.Required_String, unique: true },
      dateOfBirth: { ...types.Required_String }
    },
    {
      sequelize,
      modelName: 'Costumer',
      timestamps: true
    }
  );
  return Costumer;
};
