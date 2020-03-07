const express = require('express');
const helmet = require('helmet');
const resourceRouter = require('./resources/resources-router');
const projectsRouter = require('./projects/projects-router');
const router = express();

router.use(helmet());
router.use(express.json());

router.use('/api/resources', resourceRouter);
router.use('/api/projects', projectsRouter);

router.use((req, res) => {
  res.status(404).json({ message: '404 sorry, can not find page.' });
});

router.use((err, req, res, next) => {
  res.status(500).json({ message: 'internal sever error' });
});

module.exports = router;
