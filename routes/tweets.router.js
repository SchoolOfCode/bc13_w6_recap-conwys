import express from "express";
const router = express.Router();

import {
  getTweets,
  createTweet,
  updateTweet,
  deleteTweet,
} from "../models/tweets.model.js";

router.get("/", async function (req, res) {
  const result = await getTweets();
  res.json({ success: true, payload: result });
});

router.post("/", async function (req, res) {
  const newTweet = req.body;
  const result = await createTweet(newTweet);
  res.status(201).json({ success: true, payload: result });
});

router.put("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const data = req.body;
  const result = await updateTweet(id, data);
  res.json({ success: true, payload: result });
});

router.delete("/:id", async function (req, res) {
  const id = Number(req.params.id);
  const result = await deleteTweet(id);
  res.json({ success: true, payload: result });
});

export default router;
