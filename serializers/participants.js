const U = require("../utils/util");

module.exports = (included, type, config) => {
  const includedConfig = U.getIncludedSerializerConfig(included);

  if (type === 'deserialize') {
    return {
      teachers: {
        keyForAttributes: 'camelCase',
        valueForRelationship(relationship) {
          return {
            id: relationship.id
          }
        }
      } 
    }
  }

  return {
    attributes: [
      "id",
      "name",
      "studentId",
      "tShirtSize",
      "teacher"
    ],
    teacher: {
      ref: 'id'
    },
    ...config,
    ...includedConfig,
  };
};
