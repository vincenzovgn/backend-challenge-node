'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      const { Order, Costumer, Product } = models;
      Order.belongsTo(Costumer, { sourceKey: 'idCostumer' });
      Order.belongsTo(Product, { sourceKey: 'idProduct' });
    }
  }
  Order.init(
    {
      idCostumer: { type: DataTypes.INTEGER, allowNull: false },
      idProduct: { type: DataTypes.INTEGER, allowNull: false },
      valueBuy: { type: DataTypes.INTEGER, allowNull: false },
      quantityBuy: { type: DataTypes.INTEGER, allowNull: false },
      totalBuy: { type: DataTypes.INTEGER, allowNull: false }
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps: true
    }
  );
  return Order;
};
