const express = require('express');
const helmet = require('helmet');

const router = express();

router.use(helmet());
router.use(express.json());

module.exports = router;
