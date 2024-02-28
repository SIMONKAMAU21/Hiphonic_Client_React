import React from 'react'
import '../../components/PostDiv/PostDiv.scss'
import live_video_icon from '../../assets/videocam-outline.svg'
import live_video_icon2 from '../../assets/videocam-outline.svg'
import actvity from '../../assets/videocam-outline.svg'
import Avatar from '../../assets/Avatar.png'


export const PostArray = [
    {
        postImage: live_video_icon,
        imageDetails: 'Live Video'
    },
    {
        postImage: live_video_icon2,
        imageDetails: 'Images/Video'
    },
    {
        postImage: actvity,
        imageDetails: 'Activity'
    }

]





const PostDiv = ({ posts }) => {



    return (
        <div className="post-container">
            <div className='profile-pic-input'>
                <img src={Avatar} alt="" />
                <input type="text" placeholder='What is in your mind' />
            </div>
            <div className="actions">
                {
                    posts &&
                    posts.map((item, index) => {

                        return (<>  <div className='live-video' key={index}>
                            <p>{item.content} </p>
                            <span>{item.id}</span>
                            <div className='profile-pic-input'>


                            </div>
                        </div>


                        </>



                        )
                    })
                }
            </div>
        </div>
    )
}

export default PostDiv