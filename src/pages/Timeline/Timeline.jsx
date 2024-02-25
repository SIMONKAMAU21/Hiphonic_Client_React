import "./Timeline.scss";
import LowerTimeline from '../../components/Timelinecomponent/Lower-part-timeline';
import MiddleTimeline from "../../components/Timelinecomponent/Middle-part-timeline";
import UpperTimeline from "../../components/Timelinecomponent/Upper-timeline"

const Timeline = () => {
  return (
    <div className="timeline-page">
      <div className="upper-timeline">
        <UpperTimeline />
      </div>
      <div className="middle-timeline">
        <MiddleTimeline />
        <LowerTimeline />
      </div>
    </div>
  );
};
export default Timeline;
