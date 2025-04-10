const express = require('express');
const router = express.Router();
const Job = require('../models/Job');

router.get('/', async (req, res) => {
  const jobs = await Job.find().sort({ date: -1 });
  res.json(jobs);
});

router.post('/', async (req, res) => {
  const job = new Job(req.body);
  await job.save();
  res.status(201).json(job);
});

router.put('/:id', async (req, res) => {
  const { status } = req.body;
  const job = await Job.findByIdAndUpdate(req.params.id, { status }, { new: true });
  res.json(job);
});

router.delete('/:id', async (req, res) => {
  await Job.findByIdAndDelete(req.params.id);
  res.json({ message: 'Job deleted' });
});

module.exports = router;
