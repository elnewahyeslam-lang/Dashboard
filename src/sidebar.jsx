import {Link} from'react-router-dom'
import {LuLayoutDashboard,LuFolderKanban} from'react-icons/lu'
function Sidebar() {
    return(
        <aside className="aside">
            <div className="head-aside">
               <h1 className='h1'>Task Flow</h1>
               <p>Smart Task Manager</p>
            </div>
            <nav className="nav-aside">
                <ul>
                    <li >
                        < Link className='icons' to="/">
                        <LuLayoutDashboard/> Dashboard 
                        </ Link>
                    </li>
                    <li >
                        < Link className='icons' to="/Projects">
                        <LuFolderKanban/> Projects 
                        </Link>
                    </li>
                </ul>
            </nav>
        </aside>
    )
    
}
export default Sidebar