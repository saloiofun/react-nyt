const router = require('express').Router()
const savesController = require('../../controllers/savesController')

// Matches with "/api/saves"
router.route('/')
  .post(savesController.create)

module.exports = router
