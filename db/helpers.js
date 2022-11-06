import { pool } from "./index.js";

export async function createTweetsTable() {
  return await pool.query(
    "CREATE TABLE IF NOT EXISTS tweets (tweet_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, tweeter TEXT, tweet TEXT);"
  );
}

export async function dropTweetsTable() {
  return await pool.query("DROP TABLE IF EXISTS tweets;");
}

export async function populateTweetsTable() {
  const tweets = [
    { tweeter: "JestFan2022", tweet: "How good is Jest?" },
    {
      tweeter: "Cypress4Lyfe",
      tweet: "@JestFan2022 Yeah, but can it do everything that Cypress does?",
    },
    { tweeter: "SuperTester", tweet: "*laughs in back end API testing*" },
  ];

  return await pool.query(
    "INSERT INTO tweets (tweeter, tweet) (SELECT tweeter, tweet FROM json_populate_recordset(NULL::tweets, $1::JSON));",
    [JSON.stringify(tweets)]
  );
}

export async function resetTweetsTable() {
  return [
    await dropTweetsTable(),
    await createTweetsTable(),
    await populateTweetsTable(),
  ];
}
