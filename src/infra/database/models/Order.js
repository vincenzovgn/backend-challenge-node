'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    static associate(models) {
      // define association here
      const { Costumer, Order } = models;
      Order.belongsTo(Costumer, { sourceKey: 'idCostumer' });
      Order.belongsTo(Product, { sourceKey: 'idProduct' });
    }
  }
  Order.init(
    {
      idCostumer: DataTypes.NUMBER,
      idProduct: DataTypes.NUMBER,
      valueBuy: DataTypes.NUMBER,
      quantityBuy: DataTypes.NUMBER,
      totalBuy: DataTypes.NUMBER
    },
    {
      sequelize,
      modelName: 'Order',
      timestamps: true
    }
  );
  return Order;
};
