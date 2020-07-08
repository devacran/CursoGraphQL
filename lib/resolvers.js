//Esto exporta el contenido de los squemas
//Solo que se pusieron en archivos independientes en queries y mutations
const queries = require("./queries");
const mutations = require("./mutations");
const types = require("./types");

module.exports = {
  Query: queries,
  Mutation: mutations,
  ...types,
};
