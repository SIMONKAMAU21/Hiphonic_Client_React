import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Addpost from '../../pages/Timeline/Addpost';
import './Middle-part-timeline.scss';
import Avatar from '../../assets/Avatar.png';
import mood from '../../assets/mood-smile.png';
import VIDEOS from '../../assets/VIDEOS.png';
import GROUPS from "../../assets/GROUPS.png";
import PHOTOS from "../../assets/PHOTOS.png";

function MiddleTimeline() {
  
  const [isEditOpen, setEditOpen] = useState(false);

  const openEdit = () => {
    setEditOpen(true);
  };

  const closeEdit = () => {
    setEditOpen(false);
  };

  return (
    <div className="middle1">
      <div className="nav4">
        <div className="side-profile">
          <img src={Avatar} alt="nopic" />
          <div className="side-text">
            <h4>Angela lee</h4>
            <p>@angalee</p>
          </div>
        </div>
        <div className="icon">
          <img src={mood} alt="" srcset="" />
          <p>public</p>
        </div>
      </div>
      <div className="input">
        <input type="text" placeholder="whats on your mind?" onClick={openEdit} />
        <div className="input-icons">
          <img src={mood} alt="nopic" />
       
          {isEditOpen &&
            ReactDOM.createPortal(
              <Addpost closeEdit={closeEdit} />, // Pass closeEdit function as prop
              document.body
            )}
        </div>
      </div>
      <div className="lower-input">
        <div className="images1">
          <img src={VIDEOS} alt="" srcset="" />
          <p>Live Video</p>
        </div>
        <div className="images1">
          <img src={PHOTOS} alt="" srcset="" />
          <p>Image/Video</p>
        </div>
        <div className="images1">
          <img src={GROUPS} alt="" srcset="" />
          <p>Activity</p>
        </div>
      </div>
    </div>
  );
}

export default MiddleTimeline;
