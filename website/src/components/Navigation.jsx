import { NavLink } from 'react-router';

function Navigation() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div>
                        <NavLink className="text-lg ml-3" to="/">Mega Man Dooms Day</NavLink>
                    </div>
                </div>
                <div className="navbar-center">
                </div>
                <div className="navbar-end">
                    <ul className="menu menu-horizontal px-1">
                        <li><NavLink to="/about">About</NavLink></li>
                        <li><NavLink to="/info">Info</NavLink></li>
                    </ul>
                </div>
            </div>
        </>
    );
}

export default Navigation