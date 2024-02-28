// Friends.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import '../Friends/Friends.scss';
import {
  selectAllFriends,
  getFriends,
  getFriendsStatus,
  getFriendsError,
  sendMessage,
} from "../Friends/FriendsSlice";
import Avatar from '../../assets/Avatar.png';

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectAllFriends);
  const status = useSelector(getFriendsStatus);
  const error = useSelector(getFriendsError);
  const [selectedFriend, setSelectedFriend] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const [typedMessage, setTypedMessage] = useState('');

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getFriends());
    }
  }, [status, dispatch]);

  const handleSendMessage = (friend) => {
    setSelectedFriend(friend);
    localStorage.setItem('receiver_id', friend.user_id);
    setModalOpen(true);
  };

  const handleModalClose = () => {
    setSelectedFriend(null);
    setModalOpen(false);
  };

  const handleSendClick = async () => {
    const receiver_id = localStorage.getItem('receiver_id');
    if (typedMessage !== '') {
      await dispatch(sendMessage({
        receiver_id: receiver_id,
        content: typedMessage
      }));
      setTypedMessage('');
      setModalOpen(false);
      setSelectedFriend(null);
    }
  };

  return (
    <div className="friends">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' && 
          friends&&      
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
                {selectedFriend && selectedFriend.id === friend.id ? (
                  <>
                    <button onClick={handleSendClick}>Send</button>
                    <button onClick={handleModalClose}>Cancel</button>
                  </>
                ) : (
                  <button onClick={() => handleSendMessage(friend)}>Message</button>
                )}
              </div>
            </div>
            {selectedFriend && selectedFriend.id === friend.id && (
              <Modal
                isOpen={isModalOpen}
                onRequestClose={handleModalClose}
                contentLabel="Message Modal"
                style={{
                  content: {
                    width: '500px',
                    height: '300px',
                    margin: 'auto',
                    borderRadius: '8px',
                    outline: 'none',
                    padding: '20px',
                    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
                  },
                  overlay: {
                    backgroundColor: 'rgba(0, 0, 0, 0.5)',
                  },
                }}
              >
                <div className="bottom">
                  <textarea
                    style={{
                      width: '100%',
                      height: '250px',
                      boxSizing: 'border-box',
                    }}
                    placeholder="Type your message..."
                    value={typedMessage}
                    onChange={(e) => setTypedMessage(e.target.value)}
                  ></textarea>
                  <div className="modal-buttons">
                    <button onClick={handleSendClick}>Send</button>
                    <button onClick={handleModalClose}>Cancel</button>
                  </div>
                </div>
              </Modal>
            )}
          </div>
        ))}
    </div>
  );
};

export default Friends;
