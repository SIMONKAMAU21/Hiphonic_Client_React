import React, { useEffect } from "react";
import './Lower-part-timeline.scss'
import Avatar from "../../assets/Avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from '../../features/Posts/PostSlice';
import heart from '../../assets/heart.png';
import message from '../../assets/message.png';
import { useState } from "react";
import CommentPost from "../../pages/Timeline/commentPost";
import ReactDOM from "react-dom"; // Import ReactDOM here

const LowerTimeline = () => {
  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const [isCommentOpen, setCommentOpen] = useState(false);

  const openComment = () => {
    setCommentOpen(true);
  }

  const closeComment = () => {
    setCommentOpen(false);
  }

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <>
      <div className="wrap">
        <div className="side-profile">
          <img src={Avatar} alt="nopic" />
          <div className="side-text">
            <h4>Angela lee</h4>
            <p>@angalee</p>
          </div>
        </div>
        <div className="wrap-text">
          {Array.isArray(posts) && posts.map((post) => (
            <p key={post.id}>{post.content}</p>
          ))}
        </div>
        <div className="postholder1">
          <div className="images-3">
            {Array.isArray(posts) && posts.map((post) => (
              <img src={post.image} key={post.id} />
            ))}
          </div>
          <div className="wrap-likes">
            <div className="div3">
              <img src={heart} />
              <span>2.6k</span>
            </div>
            <div className="div3" >
              {isCommentOpen && ReactDOM.createPortal(
                <CommentPost closeComment={closeComment} />, document.body
              )}
              <img src={message}  onClick={openComment}/>
              <span> comments</span>
            </div>
            <div className="div3">
              <span>201 share</span>
            </div>
          </div>
          <div className="wrap-message">
            <div>
              <input type="text" placeholder="write your message..." />
            </div>
            <div>
              {/* Render message icon or button */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LowerTimeline;
