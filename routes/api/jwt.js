const router = require('express').Router()
const DB = require('../../models')
const passwordUtil = require('../../utils/password')
const jwtUtil = require('../../utils/jwt')
const uuidv4 = require('uuid/v4')

router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body
    const user = await DB.users.findOne({
      where: {
        username
      },
      raw: true
    })

    if (!user || !await passwordUtil.compare(password, user.password)) {
      return res.sendStatus(403)
    }

    let session = await DB.sessions.findOne({
      where: {
        userId: user.id
      }
    })

    const clientId = uuidv4()
    const refresh_token = uuidv4()

    if (session) {
      session.clientId = clientId
      session.refreshToken = refresh_token
      await session.save()
    } else {
      session = await DB.sessions.create({
        userId: user.id,
        clientId,
        refreshToken: refresh_token
      })
    }

    // remove password hash from user object
    delete user.password
    const token = jwtUtil.generate({
      ...user,
      clientId
    })

    res.json({
      token,
      refresh_token
    })

  } catch (err) {
    res.sendStatus(500)
  }
})

router.post('/refresh', async (req, res) => {
  try {
    const { refresh_token } = req.body

    const session = await DB.sessions.findOne({
      where: {
        refreshToken: refresh_token
      }
    })

    if (!session) {
      return res.sendStatus(401)
    }

    const user = await DB.users.findOne({
      where: {
        id: session.userId
      },
      raw: true
    })

    res.json({
      token: jwtUtil.generate({
        ...user,
        clientId: session.clientId
      }),
      refresh_token
    })
    
  } catch (err) {
    res.sendStatus(500)
  }
})

module.exports = router
