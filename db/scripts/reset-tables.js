import { pool } from "../index.js";
import { resetTweetsTable } from "../helpers.js";

try {
  await resetTweetsTable();
  console.log("Reset all tables");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
