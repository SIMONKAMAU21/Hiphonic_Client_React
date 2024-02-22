import calendar from "../../assets/calendar.png";
import "./Events.scss";
import dots from '../../assets/dots.png'
import EventsHandler from '../../components/Eventhandler/EventsHandler'

const Events = () => {
  return (
    <div className="event-container">
      <div className="event">
        <div className="event-header">
          <h3>Find Event</h3>
          <img src={dots} alt="nopic"  />
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
