const { Controller: BaseController } = require('@coding-blocks/express-jsonapi-controller')
const DB = require('../../../models')
const serializer = require('../../../serializers/participation')

class ParticipationController extends BaseController {}

module.exports = new ParticipationController(DB.participations, DB, serializer)
