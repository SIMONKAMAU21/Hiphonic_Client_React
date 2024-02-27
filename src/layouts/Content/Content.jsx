import '../Content/Content.scss'


import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Friends from '../../features/Friends/Friends'
import Videos from '../../pages/videos/Videos'
import Groups from '../../features/Groups/Groups'
import Photos from '../../pages/Photos/Photos'
import Events from '../../pages/Events/Events'

import Timeline from '../../pages/Timeline/Timeline'
import Profile from '../../pages/Profile/Profile'


const Content=()=>{
    return (
      <div className="content-container">
        <Routes>
          <Route path="/profile" exact element={<Profile/>}></Route>
          <Route path="/timeline" element={<Timeline />}></Route>
          <Route path="/events" element={<Events />}></Route>
          <Route path="/photos" element={<Photos />}></Route>
          <Route path="/groups" element={<Groups />}></Route>
          <Route path="/videos" element={<Videos />}></Route>
          <Route path="/friends" element={<Friends />}></Route>
        </Routes>
      </div>
    );
}

export default Content