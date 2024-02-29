import React from 'react'
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import { useState } from 'react';
import { useUploadPhotoMutation } from '../../features/photos/photosApi';


const UploadPhoto = ({closeModal}) => {

    const [photoUrl,setPhotoUrl]=useState('')
    const [uploadPhoto,{isLoading}]=useUploadPhotoMutation()

    const handleUploadPhoto=async(e)=>{
        e.preventDefault();
        console.log(photoUrl);
        const response=await uploadPhoto({photo_url:photoUrl}).unwrap()
        console.log(response)
        
       closeModal()
        


    }
    

    

  return (
<div>
            {createPortal(
                <div className='update-form-wrapper'>
                    <form className="update-form" onSubmit={handleUploadPhoto}>
                        <h3>Edit post</h3>
                        <label className="form-input" htmlFor="postTitle">Image url:
                            <input type="text" id="postTitle" name="postTitle" 
                                value={photoUrl}
                                onChange={e=>{setPhotoUrl(e.target.value)}}
                            />
                        </label>
                      
                        <button type="submit">Upload</button>
                    </form>
                </div>,
                document.body
            )}
        </div>
    );
};

export default UploadPhoto