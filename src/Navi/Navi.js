import './Navi.css';

import { NavLink } from 'react-router-dom';

const Navi = () => (
    <div className="flexnav">
        <NavLink
            to="/"
        >Home</NavLink>
        <NavLink
            to="/shop"
        >Shop</NavLink>

    </div>
);

export default Navi;