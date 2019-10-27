const U = require("../utils/util");

module.exports = (included, type, config) => {
  const includedConfig = U.getIncludedSerializerConfig(included);

  if (type === 'deserialize') {
    return {
      keyForAttribute: 'camelCase',
      teachers: {
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
      "teacher",
      "participations"
    ],
    teacher: {
      ref: 'id'
    },
    participations: {
      ref: 'id'
    },
    meta: {
      pagination: record => record.pagination
    },
    ...config,
    ...includedConfig,
  };
};
