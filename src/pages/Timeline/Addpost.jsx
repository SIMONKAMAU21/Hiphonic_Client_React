import React from 'react'
import Avatar from '../../assets/Avatar.png'
import './Addpost.scss'
import close from '../../assets/close.png'

const Addpost = ({closeEdit}) => {
   
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
        <div className="close" onClick={closeEdit}>
   <img src={close} />
        </div>
    </div>
        <div className="textarea">
        <textarea placeholder='what do you want to talk about'>

        </textarea>
        </div>
        <div className="footer">
         <div className="btn">
            <button>Post</button>
         </div>
        </div>

    </div>
 </div>
    
    </>
  )
}

export default Addpost