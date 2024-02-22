import React from "react";
import search from "../../assets/search.png";
import video1 from "../../assets/Mask Group.png";
import playbtn from "../../assets/chevron-down.png";
import image1 from "../../assets/User1.png";
import image2 from "../../assets/User2.png";
import image3 from "../../assets/User3.png";
import post  from "../../assets/post 2.png";
import User1 from "../../assets/User1.png";
import User2 from "../../assets/User3.png";
import User4 from "../../assets/User4.png";
import User3 from "../../assets/User3.png";
import family from "../../assets/family.png";
import music from "../../assets/music.png";
import dots from "../../assets/dots.png"
import "./Videos.scss";
const Videos = () => {
  return (
    <div className="Video-container">
      <div className="see-more-videos">
        <div className="video1">
          <div className="video-header">
            <h2>Video</h2>
            <img src={search} alt="" />
          </div>
          <div className="text-in-categories">
            <h3>Categories To Explore</h3>
            <p>see all</p>
          </div>
          <div className="explore-categories">
            <div className="video-container">
              <div className="video12">
                <div className="image">
                  <img src={music} alt="" />
                </div>
                <div className="music-text">
                  <p>Music</p>
                  <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                  </div>
                </div>
                <button> See All</button>
              </div>
            </div>
            <div className="video-container">
              <div className="video12">
                <div className="image">
                  <img src={family} alt="" />
                </div>
                <div className="music-text">
                  <p>Music</p>
                  <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                  </div>
                </div>
                <button> See All</button>
              </div>
            </div>
            <div className="video-container">
              <div className="video12">
                <div className="image">
                  <img src={video1} alt="" />
                </div>
                <div className="music-text">
                  <p>family</p>
                  <div>
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                  </div>
                </div>
                <button> See All</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="minutes-ago-video">
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User1} alt="" />
            <div className="video-user-text">
              <p>Angela lee</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <img src={dots} alt="" srcset="" />
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        {/* /////////////////////////////////////////////////////////// */}
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User2} alt="" />
            <div className="video-user-text">
              <p>Peninah Lopex</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <img src={dots} alt="" srcset="" />
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>


        {/* ///////////////////////////////////////////////////// */}
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User3} alt="" />
            <div className="video-user-text">
              <p>Angela lee</p>
              <p>58 mins ago</p>
            </div>
          </div>
         <img src={dots} alt="" srcset="" />
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        {/* ////////////////////////////////////////////////////// */}
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User4} alt="" />
            <div className="video-user-text">
              <p>Mark Adams</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <img src={dots} alt="" srcset="" />
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
    
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        {/* ////////////////////////////////////////////////////////////// */}
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User1} alt="" />
            <div className="video-user-text">
              <p>Jeniffer Lopez</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <img src={dots} alt="" srcset="" />
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
        {/* //////////////////////////////////////////////////////// */}
        <div className="video-user-details">
          <div className="innter-txt">
            <img src={User1} alt="" />
            <div className="video-user-text">
              <p>Scot Atkins</p>
              <p>58 mins ago</p>
            </div>
          </div>
          <img src={dots} alt="" srcset="" />
        </div>
        <div className="video-ago-text">
          <p>
            The HAPPINESS you get when you serve your food to family members and
            their smile and your satisfaction is beyond. Do some experiment,
            feel the energy, share the happiness, fulfill your urge and finally
            relieve your stress.
          </p>
        </div>
        <div className="video-container">
          <img src={post} alt="" />
          <img src={playbtn} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Videos;
