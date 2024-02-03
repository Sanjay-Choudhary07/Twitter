import React, { useEffect, useState } from 'react';
import './Trending.css';

function Trending() {
    const [trendingData, setTrendingData] = useState(null);
    
    useEffect(() => {
        // Fetch trending data from the provided URL
        fetch('https://sandbox.nextleap.app/page/fetch')
            .then(response => response.json())
            .then(data => setTrendingData(data.trendingData.trends))
            .catch(error => console.error('Error fetching trending data:', error));
    }, []);
    function formatNumber(num) {
        if (num >= 1000) {
            return (num / 1000).toFixed(1) + 'k';
        }
        return num.toString();
    }
    return (
        <div className="trending-container">
          <h2 className='happening'>What's happening</h2>
            <div className='trending-content1'>
            {trendingData && (
                             <>
                            <div className='country-name'>Trending in {trendingData[0].country}</div>
                            <div className='hashtag-text'>{trendingData[0].text}</div>
                            <div className='tweets-number'>{formatNumber(trendingData[0].tweets)} Tweets</div>
                            </>
                         )}
            </div>
           <div className='trending-content2'>
            {trendingData && (
                 <>
                 <div className='trending-content'>{trendingData[1].category}
                 <span className='dot1'>·</span>
                 <span className='trend'>Trending</span>
                 </div>
                 <div className='team-name'>{trendingData[1].text}</div>
                 <div className='trending-with'>Trending with
                 <span className='hash-tag1'>{trendingData[1].hashTags[0]}</span>
                 <span className='hash-tag2'>{trendingData[1].hashTags[1]}</span>
                 </div>
                 </>
            ) }
           </div>
           <div className='trending-content3'>
            {trendingData && (
                <>
                <div className='trending-category'>{trendingData[2].category}
                <span className='dot2'>·</span>
                <span className='trend2'>Trending</span>
                </div>
                <div className='text'>{trendingData[2].text}</div>
                <div className='tweet-num'>{formatNumber(trendingData[2].tweets)} Tweets</div>
                </>
            )}
           </div>
           <div className='trending-content4'>
            {trendingData && (
                <>
                <div className='ipl'>
                <span className='indian-premier'>{trendingData[3].category}</span>
                <span className='dot3'>·</span>
                <span className='trending-ipl'>Trending</span>
                </div>
                <div className='dhoni'>{trendingData[3].text}</div>
                <div className='chennai'>
                <span>Trending with</span>
                <span className='hash1'>{trendingData[3].hashTags[0]}</span>
                <span className='hash2'>{trendingData[3].hashTags[1]}</span>
                </div>
                </>
            )}
           </div>
           <div className='show-more'>Show more</div>
        </div>
    );
}
export default Trending;