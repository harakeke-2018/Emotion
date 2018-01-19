const express = require('express')
const router = express.Router()
// const level2happy = require('./data.js')
// const level2sad = require('./data.js')
const levelTwo = require('./data.js')

router.get('/', (req, res) => {
  res.render('home')
})

router.get('/:level1', (req, res) => {
  const l1 = req.params.level1
  const data = {
    levelTwo: levelTwo[l1]
  }
  res.render(l1, data)
})

router.get('/:level1/:level2', (req, res) => {
  const l2 = req.params.level2
  res.render(l2)
})

module.exports = router
