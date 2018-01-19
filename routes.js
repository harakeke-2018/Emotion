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
  const l1 = req.params.level1
  const l2 = req.params.level2

  const data = {
    levelTwo: levelTwo[l1]
  }

  function find (temp) {
    for (let i = 0; i < temp.length; i++) {
      if (temp[i].id === l2) {
        return temp[i]
      }
    }
  }

  const result = find(data.levelTwo)
  res.render('feedback', result)
})

module.exports = router
