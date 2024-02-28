import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { createPortal } from 'react-dom';
import '../Profile/EditProfile.scss'
import { getProfileStatus, updateUserDetails } from '../../pages/Profile/ProfileSlice';
import { useSelector } from 'react-redux';
import { CircleLoader } from 'react-spinners';

const EditProfile = ({profile,closeModal}) => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [tagname, setTagname] = useState("");
    const dispatch = useDispatch();
    const status=useSelector(getProfileStatus)

    console.log(profile)
    // const{username,email,tagname}=profile
    const handleEdit = async (e) => {
        e.preventDefault();
        try {
             // Dispatch your action here
             console.log({ username, email,tagname });
             const response=await dispatch(updateUserDetails({ username, email,tagname }));
             console.log("response",response);

             closeModal()

        } catch (error) {
           console.log(error);
        }
    };

    return (
        <div>
        
            {createPortal(
                <div className='update-form-wrapper'>
                    <form className="update-form" onSubmit={handleEdit}>
                        <h3>Edit Profile</h3>
                        <label className="form-input" htmlFor="postTitle">username:
                            <input type="text" id="postTitle" name="postTitle" 
                                // value={profile.username}
                                onChange={(e) => setUsername(e.target.value)}
                            />
                        </label>
                        <label className="form-input" htmlFor="postContent">email:<br/>
                            <input type='text' id="postContent" name="postContent"
                                // value={profile.email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </label>

                        <label className="form-input" htmlFor="postContent">tagname:<br/>
                            <input type='text' id="postContent" name="postContent"
                                // value={profile.tagname}
                                onChange={(e) => setTagname(e.target.value)}
                            />
                        </label>
                        <button type="submit">Edit</button>
                    </form>
                </div>,
                document.body
            )}

            {status==='loading'&&<CircleLoader loading={true} size={150}/>  }
                
            
        </div>
       
    );
};

export default EditProfile;
