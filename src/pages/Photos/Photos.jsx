import React from "react";
// import PhotoImages from "./PhotoImages";
import boxes from "../../assets/unsplash__C5zsV_p-YI.png"
import persons from "../../assets/unsplash__KaMTEmJnxY.png";
import star from "../../assets/unsplash_c1rOy44wuts.png";
import playbtn from "../../assets/unsplash_c1rOy44wuts.png";
import toolbox from "../../assets/unsplash_qC2n6RQU4Vw.png";
import './Photos.scss'
import { PuffLoader } from "react-spinners";
import { useGetPhotosQuery } from "../../features/photos/photosApi";
import { useEffect } from "react";
import { useState } from "react";
import EditProfile from "../../features/Profile/EditProfile";
import UploadPhoto from "./UploadPhoto";

const Photos = () => {
  const{
    data:photos,
    isLoading,
    isFetching,
    isError,
    error

  }=useGetPhotosQuery()


  useEffect(() => {
        
        console.log("get narray", photos);
      }, [photos]);

      const [showUploadModal,setShowUploadModal]=useState(false);

      const toggleUploadModal=()=>{
          console.log(showUploadModal)
          setShowUploadModal(!showUploadModal)
          
      }
   console.log(photos)



  
  return (
<>
    {/* <div className='status-loader-content'>
           <PuffLoader loading={true} size={250} /> 
           <p>Please wait........</p>
          </div> */}
    <div className="Photos-conTainer">
      {/* <button className="button">Upload</button> */}
      <button type="button" class='edit-btn' onClick={toggleUploadModal} >{showUploadModal?'Close':'Upload'}</button>
                {
                    showUploadModal &&(<UploadPhoto  closeModal={toggleUploadModal}/>)
                }
      
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
        {
          photos&&photos.map((photo,index)=>{
              const{photo_url}=photo
              return(
                <div key={index}>
                    <img src={photo_url} alt="" />
                </div>
              )
          })
        }
        <div >

        </div>

      </div>
    </div>
    </>
  );
};

export default Photos;
