const DB = require('../../../models')

class DashboardController {
  async handleGetStats(req, res) {
    try {
      const totalParticipation = await DB.participants.count()
      const totalExam = await DB.participations.count()
      const examinationSummary = await DB.participations.count({
        attributes: ["exam.subject", "exam.level"],
        group: '"examId", exam.subject, exam.level',
        order: 'exam.subject, exam.level',
        include: {
          model: DB.exams
        }
      })
      const tshirtSummary = await DB.participants.count({
        attributes: ['tShirtSize'],
        group: '"tShirtSize"'
      })
      res.json({
        totalParticipation,
        totalExam,
        examinationSummary,
        tshirtSummary
      })
    } catch (err) {
      res.sendStatus(500)
    }
  }
}

module.exports = new DashboardController()
