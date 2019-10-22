const I = require('i')()

const getIncludedSerializerConfig = (included) => {
  if (!included)
      return []
  
  const includedConfig = included.map(modelName => {
      const serializerConfig = require('../serializers/'+ I.singularize(modelName))()
      return {
          [modelName]: {
              ref: 'id',
              included: true,
              ...serializerConfig,
          }
      }
  }).reduce( (acc, cur) => ({...acc, ...cur}), {})
  return includedConfig
}

module.exports = {
  getIncludedSerializerConfig
}
