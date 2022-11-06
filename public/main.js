// Relative url used as it's assumed backend is also serving frontend
const apiEndpoint = "/api/tweets";

const tweetsList = document.querySelector("#tweets-list");
const refreshTweetsButton = document.querySelector("#refresh-button");
const sendTweetButton = document.querySelector("#send-tweet-button");

async function refreshTweets() {
  const response = await fetch(apiEndpoint);
  const data = await response.json();
  tweetsList.innerHTML = "";
  for (const tweet of data.payload) {
    renderTweet(tweet);
  }
}

refreshTweetsButton.addEventListener("click", refreshTweets);

async function postTweet() {
  const formData = gatherFormData();
  const response = await fetch(apiEndpoint, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(formData),
  });
  const data = await response.json();
  console.log(data);
}

sendTweetButton.addEventListener("click", postTweet);

function gatherFormData() {
  const tweeter = document.querySelector("#tweeter-input").value;
  const tweet = document.querySelector("#tweet-input").value;
  return {
    tweeter,
    tweet,
  };
}

function renderTweet(tweet) {
  const li = document.createElement("li");
  li.textContent = `${tweet.tweeter}: ${tweet.tweet}`;
  tweetsList.appendChild(li);
}
