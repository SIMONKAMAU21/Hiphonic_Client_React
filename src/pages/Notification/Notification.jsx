import React from "react";
import "../Notification/Notification.scss";

import { useState } from "react";
import { useReducer } from "react";
import AppReducer, { initialState } from "../../reducers/AppReducers";
import Avatar from "../../assets/Avatar.png";
import { useGetNotificationsQuery } from "../../features/Notifications/NotificationAPi";
import { useEffect } from "react";
import { ClipLoader } from "react-spinners";

const Notification = ({ handleOnClose, style }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  const {
    data: notifications,
    error,
    isLoading,
    isError,
    isFetching,
  } = useGetNotificationsQuery();
  const [notificationArray, setNotificaton] = useState([]);

  useEffect(() => {
    //  const response= getNotifications()
    console.log("get notifications array", notifications);
  }, [notifications]);

  return (
    <>
      {isError && <div>Error: {error.data}</div>}
      {isLoading ||
        (isFetching && <ClipLoader color="#000" loading={true} size={150} />)}
      <div className="notification-wrapper" style={style}>
        <div className="notification-content-container">
          <div className="title-bar">
            <p className="notification-title"> Notification</p>
            <button type="button" onClick={handleOnClose}>
              x
            </button>
          </div>

          <div className="notification-menu">
            <span>All Notifications</span>
            <span>Unread</span>
          </div>
          <h3>Today</h3>
          <div className="notifications-content">
            {notifications &&
              notifications.map((item, index) => {
                return (
                  <div className="notifications" key={index}>
                    <div className="user-wrapper">
                      <img src={Avatar} alt="" />
                      <div className="names">
                        <span className="username">{item.username}</span>
                        <span>Liked a post </span>
                      </div>
                    </div>
                    <span className="time">{item.notification_time}</span>
                   <span class="icon">🔍</span>
                      
                    
                
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Notification;
