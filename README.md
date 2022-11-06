# Recap Tasks - Testing 🧪

## Solidify your testing knowledge 🔎

### Test a full stack app

We have a full-stack application in this repository.

To run the app:

- You'll need to set up a database and add your credentials to a `.env` file. Have a look at the `package.json` to see which scripts can make your life easier.
- Study the backend code to understand what path the frontend is being served on.

```js
// In app.js, the line below is serving the public folder which contains frontend/HTML. So you won't use Live Server (or copy the file path) to view the frontend.
app.use(express.static("public"));
```

- You can access the frontend via `http://localhost:PORT`

#### End-to-end test with Cypress

👉 First, have a play with the app itself, so you can make a plan of the behaviors you want to test with Cypress.

👉 Draft your test statements. Start with the basics, and work your way up. Remember to plan out each stage of logic within each test itself - don't start coding until you have a plan for that individual test.

👉 Then write the tests for each test statement you drafted.

#### Test the back end API with Supertest

👉 Look at the CRUD routes and plan how you'd test each one using SuperTest.

| Request                    | Request body       | Response status code | Response body                                          |
| -------------------------- | ------------------ | -------------------- | ------------------------------------------------------ |
| GET /api/tweets            | none               | 200                  | { success: true, payload: array of tweet objects }     |
| POST /api/tweets           | { tweeter, tweet } | 201                  | { success: true, payload: newly created tweet object } |
| PUT /api/tweets/some_id    | { tweeter, tweet } | 200                  | { success: true, payload: updated tweet object }       |
| DELETE /api/tweets/some_id | none               | 200                  | { success: true, payload: deleted tweet object }       |

👉 Test each route one by one.

👉 See if you can use Jest hooks and any existing helper functions in the codebase to reset the database table before each test. This gives each test a fresh context and prevents one test's changes to the table from affecting another test's outcome.

👉 See if you can use Jest hooks and the pool to close the connection to the database after all of your tests have finished. This allows Jest to exit as normal.

## Bonus: Get ready for React ⚛️

We'll be diving into React next week, so you may wish to do a bit of reading and watching so you can be ready to hit the ground running. The following links and videos will walk you through the basics of what React is, why we'd want to use it, and what's happening under the hood.

You don't need to memorize all the details or learn it all by heart! This is your first exposure so you'll have a foundation for when we cover these concepts together.

### Blogs and resources

- [FreeCodeCamp: Why you should use React.js for web development](https://www.freecodecamp.org/news/why-use-react-for-web-development/)
- [SurviveJS: Introduction to React](https://survivejs.com/react/getting-started/introduction-to-react/)
- [FreeCodeCamp: JSX in React](https://www.freecodecamp.org/news/jsx-in-react-introduction/)
- [Blog: The role of Babel in React](https://medium.com/swlh/the-role-of-babel-in-react-dbcf78c69125)

### Videos

- [Fireship: React in 100 seconds (2min)](https://www.youtube.com/watch?v=Tn6-PIqc4UM)
- [Mosh: What is React, and why is it so popular? (5min)](https://www.youtube.com/watch?v=N3AkSS5hXMA)
- [Aaron Jack: React in five minutes (5min)](https://www.youtube.com/watch?v=MRIMT0xPXFI)
