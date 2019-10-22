const U = require("../utils/util");

module.exports = (included, type, config) => {
  const includedConfig = U.getIncludedSerializerConfig(included);

  return {
    attributes: [
      "id",
      "name"
    ],
    ...config,
    ...includedConfig,
  };
};
