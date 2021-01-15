const router = require('express').Router()
const posts = require('./posts')

// - авторизация (signin + signup)
router.post('/signin', (req, res) => {
  res.send('signin')
})

router.post('/signup', (req, res) => {
  res.send('signup')
})
//


// - auth
router.use((req, res, next) => {
  console.log('auth')
  next()
})

// ...
router.use('/posts', posts)



router.all('*', (req, res) => {
  res.status(404).send('not found')
})
// 404



module.exports = router