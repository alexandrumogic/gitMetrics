const express = require('express');
const router = express.Router();
const utils = require('../utils/utils.js');

// declare axios for making http requests
const axios = require('axios');
const API = 'https://jsonplaceholder.typicode.com';

/* GET api listing. */
router.get('/', (req, res) => {
  res.send('api works');
});

// Get all posts
router.get('/posts', (req, res, next) => {

  utils.getRepositoryHistory()
      .then(posts => {
        res.status(200).json(posts);
      })
      .catch(error => {
        res.status(500).send(error)
      });
});

module.exports = router;
