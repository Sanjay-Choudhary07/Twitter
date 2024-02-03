import React, { useState, useEffect } from 'react';
import './PostTweet.css';

const PostTweet = () => {
  const [tweetText, setTweetText] = useState('');
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Fetch user data from the network
    fetch('https://sandbox.nextleap.app/page/fetch')
      .then(response => response.json())
      .then(data => setLoggedInUser(data.loggedInUser))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);

  const sendTweet = () => {
    fetch('https://sandbox.nextleap.app/page/fetch')
      .then(response => response.json())
      .then(data => {
        const newTweet = {
          user: data.loggedInUser,
          tweet: tweetText,
        };
        setTweets(prevTweets => [newTweet, ...prevTweets]);
      })
      .catch(error => console.error('Error fetching data for the tweet:', error));

    // Clear the tweet input after sending the tweet
    setTweetText('');
  };

  return (
    <div className="tweet-box">
      {loggedInUser && (
        <div className="user-profile">
          <img src={loggedInUser.imageData.url} alt={loggedInUser.imageData.alt} />
        </div>
      )}
      <textarea
        placeholder="What's happening?"
        value={tweetText}
        onChange={(e) => setTweetText(e.target.value)}
      />
      <button onClick={sendTweet} className='tweet'>Tweet</button>

     
      <div className="tweet-list">
        <ul className='newlist'>
          {tweets.map((tweet, index) => ( 
            <li key={index} className='with-key'>
              <img src={tweet.user.imageData.url} alt={tweet.user.imageData.alt} className='user-img' />
              <span className='name'>{tweet.user.userName}:</span>
              <p>{tweet.tweet}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};
export default PostTweet;