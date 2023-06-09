import { Link, Outlet } from "react-router-dom";
import { GrReactjs } from 'react-icons/gr'
import { GoHome, GoProject } from 'react-icons/go'
import { BiUserPin } from 'react-icons/bi'
import { GiSkills } from 'react-icons/gi'
import { ImEnvelop } from 'react-icons/im'
import './Header.css';
import { useState } from "react";

function Header() {

    return (<>
        <nav className="navbar navbar-inverse sticky-top">
            <div className="container-fluid" >
                <Link className="navbar-brand">Welcome <GrReactjs /></Link>
                <ul className="nav navbar-nav navbar-right" >
                    <li className="active">
                        <Link className="nav-link" to="/React_Test" >
                            <GoHome size="20px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/React_Test/about">
                            <BiUserPin size="20px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/React_Test/projects">
                            <GoProject size="20px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/React_Test/contacts">
                            <ImEnvelop size="20px" />
                        </Link>
                    </li>
                    <li>
                        <Link to="/React_Test/skills">
                            <GiSkills size='20px' />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
        <Outlet />
    </>)
}
export default Header