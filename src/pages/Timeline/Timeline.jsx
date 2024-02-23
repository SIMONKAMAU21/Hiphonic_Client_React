import "./Timeline.scss";
import Upperdom from "../Components/Upper-timeline";
import Upperapp from "../Components/Upperapp";
import Lowerapp from "../Components/Lowerapp";

const Timeline = () => {
  return (
    <div className="timeline-page">
      <div className="upper-timeline">
        <Upperdom />
      </div>
      <div className="middle-timeline">
        <Upperapp />
        <Lowerapp />
      </div>
    </div>
  );
};
export default Timeline;
