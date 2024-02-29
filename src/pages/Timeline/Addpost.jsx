import React from 'react'
import Avatar from '../../assets/Avatar.png'
import './Addpost.scss'
import close from '../../assets/close.png'
import { useSelector } from 'react-redux'
import { getProfileError, getProfileStatus, getUserDetails, selectProfile } from '../Profile/ProfileSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { createPost } from '../../features/Posts/PostSlice'
// import { selectAllFriends } from '../../features/Friends/FriendsSlice'

const Addpost = ({ closeEdit }) => {
   const dispatch = useDispatch();
   const profile = useSelector(selectProfile);
   const status = useSelector(getProfileStatus);
   const error = useSelector(getProfileError);
   const user_id = localStorage.getItem('user_id');
   const post_id = localStorage.getItem('post_id')
   const [content, setContent] = useState('');
   const [image, setImage] = useState('');

   // const friends=useSelector(selectAllFriends)
   // const profile=useSelector(selectProfile);
   // console.log(profile)

   console.log("user oif in the fetch", user_id)

   useEffect(() => {
      if (status === 'idle') {
         dispatch(getUserDetails(user_id))
         //  dispatch(getFriends())
         console.log(profile)
      }


 },[status, dispatch])





 const handlePostSubmit =async(e)=>{
  e.preventDefault()

  console.log(image,content)

 const response= await dispatch(createPost({content,image}));
 console.log("response of post creation",response)
 
 const handlePostSubmit =async (e) => {
   e.preventDefault()

   console.log(image, content)

   const response = await dispatch(createPost({ content, image,post }));
   console.log("response of post creation", response)


 }
   
 console.log(image,content)
  return (
    <>


    <form action="" onSubmit={handlePostSubmit}>
    <div className="textarea">
        <input  placeholder='what do you want to talk about'
           onChange={(e)=>{setContent(e.target.value)}}
        
        />


        
        </div>
        <input type="text" placeholder='photo url'
           onChange={(e)=>{setImage(e.target.value)}}
        
        />
        <div className="footer">
         <div className="btn">
            <button type='submit'>Post</button>
         </div>
         </div>
      </form>


   
   
   
      
         <div className="container5">
            <div className="postholder">
               <div className="header">
                  <div className="side-profile">
                     <img src={Avatar} alt="nopic" />
                     <div className="side-text">
                        <h4>Angela lee</h4>
                        <p>@angalee</p>
                     </div>
                  </div>
                  <div className="close" onClick={closeEdit}>
                     <img src={close} />
                  </div>
               </div>
               <form action="" onSubmit={handlePostSubmit}>
                  <div className="textarea">
                     <input placeholder='what do you want to talk about'
                        onChange={(e) => { setContent(e.target.value) }}


                     />

                  </div>
                  <input type="text" placeholder='photo url'
                     onChange={(e) => { setImage(e.target.value) }}

                  />
                  <div className="footer">
                     <div className="btn">
                        <button type='submit'>Post</button>
                     </div>
                  </div>
               </form>


            </div>
         </div>

   </>
   )
}
}

export default Addpost