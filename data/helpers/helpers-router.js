const express = require('express');

const router = express.Router();

const User = require('./userDb.js');
const Post = require('./postDb.js');

router.get('/', async (req, res) => {
    try {
      const user = await User.get(req.query);
      res.status(200).json(user);
    } catch (error) {
      // log error to database
      console.log(error);
      res.status(500).json({
        message: 'Error retrieving the hubs',
      });
    }
  });
  
  
router.get('/:id', async (req, res) => {
try {
    const user = await User.getById(req.params.id);

    if (user) {
    res.status(200).json(user);
    } else {
    res.status(404).json({ message: 'User not found' });
    }
} catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
    message: 'Error retrieving the hub',
    });
}
});

router.post('/', async (req, res) => {
try {
    const user = await User.insert(req.body);
    res.status(201).json(user);
} catch (error) {
    // log error to database
    console.log(error);
    res.status(500).json({
    message: 'Error adding the user',
    });
}
});

// ----------- this line exports can pick it up ---------
module.exports = router;
// ------------------------------------------------------

