import { NavLink } from 'react-router';

function Navigation() {
    return (
        <>
            <div className="navbar bg-base-100 shadow-sm">
                <div className="navbar-start">
                    <div className="lg:hidden">
                        <NavLink className="text-lg" to="/about">Mega Man Dooms Day</NavLink>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <NavLink className="text-xl" to="/">Mega Man Dooms Day</NavLink>
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