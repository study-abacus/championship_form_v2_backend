const U = require("../utils/util");

module.exports = (included, type, config) => {
  const includedConfig = U.getIncludedSerializerConfig(included);

  if (type === 'deserialize') {
    return {
      keyForAttribute: 'camelCase',
      exams: {
        valueForRelationship(relationship) {
          return {
            id: relationship.id
          }
        }
      },
      participants: {
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
      "accepted",
      "exam",
      "participant"
    ],
    exam: {
      ref: 'id'
    },
    participant: {
      ref: 'id'
    },
    ...config,
    ...includedConfig,
  };
};
