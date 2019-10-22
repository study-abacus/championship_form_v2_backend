const router = require('express').Router()

router.use('*', (req, res, next)=>{
  const allowedOrigins = [
    'http://localhost:4201', 
    'http://localhost:4200'
  ]
  const origin = req.get('Origin')
  if (allowedOrigins.indexOf(origin) > -1)
    res.setHeader('Access-Control-Allow-Origin', origin)

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,api-key,user,user-id,Authorization,oauth-id,client,ONEAUTH-ID');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);
  next()
});

router.options('*', (req, res) => {
 res.sendStatus(200);
})

module.exports = router
