import React from "react";
// import PhotoImages from "./PhotoImages";
import boxes from "../../assets/unsplash__C5zsV_p-YI.png"
import persons from "../../assets/unsplash__KaMTEmJnxY.png";
import star from "../../assets/unsplash_c1rOy44wuts.png";
import playbtn from "../../assets/unsplash_c1rOy44wuts.png";
import toolbox from "../../assets/unsplash_qC2n6RQU4Vw.png";
import './Photos.scss'

const Photos = () => {
  return (
    <div className="Photos-conTainer">
      <div className="photo-cont-header">
        <h3>Your Photos</h3>
        <p>. . . </p>
      </div>

      <div className="photo-selector">
        <div className="selector-list">
          <ul>
            <li>
              <a href="#">Photos About You</a>
            </li>
            <li>
              <a href="#">Your Photos</a>
            </li>
            <li>
              <a href="#">Album</a>
            </li>
          </ul>
        </div>
        <div className="num-photos">
          <h4>Total Photos</h4>
          <p>42 photos about you</p>
        </div>
      </div>
      <div className="photo-images12">
      <img src={persons} alt="" /> 
      <img src={boxes} alt="" />
      <img src={star} alt="" />
      <img src={boxes} alt="" />
      <img src={persons} alt="" />
      <img src={boxes} alt="" />
      <img src={persons} alt="" />
      <img src={star} alt="" />
      <img src={persons} alt="" />
      <img src={star} alt="" />
      <img src={persons} alt="" />
      <img src={playbtn} alt="" />
      <img src={toolbox} alt="" />
      <img src={toolbox} alt="" />
      <img src={toolbox} alt="" />

        {/* <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" />
        <img src={boxes} alt="" />
        <img src={persons} alt="" />
        <img src={star} alt="" />
        <img src={playbtn} alt="" />
        <img src={toolbox} alt="" /> */}
      </div>
    </div>
  );
};

export default Photos;
