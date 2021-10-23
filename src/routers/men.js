const express = require('express');
const router = new express.Router();
const MensRanking = require('../models/mens');

router.post('/mens', async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);
    const insertMens = await addingMensRecords.save();
    res.status(200).send(insertMens);
  } catch (e) {
    console.log(e);
    res.status(401).send(e);
  }
});

router.get('/mens', async (req, res) => {
  try {
    const getMens = await MensRanking.find({});
    res.status(201).send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findById(_id);
    res.status(201).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.patch('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.status(201).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.delete('/mens/:id', async (req, res) => {
  try {
    const _id = req.params.id;
    const getMen = await MensRanking.findByIdAndDelete(_id);
    res.status(201).send(getMen);
  } catch (e) {
    res.status(400).send(e);
  }
});

module.exports = router;
