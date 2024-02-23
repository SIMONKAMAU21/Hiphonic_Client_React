
// import map from "../assets/40px.png";
import map from "../../assets/40px.png"
// import user3 from "../assets/user3.png";
import user3 from "../../assets/User3.png"
import calendar from "../../assets/calendar.png";
// import calendar from "../assets/calendar.png";
import Avatar from "../../assets/Avatar(8).png";
import Avatar1 from "../../assets/Avatar(9).png";
import pot from "../../assets/pot.png";
import bigvideo1 from "../../assets/bigvideo1.png";
import bigvideo2 from "../../assets/bigvideo2.png";
import bigvideo from "../../assets/bigvideo.png";
import "./EventsHandler.scss";

const EventsHandler = () => {
  const formatDate = (date) => {
    return date.toDateString();
  };

  const eventdisplayitems = [
    {
      icon: bigvideo1,
      title: "National Seminar",
      by: " By:Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: user3,
      goingtext: "+2k are going",
      mapicon: map,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
    },
    {
      icon: pot,
      title: "Potery Workshop",
      by: " By: Simon Kamau",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: Avatar,
      goingtext: "+3k are going",
      mapicon: map,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
    },

    {
      icon: bigvideo,
      title: "National Seminar",
      by: "By: Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs:Avatar1,
      goingtext: "+2k are going",
      mapicon: map,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
    },

    {
      icon: bigvideo2,
      title: "Potery Workshop",
      by: " By:Emma Stone",
      dateicon: calendar,
      datetext: formatDate(new Date()),
      viewrs: user3,
      goingtext: "+3k are going",
      mapicon: map,
      address1: "4517 Washington Ave. Manchester,",
      address2: "Kentucky 39495",
      register: "Register",
    },
  ];

  return (
    <div className="Eventscontainer">
      {eventdisplayitems.map((item, index) => (
        <div className="event-card" key={index}>
          <div className="event-image">
            <img src={item.icon} alt={`Event icon ${index}`} />
          </div>
          <div className="by-date">
            <div className="title-by">
              <h5>{item.title}</h5>
              <p> {item.by}</p>
            </div>
            <img src={item.dateicon} alt="Calendar icon" />
            <p>Date: {formatDate(new Date())}</p>
          </div>
          <div className="sk-txt">
            <img src={item.viewrs} alt="Viewers icon" />
            <img src={item.viewrs} alt="Viewers icon" />
            <img src={item.viewrs} alt="Viewers icon" />
            <p>{item.goingtext}</p>
          </div>
          <div className="event-footer">
            <div className="img-logo">
              <img src={item.mapicon} alt="Map icon" />
              <div>
                <p>{item.address1}</p>
                <p>{item.address2}</p>
              </div>
            </div>
            <button>{item.register}</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsHandler;
