import calendar from "../../assets/calendar.png";
import "./Events.scss";
import dots from '../../assets/dots.png'
// import EventsHandler from '../../components/Eventscomponent/EventsHandler'
import EventsHandler from "../../components/Eventscomponent/EventsHandler";
import { useState } from "react";
import  ReactDOM  from 'react-dom';
import CreateEvent from "./createEvent";

const Events = () => {
  const [isEventOpen,setEventOpen] = useState(false);

const openEvent =()=>{
  ! setEventOpen(true)
};
const closeEvent = ()=>{
  setEventOpen(false)
}
console.log(isEventOpen)
// console.log(closeEvent())


  return (
    <div className="event-container">
      <div className="event">
        <div className="event-header">
          <h3>Find Event</h3>
        <div  onClick={openEvent}> 
         <img src={dots} alt="nopic" 
         
         />
        {isEventOpen &&
  ReactDOM.createPortal(
    <CreateEvent closeEvent={closeEvent} />,
    document.body
  )
}

          
          </div>
      

        </div>
            
        <div className="event-selection">
          <div className="selection-list">
            <ul>
              <li>
                <a href="#">Popular</a>
              </li>
              <li>
                <a href="#">For You</a>
              </li>
              <li>
                <a href="#">Nearest</a>
              </li>
              <li>
                <a href="#">Favorite</a>
              </li>
              <li>
                <a href="#">Registered</a>
              </li>
            </ul>
            <div className="event-date">
              <img src={calendar} alt="nopic" />
              <p>FEBRUARY</p>
            </div>
          </div>
        </div>

        <div className="event-grid">
          <EventsHandler />
        </div>
      </div>
    </div>
  );
};

export default Events;
