import { pool } from "../db/index.js";

export async function getTweets() {
  const data = await pool.query("SELECT * FROM tweets;");
  return data.rows;
}

export async function createTweet(newTweet) {
  const data = await pool.query(
    "INSERT INTO tweets (tweeter, tweet) VALUES ($1, $2) RETURNING *;",
    [newTweet.tweeter, newTweet.tweet]
  );
  return data.rows[0];
}

export async function updateTweet(id, updatedTweet) {
  const data = await pool.query(
    "UPDATE tweets SET tweeter = $1, tweet = $2 WHERE tweet_id = $3 RETURNING *;",
    [updatedTweet.tweeter, updatedTweet.tweet, id]
  );
  return data.rows[0];
}

export async function deleteTweet(id) {
  const data = await pool.query(
    "DELETE FROM tweets WHERE tweet_id = $1 RETURNING *;",
    [id]
  );
  return data.rows[0];
}
