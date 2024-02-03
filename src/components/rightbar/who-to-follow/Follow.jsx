import React, {useState,useEffect} from "react";
import './Follow.css';
import bluetick from './blue-tick.png';
function Follow(){
    const[followData, setFollowData] = useState(null)
    useEffect(()=>{
        fetch('https://sandbox.nextleap.app/page/fetch')
        .then(response => response.json())
        .then(data => setFollowData(data.followData))
        .catch(error => console.error('Error fetching follow data',error))
    },[]);
    if (!followData) {
        return <div>Loading...</div>;
    }
    return(
        <div className="who-to-follow-container">
        <div className="who-to-follow-title">{followData.title}</div>
        <div className="users-to-follow">
            {followData.usersToFollow.map((user, index) => (
                <div className="user" key={index}>
                    <img src={user.imageData.url} alt={user.imageData.alt} className="user-image" />
                    <div className="user-details">
                        <div className="user-name">{user.userName}<span className="blue-tick"> <img src={bluetick} alt="twitter-blue-tick"/></span></div>
                        <div className="userId">{'@'+ user.userId} </div>
                    </div>
                    <div className="follow-button">Follow</div>
                </div>
            ))}
            <div className="show-more-follow">Show more</div>
        </div>
    </div>
);
}
export default Follow;