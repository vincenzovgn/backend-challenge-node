const { attributes } = require('structure');

const types = {
  Required_String: {
    type: String,
    required: true
  }
};

const Costumer = attributes({
  name: { ...types.Required_String },
  cpf: { ...types.Required_String },
  dateOfBirth: { ...types.Required_String }
})(class Costumer {});

module.exports = Costumer;
