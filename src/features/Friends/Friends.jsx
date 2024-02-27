
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFriends, getFriends, getFriendsStatus, getFriendsError } from "../Friends/FriendsSlice";




// import avi from "../../assets/Avatar.png";

// import avi1 from "../../assets/Avatar (1).png";
// import avi2 from "../../assets/Avatar (2).png";
// import avi3 from "../../assets/Avatar (4).png";
// import avi4 from "../../assets/Avatar (5).png";
// import avi5 from "../../assets/Avatar (6).png";
// import avi6 from "../../assets/Avatar (7).png";
// import avi7 from "../../assets/Avatar (8).png";
// import avi8 from "../../assets/Avatar (6).png";
// import avi9 from "../../assets/Avatar (2).png";
// import "../Friends/Friends.scss";

// import verticalDots from "../../assets/vertical-dots.png"

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectAllFriends);
  const status = useSelector(getFriendsStatus);
  const error = useSelector(getFriendsError);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getFriends());
    }
  }, [status, dispatch]);

  const handleSendMessage = (friend) => {
    // Implement sending message functionality here
    console.log("Sending message to:", friend);
  };
  // const friend = [
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi1,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi2,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi3,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi4,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi5,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi6,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi7,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi8,
  //   },
  //   {
  //     name: "Angela Lee",
  //     handle: "anglee",
  //     dp: avi9,
  //   },
  // ];


    return (
      <div className="friends">
        {status === 'loading' && <div>Loading...</div>}
        {status === 'failed' && <div>Error: {error}</div>}
        {status === 'succeeded' &&
          friends.map((friend, index) => (
            <div className="friend" key={index}>
              <div className="top">
                <div className="img">
                  <img src={friend.dp} alt="no-dp" />
                </div>
                <div className="details">
                  <h4>{friend.name}</h4>
                  <p>@{friend.handle}</p>
                </div>
                <div className="action">
                  {selectedFriend === friend.id ? (
                    <button onClick={() => setSelectedFriend(null)}>Cancel</button>
                  ) : (
                    <button onClick={() => setSelectedFriend(friend.id)}>Message</button>
                  )}
                </div>
              </div>
              {selectedFriend === friend.id && (
                <div className="bottom">
                  <textarea rows="4" placeholder="Type your message..."></textarea>
                  <button onClick={() => handleSendMessage(friend)}>Send</button>
                </div>
              )}
            </div>
          ))}
      </div>
    );
};

export default Friends;
// import React from "react";
// import avi from "../../assets/Avatar.png";

// import avi1 from "../../assets/Avatar (1).png";
// import avi2 from "../../assets/Avatar (2).png";
// import avi3 from "../../assets/Avatar (4).png";
// import avi4 from "../../assets/Avatar (5).png";
// import avi5 from "../../assets/Avatar (6).png";
// import avi6 from "../../assets/Avatar (7).png";
// import avi7 from "../../assets/Avatar (8).png";
// import avi8 from "../../assets/Avatar (6).png";
// import avi9 from "../../assets/Avatar (2).png";
// import "../Friends/Friends.scss";

// // import verticalDots from "../../assets/vertical-dots.png"

// const Friends = () => {
//   const friends = [
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi1,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi2,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi3,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi4,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi5,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi6,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi7,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi8,
//     },
//     {
//       name: "Angela Lee",
//       handle: "anglee",
//       dp: avi9,
//     },
//   ];

//   return (
//     <div className="friends">
//       {friends &&
//         friends.map((friend, index) => {
//           return (
//             <div className="friend" key={index}>
//               <div className="top">
//                 <div className="img">
//                   <img src={friend.dp} alt="no-dp" />
//                 </div>
//                 <div className="details">
//                   <h4>{friend.name}</h4>
//                   <p>@{friend.handle}</p>
//                 </div>
//                 <div className="dots">
//                   {/* <img src={verticalDots} alt="" /> */}
//                 </div>
//               </div>
//               <div className="bottom">
//                 <button>Message</button>
//               </div>
//             </div>
//           );
//         })}
//     </div>
//   );
// };

// export default Friends;




import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectAllFriends, getFriends, getFriendsStatus, getFriendsError } from "./friendsSlice";

const Friends = () => {
  const dispatch = useDispatch();
  const friends = useSelector(selectAllFriends);
  const status = useSelector(getFriendsStatus);
  const error = useSelector(getFriendsError);
  const [selectedFriend, setSelectedFriend] = useState(null);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(getFriends());
    }
  }, [status, dispatch]);

  const handleSendMessage = (friend) => {
    // Implement sending message functionality here
    console.log("Sending message to:", friend);
  };

  return (
    <div className="friends">
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>Error: {error}</div>}
      {status === 'succeeded' &&
        friends.map((friend, index) => (
          <div className="friend" key={index}>
            <div className="top">
              <div className="img">
                <img src={friend.dp} alt="no-dp" />
              </div>
              <div className="details">
                <h4>{friend.name}</h4>
                <p>@{friend.handle}</p>
              </div>
              <div className="action">
                {selectedFriend === friend.id ? (
                  <button onClick={() => setSelectedFriend(null)}>Cancel</button>
                ) : (
                  <button onClick={() => setSelectedFriend(friend.id)}>Message</button>
                )}
              </div>
            </div>
            {selectedFriend === friend.id && (
              <div className="bottom">
                <textarea rows="4" placeholder="Type your message..."></textarea>
                <button onClick={() => handleSendMessage(friend)}>Send</button>
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default Friends;

