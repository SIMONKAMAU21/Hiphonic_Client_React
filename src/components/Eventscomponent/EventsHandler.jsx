
import map from "../../assets/40px.png"
import bigvideo1 from "../../assets/bigvideo1.png";
import "./EventsHandler.scss";
import { useGetAllEventsQuery } from "../../features/Events/EventsSlice";

const EventsHandler = () => {

const {data:events,isLoading,isFetching, isError} = useGetAllEventsQuery()
console.log(`Events: ${events}, isLoding:${isLoading},isFetching${isFetching}`)

  return (

    <div className="Eventscontainer">
      {(isLoading || isFetching) && <div>Loading...</div>}
      {(isError)&& <div>oooh noo an error occured..</div>}
      {console.log(events)}
      {events && events.map((event, index) => (
        <div className="event-card" key={index}>
          <div className="event-image">
            <img src={bigvideo1} alt={`Event icon ${index}`} />
          </div>
          <div className="by-date">
            <div className="title-by">
               <h5>{event.event_name}</h5> 
              <p> {event.event_description}</p>
            </div>
         
          <div>  <p>Date: {event.event_date}</p></div>
          </div>
          <div className="sk-txt">
         
          </div>
          <div className="event-footer">
            <div className="img-logo">
               <img src={map} alt="Map icon" /> 
              <div>
         
                <p>{event.location}</p> 
              </div>
            </div>
            <button>register</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EventsHandler;
