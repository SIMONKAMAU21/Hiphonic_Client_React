import '../Content/Content.scss'


import {Routes} from 'react-router-dom'
import { Route } from 'react-router-dom'
import Events from '../../pages/Events/Events'



const Content=()=>{
    return(
        
        <div className='content-container'>
          
            <Routes>
                 {/* <Route path='/profile' exact  element={<Profile/>} ></Route> */}
                 {/* <Route path='/friends' element={<Friends/>} ></Route> */}
                 {/* <Route path='/timeline'element={<Timeline/>} ></Route> */}
                 {/* <Route path='/photos' element={<Ph>}></Route> */}
                 {/* <Route path='/events' element={<Events/>}></Route>
                 <Route path='/groups' element={<Groups/>}></Route>
                 <Route path='/videos' element={<Videos/>}></Route> */}
        
            </Routes>
          

        </div>
        
    )
}

export default Content