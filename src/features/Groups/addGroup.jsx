import React from 'react'
// import './addGroup.scss'
import '../../pages/Timeline/Addpost.scss'
import { useState } from 'react'
import {createGroup} from '../Groups/groupSlice'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'

const AddGroup = ({closeGroup}) => {
    const dispatch = useDispatch();
    const [groupName,setGroupName]=useState('');
    const [groupDescription, setGroupDescription]=useState('');
      

    useEffect(() => {
        dispatch(createGroup(localStorage.getItem('user_id')));
      }, [dispatch]);
      
    const handleCreateGroup=async(e)=>{
        e.preventDefault();
    const response = await dispatch (createGroup({group_name:groupName,group_description:groupDescription}));
    console.log("response from group creation", response)
        

    }


    

  return (
    <>
 

 <form action="" onSubmit={handleCreateGroup}>
    <div className="textarea">
        <input  placeholder='group name'
           onChange={(e)=>{setGroupName(e.target.value)}}
        
        />


        
        </div>
        <input type="text" placeholder='group description'
           onChange={(e)=>{setGroupDescription(e.target.value)}}
        
        />
        <div className="footer">
         <div className="btn">
            <button type='submit'>Create Group</button>
         </div>
         </div>
      </form>


   
   
   
      
    
    </>
  )
}

export default AddGroup