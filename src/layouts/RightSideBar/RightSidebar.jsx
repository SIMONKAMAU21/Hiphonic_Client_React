import '../RightSideBar/RightSideBar.scss'
import Shortcuts from "../../components/Shortcuts/Shortcuts"
import Contacts from '../../components/Contact/Contact'
import Groups from '../../components/Groups/Groups'


const RightSidebar=()=>{
    return(
        <div className='right-side-bar'>
       
         <Shortcuts/>
         <Contacts/>
         <Groups/>
        
        </div>
    )
}

export default RightSidebar