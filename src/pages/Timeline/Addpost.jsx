import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '../../assets/Avatar.png';
import close from '../../assets/close.png';
import { getUserDetails, selectProfile } from '../Profile/ProfileSlice';
import { createPost } from '../../features/Posts/PostSlice';
import './Addpost.scss';

const Addpost = ({ closeEdit }) => {
  const dispatch = useDispatch();
  const profile = useSelector(selectProfile);
  const [content, setContent] = useState('');
  const [image, setImage] = useState('');

  useEffect(() => {
    dispatch(getUserDetails(localStorage.getItem('user_id')));
  }, [dispatch]);

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    console.log(image, content);
    const response = await dispatch(createPost({ content, image }));
    console.log("response of post creation", response);
    // Handle response or errors here
  };

  return (
    <>
    <div className="post-wrap">  
        <div className="simon">

        <div className="header">
          <div className="side-profile">
            <img src={Avatar} alt="nopic" />
            <div className="side-text">
              <h4>Angela lee</h4>
              <p>@angalee</p>
            </div>
          </div>
          <div className="close" onClick={closeEdit}>
            <img src={close} alt="close" />
          </div>
        </div>


        <form onSubmit={handlePostSubmit}>

          <div className="textarea">
            <input
              placeholder="What do you want to talk about..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

          <input
            type="text"
            placeholder="Photo URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            />
            </div>

          <div className="footer">
            <div className="btn">
              <button type="submit">Post</button>
            </div>
          </div>

        </form>
      </div>

    </div>
</>
  );
};
export default Addpost;
