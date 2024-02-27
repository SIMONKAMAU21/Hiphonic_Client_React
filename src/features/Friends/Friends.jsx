

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import '../Friends/Friends.scss'
import { selectAllFriends, getFriends, getFriendsStatus, getFriendsError } from "../Friends/FriendsSlice";
import  Avatar from '../../assets/Avatar.png'

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectAllFriends);
  const status = useSelector(getFriendsStatus);
  const error = useSelector(getFriendsError);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      console.log(friends)
      dispatch(getFriends());
    }
  }, [status, dispatch]);
  console.log(friends)

  const handleSendMessage = (friend) => {
    // Implement sending message functionality here
    console.log("Sending message to:", friends);
  };

  return (
    <div className="friends">

      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' &&
        friends.map((friend, index) => (
          <div className="friend" key={index}>
            <div className="top">
              <div className="img">
                <img src={Avatar} alt="no-dp" />
              </div>
              <div className="details">
                <h4>{friend.tagname}</h4>
                <p>@{friend.username}</p>
              </div>
              <div className="action">
                {selectedFriend === friend.id ? (
                  <button onClick={() => setSelectedFriend(null)}>Cancel</button>
                ) : (
                  <button onClick={() => setSelectedFriend(friend.id)}>Message</button>
                )}
              </div>
            </div>
            {selectedFriend === friend.id && (
              <div className="bottom">
                <textarea rows="4" cols="3"  placeholder="Type your message..."></textarea>
                <button onClick={() => handleSendMessage(friend)}>Send</button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Friends;

