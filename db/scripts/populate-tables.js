import { pool } from "../index.js";
import { populateTweetsTable } from "../helpers.js";

try {
  await populateTweetsTable();
  console.log("Populated all tables");
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}
