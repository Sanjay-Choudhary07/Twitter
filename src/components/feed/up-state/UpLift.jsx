// import React, { useState, useEffect } from 'react';
// import PostTweet from './PostTweet';
// import TweetList from './TweetList';
// // import './TweetApp.css';

// const UpLift = () => {
//   const [tweetThreads, setTweetThreads] = useState([]);

//   useEffect(() => {
//     fetchTweets();
//   }, []);

//   const fetchTweets = async () => {
//     try {
//       const response = await fetch('https://sandbox.nextleap.app/page/fetch');
//       const data = await response.json();
//       setTweetThreads(data.tweetThreads);
//     } catch (error) {
//       console.error('Error fetching tweets:', error);
//     }
//   };

//   const addTweet = (newTweet) => {
//     setTweetThreads([newTweet, ...tweetThreads]);
//   };

//   return (
//     <div className="tweet-app">
//       <PostTweet addTweet={addTweet} />
//       <TweetList tweetThreads={tweetThreads} />
//     </div>
//   );
// };

// export default UpLift;