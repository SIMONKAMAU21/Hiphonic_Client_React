import React from 'react'
import "../ContentLayout/ContentLayout.scss"
import Content from "../../layouts/Content/Content"
import RightSidebar from "../../layouts/RightSideBar/RightSidebar"
import SideMenu from "../../layouts/SideMenu/SideMenu"
import Notification from "../../pages/Notification/Notification"
import { useReducer } from "react"
import AppReducer, { initialState } from "../../reducers/AppReducers"
import { Routes } from "react-router-dom"
import { Route } from "react-router-dom"

const ContentLayout=()=>{
  
const [state,dispatch]=useReducer(AppReducer,initialState);

const handleNavigationClose=()=>{

       dispatch({type:'SET_NAVIGATION_OPEN',payload:false});
}
if(state.isNavigationOpen){
    console.log("state of teh modal is open")
}



    return (
        
        <div className="content-wrapper">
            {/* <p>Content-layput works</p> */}
            <SideMenu/>
                <Content/>
            <RightSidebar/>
            
          <div>
                {state.isNavigationOpen &&(
                    <Notification handleOnClose={handleNavigationClose}/>
                )}
            </div> 

        </div>
    )
}

export default ContentLayout