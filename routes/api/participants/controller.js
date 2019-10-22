const { Controller: BaseController } = require('@coding-blocks/express-jsonapi-controller')
const DB = require('../../../models')
const serializer = require('../../../serializers/participants')

class ParticipantController extends BaseController {}

module.exports = new ParticipantController(DB.participants, DB, serializer)
