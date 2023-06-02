import { Link, Outlet } from "react-router-dom";
import { GrReactjs } from 'react-icons/gr'
import { GoHome } from 'react-icons/go'

function Header() {
    return (<>
        <nav className="navbar navbar-inverse" >
            <div className="container-fluid" >
                <Link className="navbar-brand">Welcome <GrReactjs /></Link>
                <ul className="nav navbar-nav navbar-right">
                    <li className="active">
                        <Link className="nav-link" to="/React_Test" >
                            <GoHome size="20px" />
                        </Link>
                    </li>
                    <li><Link to="/React_Test/about">ABOUT</Link></li>
                    <li><Link to="/React_Test/projects">PROJECTS</Link></li>
                    <li><Link to="/React_Test/contacts">CONTACTS</Link></li>
                    <li><Link to="/React_Test/skills">SKILLS</Link></li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header