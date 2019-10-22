const { Controller: BaseController } = require('@coding-blocks/express-jsonapi-controller')
const DB = require('../../../models')
const serializer = require('../../../serializers/teachers')

class TeacherController extends BaseController {}

module.exports = new TeacherController(DB.teachers, DB, serializer)
