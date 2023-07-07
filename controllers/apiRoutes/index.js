const router = require('express').Router();
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');
const editpostRoutes = require('./editpostRoutes');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('./comment', commentRoutes);
router.use('./editposts', editpostRoutes);
module.exports = router;