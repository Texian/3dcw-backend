const express = require('express');
const router = express.Router();
const ctrl = require('../controllers');
const verifyToken = require('../middleware/verification');

//--------------------- User Routes
router.get('/users', verifyToken, ctrl.users.index);
router.get('/users/:id', verifyToken, ctrl.users.show);
//router.get('/users/profile', verifyToken, ctrl.users.profile);
router.post('/users', ctrl.users.create);
router.put('/users/:id', verifyToken, ctrl.users.update);
router.delete('/users/:id', verifyToken, ctrl.users.destroy);

//--------------------- Posts
router.get('/posts', ctrl.posts.index);
router.get('/posts/:id', ctrl.posts.show);
router.post('/posts', verifyToken, ctrl.posts.create);
router.put('/posts/:id', verifyToken, ctrl.posts.update);
router.delete('/posts/:id', verifyToken, ctrl.posts.destroy);

//--------------------- Projects
router.get('/projects', ctrl.projects.index);
router.get('/projects/:id', ctrl.projects.show);
router.post('/projects', verifyToken, ctrl.projects.create);
router.put('/projects/:id', verifyToken, ctrl.projects.update);
router.delete('/projects/:id', verifyToken, ctrl.projects.destroy);

module.exports = router;