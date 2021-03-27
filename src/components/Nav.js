import React from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    return (
        <div className="navigation">
            <nav>
                <div className="head-nav">
                    <div className="logo">
                        <h1>My Team</h1>
                    </div>
                    <div className="links">
                        <ul className="nav-links">
                            <Link to="/">
                                <li>Home</li>
                            </Link>

                            <Link to="/AddUser">
                                <li>Add Contact</li>
                            </Link>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Nav
