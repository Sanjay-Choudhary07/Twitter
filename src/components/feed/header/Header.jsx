import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
  const [headerData, setHeaderData] = useState(null);
  const [activeTab, setActiveTab] = useState('For You'); // Default active tab

  useEffect(() => {
    // Fetch header data from the network
    fetch('https://sandbox.nextleap.app/page/fetch')
      .then(response => response.json())
      .then(data => setHeaderData(data.headerData))
      .catch(error => console.error('Error fetching header data:', error));
  }, []);
  const handleActive = (tweetTab) => {
    setActiveTab(tweetTab);
  };
  if (!headerData) {
    return <p>Loading...</p>;
  }
  
  return (
    <div className="header">
      <div className="title">{headerData.title.text}</div>
      <div className='nav-tab'>
        <span 
         onClick={ () => handleActive('For You') }
         className={activeTab ==='For you'? 'active' : ''}>
         <a href="/">
          For You
         </a>
          </span>
        <span onClick={handleActive}
        className={activeTab ==="Following"? 'active': ''}>Following</span>
      </div>
    </div>
  );
};
export default Header;