import React from 'react'
import close from '../../assets/close.png'
import Avatar from '../../assets/Avatar.png'
import './Addpost.scss'
import './commentPost.scss'
import { useSelector } from 'react-redux'
import { getProfileError, getProfileStatus, getUserDetails, selectProfile } from '../Profile/ProfileSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { useState } from 'react'
import { createcomment } from '../../features/comments/commentSlice'

const CommentPost = ({ closeComment }) => {

   const dispatch = useDispatch();
   const profile = useSelector(selectProfile);
   const status = useSelector(getProfileStatus);
   const error = useSelector(getProfileError);
   const user_id = localStorage.getItem('user_id');
   const [content, setContent] = useState('');
   // const [image, setImage] = useState('');



   console.log("user oif in the fetch", user_id)

   useEffect(() => {
      if (status === 'idle') {
         dispatch(getUserDetails(user_id))
         console.log(profile)
      }

   }, [status, dispatch])

   const handleCommentSubmit = async (e) => {
      e.preventDefault()

      console.log( content)

      const response = await dispatch(createcomment({content}));
      console.log("response of post creation", response)

   }
   console.log( content)
   return (
      <>
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
                  <div className="close" onClick={closeComment}>
                     <img src={close} />
                  </div>
               </div>

               <form action="" onSubmit={handleCommentSubmit}>
                  <div className="commentArea">
                     <input placeholder='what do you want to talk about'
                        onChange={(e) => { setContent(e.target.value) }}

                     />

                  </div>

                  <div className="footer">
                     <div className="btne">
                        <button type='submit'>comment</button>
                     </div>
                  </div>
               </form>


            </div>
         </div>

      </>
   )
}



export default CommentPost