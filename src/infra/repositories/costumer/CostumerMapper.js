const Costumer = require('../../../domain/entities/Costumer');

const CostumerMapper = {
  toEntity({ dataValues }) {
    // format retrieved order data from database to Entity
    return new Costumer({ ...dataValues }).toJSON();
  },

  toDatabase(Costumer) {
    const leanObj = JSON.stringify(Costumer);
    const obj = JSON.parse(leanObj);
    return obj;
  }
};

module.exports = () => CostumerMapper;
