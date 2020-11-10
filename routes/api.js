const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');

//--------------------- User Routes
router.get('/users', ctrl.users.index);
router.get('/users/:id', ctrl.users.show);
router.post('/users', ctrl.users.create);
router.put('/users/:id', ctrl.users.update);

//--------------------- Posts
router.get('/posts', ctrl.posts.index);
router.get('/posts/:id', ctrl.posts.show);
router.post('/posts', ctrl.posts.create);
router.put('/posts/:id', ctrl.posts.update);
router.delete('/posts/:id', ctrl.posts.destroy);

module.exports = router;