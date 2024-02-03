import React, {useState, useEffect} from "react";
import './Profile.css'; 
import profileLock from './Profile_Lock.png'
import more from "./More.png"

const Profile = () => {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    // Fetch user data from the network
    fetch('https://sandbox.nextleap.app/page/fetch')
      .then(response => response.json())
      .then(data => setUserData(data.loggedInUser))
      .catch(error => console.error('Error fetching user data:', error));
  }, []);
  if (!userData) {
    // Render a loading state or return null if userData is still undefined
    return <p>Loading...</p>;
  }
  return (
    <div className="profile-container">
        <div className="profile-image">
          <img src={userData.imageData.url} alt={userData.imageData.alt} />
        </div>
          <div className="profile-details">
            <p className="user-name">{userData.userName}</p>
            <p className="user-id">{"@"+userData.userId}</p>
          </div>
          <div className="profile-lock">
          <img src={profileLock} alt="profile-lock-icon"/>
          </div>
          <div className="more-option">
            <img src={more} alt="more-icon"/>
          </div>
    </div>
  );
};

export default Profile;