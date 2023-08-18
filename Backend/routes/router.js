const express = require('express');
const { getCombo, deleteCombo, updateCombo, combo } = require('../controllers/combo');
const { foodImgUpload } = require('../utils/fileUpload');
const router = express.Router();
const uploadTwo = require('../utils/fileuploadTwo');
const { menu, getMenu, updateMenu, deleteMenu } = require('../controllers/menu');
const register = require('../controllers/register');
const logIn = require('../controllers/logIn');



router.post ('/api/combos', foodImgUpload, combo);
router.get ('/api/combos/:id', getCombo);
router.put ('/api/combos/:id', foodImgUpload, updateCombo);
router.delete ('/api/artists/:id', deleteCombo);
router.post ('/api/menu', uploadTwo, menu);
router.get ('/api/menu/:id', getMenu);
router.put ('/api/menu/:id', uploadTwo, updateMenu);
router.delete ('/api/menu/:id', deleteMenu);
router.post('/register',  register);
router.post('/login', logIn);

module.exports = router;
