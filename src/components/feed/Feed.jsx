import React from 'react'
import Header from './header/Header'
import './Feed.css'
import TweetList from './tweet-list/TweetList'
import PostTweet from './post-tweet/PostTweet'

export default function Feed() {
  return (
    <div className='feed'>
      <Header/>
      <PostTweet/> 
      <TweetList/>
    </div>
  )
}
