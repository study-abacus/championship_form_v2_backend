const { Controller: BaseController } = require('@coding-blocks/express-jsonapi-controller')
const DB = require('../../../models')
const serializer = require('../../../serializers/exam')

class ExamController extends BaseController {
  async handleGetSubjects(req, res) {
    try {
      res.json({
        subjects: await DB
          .exams
          .aggregate('subject', 'DISTINCT', { plain: false })
          .map(_ => _.DISTINCT)
      })
    } catch (err) {
      res.sendStatus(500)
    }
  }

  async fetchLevelsTasks(req, res) {
    try {
      const { subject } = req.query

      if (!subject) {
        return this.handleError({
          code: 400,
          message: 'Subject query is required'
        }, res)
      }

      const exams = await DB.exams.findAll({
        attributes: ['level'],
        where: {
          subject
        }
      })
      res.json({
        levels: exams.map(_ => _.level)
      })
    } catch (err) {
      res.sendStatus(500)
    }
  }
}

module.exports = new ExamController(DB.exams, DB, serializer)
