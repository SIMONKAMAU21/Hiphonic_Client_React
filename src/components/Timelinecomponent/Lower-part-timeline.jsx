import React, { useEffect, useState } from "react";
import "./Lower-part-timeline.scss";
import Avatar from "../../assets/Avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { getPosts, selectPosts } from "../../features/Posts/PostSlice";
import heart from "../../assets/heart.png";
import mood from '../../assets/mood-smile.png'
import { CiPaperplane } from "react-icons/ci";
import { AiFillMessage } from "react-icons/ai";
import { FaShareAlt } from "react-icons/fa";
import {useAddCommentMutation} from "../../features/comments/commentSlice"

const LowerTimeline = () => {

const [comment ,setComment]= useState('')
const [addComment]=useAddCommentMutation()
const handleAddComment=()=>{
  addComment({postId:posts.id,comment})
}


  const dispatch = useDispatch();
  const posts = useSelector(selectPosts);

  const [currentDate, setCurrentDate] = useState(new Date().toLocaleDateString());
const[likes,setLikes]= useState(0)
const incrementLikes= ()=>{
  setLikes(likes + 1);
}
  useEffect(() => {
    dispatch(getPosts());
    // Update current date every midnight
    const intervalId = setInterval(() => {
      setCurrentDate(new Date().toLocaleDateString());
    }, 1000 * 60 * 60 * 24); // Update once per day
    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, [dispatch]);

  return (
    <>
      <div className="wrap">
        {Array.isArray(posts) &&
          posts.map((post) => (
            <div className="post" key={post.id}>
              <div className="side-profile">
                <img src={Avatar} alt="nopic" />

                <div className="side-text">
                  <h4>Angela lee</h4>
                  <p>{currentDate}</p>
                </div>
              </div>
              <div className="wrap-text">
                <p>{post.content}</p>
                <img src={post.image} alt="nopic" />
              </div>
              <div className="wrap-likes">
                <div className="div3">
                  <img src={heart} alt="heart"onClick={incrementLikes} />
                  <span>{likes} </span>
                </div>
                <div className="div3">
                <AiFillMessage fontSize="26px" color="blue" />
                  <span> comments</span>
                </div>
                <div className="div3">
                <FaShareAlt fontSize="26px"/>
                  <span>201 share</span>
                </div>
              </div>
              <div className="wrap-message">
                <div>
                  <input type="text" placeholder="write your comment..." 
                  value={comment}
                  onChange={(e)=>setComment(e.target.value)}
                  
                  />
                </div>
                <CiPaperplane fontSize="26px" color="blue" onClick={handleAddComment} />
                <div>
                  <img src={mood} alt="mood" />
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default LowerTimeline;
