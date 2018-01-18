const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.send('home')
})

router.get('/happy', (req, res) => {
  res.send('happy')
})

router.get('/sad', (req, res) => {
  res.send('sad')
})

router.get('/sad/lonely', (req, res) => {
  res.send('lonely')
})

router.get('/sad/vulnerable', (req, res) => {
  res.send('vulnerable')
})

router.get('/sad/overwhelmed', (req, res) => {
  res.send('overwhelmed')
})

router.get('/sad/bored', (req, res) => {
  res.send('bored')
})

router.get('/happy/content', (req, res) => {
  res.send('content')
})

router.get('/happy/optimistic', (req, res) => {
  res.send('optimistic')
})

router.get('/happy/confident', (req, res) => {
  res.send('confident')
})

router.get('/happy/thankful', (req, res) => {
  res.send('thankful')
})
module.exports = router
