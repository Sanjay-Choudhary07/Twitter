import React, { useState, useEffect } from 'react';
import bluetick from './blue-tick-image.png'
import replies from './reply.png'
import likes from './like.png'
import retweet from './retweet.png'
import share from './share.png'
import './TweetList.css'
 
const TweetList = () => {
  const [tweetThreads, setTweetThreads] = useState([]);
   const formatNumber = (number) => {
    if (number >= 1000) {
      return (number / 1000).toFixed(1) + 'K';
    } else {
      return number.toString();
    }
  };
  const timeConversion = (time) => {
    const date = new Date(time);
    const month = date.toLocaleString('en-US', { month: 'short' });
    const day = date.getDate();
    const formattedTime = `${day} ${month}`;
    return formattedTime;
};
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://sandbox.nextleap.app/page/fetch');
        const data = await response.json();
        setTweetThreads(data.tweetThreads);
      } catch (error) {
        console.error('Error in fetching tweet threads:', error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className='tweet-list'>
      {tweetThreads && tweetThreads.map((thread,index) =>
        <div key={index} className='tweets'>
          <div className='image-div'>
          <img src={thread[0].user.imageData.url} alt={ thread[0].user.imageData.alt}/>
          </div>
          <div className='tweet-container'>
            <div className='user-detail'>
            <p className='name'>
              { thread[0].user.userName}
            </p>
            {thread[0].user.blueTick ===true?<img className='blue-tick' src={bluetick} alt=''/> : "" }
            <p className='user-id'>
              @{thread[0].user.userId}
            </p>
            <p className='dot'>·</p>
            <p className='date'>
              {timeConversion(thread[0].tweetTime)}
            </p>
            </div>

            <div className='tweet-content'>
              <p className='text-area'>{ thread[0].textArea}</p>
            </div>
            <div className='buttons'>
              <div className='comment'>
                <img src={replies} alt=''/>
                <p>{formatNumber(thread[0].replies)}</p>
              </div>

              <div className='retweet'>
                <img src={retweet} alt=''/>
                <p>{formatNumber(thread[0].reTweets)}</p>
              </div>

              <div className='like'>
                <img src={likes} alt=''/>
                <p>{formatNumber(thread[0].likes)}</p>
              </div>

              <div className='share'>
              <img src={share} alt=''/>
              <p> {formatNumber(thread[0].views)}</p>
              </div>
              </div>

          </div>
        </div>
        

      )}
    </div>
  )
};
export default TweetList;