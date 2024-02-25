import React from "react";
import './Lower-part-timeline.scss'
import Avatar from "../../assets/Avatar.png";
import img1 from "../../assets/img1.png";
import img from "../../assets/img.png";
import book from "../../assets/book.png";
import heart from "../../assets/heart.png";
import message from "../../assets/message.png";
import share from "../../assets/share.png";
import icon  from '../../assets/icon.png'

const LowerTimeline = () => {
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
          <p>
            Here are some photography works that i made on weekend with <br />
            some of my friends,happy to that!
          </p>
        </div>
        <div className="images-3">
          <div>
            <img src={img} />
          </div>
          <div>
            <img src={img1} />
          </div>
          <div>
            <img src={book} />
          </div>
        </div>
        <div className="wrap-likes">
          <div className="div3">
            <img src={heart} alt="nopic" srcset="" />
            <span>2.6k</span>
          </div>
          <div className="div3">
            <img src={message} alt="nopic" srcset="" />
            <span>297 comments</span>
          </div>
          <div className="div3">
            <img src={share} alt="nopic" />
            <span>201 share</span>
          </div>
        </div>
        <div className="wrap-message">

        <div>
          <input type="text" placeholder="write your message..." />
        </div>
        <div>
          <img src={icon}  />
          {/* <img src={mood}  /> */}
        </div>
        </div>
      </div>
    </>
  );
};

export default LowerTimeline;
