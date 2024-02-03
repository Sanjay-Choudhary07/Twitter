import React, { useState, useEffect } from 'react';
import './Navigationbar.css';
import notification from './Notification.png'

const Navigationbar = () => {
  const [sideNavigationButtons, setSideNavigationButtons] = useState([]);
   useEffect(() => {
    fetch('https://sandbox.nextleap.app/page/fetch')
      .then((response) => response.json())
      .then((data) => {
        setSideNavigationButtons(data.sideNavigationButtons)
      })
      .catch((error) => console.error('Error fetching data:', error));

  }, []);

  return (
    <div className="sidebar">
      <ul className='sidebar-list'>
        {sideNavigationButtons.map((button, index) => (
          <li key={index} className="sidebar-icons">
            <a href={button.actionUrl}>
              <img src={button.icon.url} alt={button.icon.alt} width={button.icon.aspX} height={button.icon.aspY}  className='colored-image' />
              <span className='icon-text'>{button.buttonText}</span>
            </a>
          </li>
        ))}
      </ul>
      <div className='tweet-button-container'>
        <button className='tweet-button'>Tweet</button>
      </div>
      <div className='notification'>
                    <img src={notification} alt="notification-number" />
            </div>
    </div>
  );
};
export default Navigationbar;