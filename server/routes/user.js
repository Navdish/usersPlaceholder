const router = require('express').Router();
const { userController } = require('../controllers');



router.get('/users', userController.fetch_users)
router.post('/users',userController.create_user)

module.exports = router;