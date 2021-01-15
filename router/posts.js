const router = require('express').Router()

router.get('/', (req, res) => {
  res.send('get all posts')
})

router.get('/:id', (req, res) => {
  res.send('get single post')
})


module.exports = router