import '../Content/Content.scss'


import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Friends from '../../pages/Friends/Friends'
import Videos from '../../pages/videos/Videos'
import Groups from '../../pages/Groups/Groups'



const Content=()=>{
    return(
        
        <div className='content-container'>
          
            <Routes>
                 {/* <Route path='/profile' exact  element={<Profil/>} ></Route>
                 <Route path='/friends' element={<F>} ></Route>
                 <Route path='/timeline'element={<Timeline/>} ></Route>
                 <Route path='/photos' element={<Ph>}></Route>
    <Route path='/events' element={<Events/>}></Route>*/}
    <Route path='/groups' element={<Groups/>}></Route>
                 <Route path='/videos' element={<Videos/>}></Route>  
                 <Route path='/friends' element={<Friends/>}></Route>
        
            </Routes>
          

        </div>
        
    )
}

export default Content