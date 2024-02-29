import "./Upper-timeline.scss";
import Avatar7 from "../../assets/Avatar(9).png";
import Avatar6 from "../../assets/Avatar(14).png";
import Avatar5 from "../../assets/Avatar(15).png";
import Avatar1 from "../../assets/Avatar(13).png";
import Avatar2 from "../../assets/Avatar(10).png";
// import Avatar3 from "../../assets/Avatar(11).png";
import Avatar4 from "../../assets/Avatar(12).png";

const UpperTimeline = () => {
  const Timeline = [
    {
      name: "angleeee",
      IMAGE: Avatar1,
    },
    {
      name: "angleeee",
      IMAGE: Avatar7,
    },
    {
      name: "angleeee",
      IMAGE: Avatar2,
    },
    {
      name: "angleeee",
      IMAGE: Avatar2,
    },

    {
      name: "angleeee",
      IMAGE: Avatar3,
    },
    {
      name: "angleeee",
      IMAGE: Avatar4,
    },
    {
      name: "angleeee",
      IMAGE: Avatar5,
    },
    {
      name: "angleeee",
      IMAGE: Avatar6,
    },
    {
      name: "angleeee",
      IMAGE: Avatar3,
    },
  ];
  return (
    <div className="plate">
      <div className="header">
        <h5>Your Timeline</h5>
      </div>
      <div className="chini">
        {Timeline &&
          Timeline.map((item, index) => {
            return (
              <div className="Timeline1">
                <div className="Timeline-left">
                  <div>
                    <img src={item.IMAGE} alt={item.name} />
                  </div>
                  <div className="name"> {item.name}</div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
};
export default UpperTimeline;
