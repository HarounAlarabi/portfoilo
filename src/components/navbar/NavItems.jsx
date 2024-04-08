import { Link } from "react-router-dom";

function NavItems({ title, setActive, active, id, className }) {
    return (
        <li className={className}>
            <Link to="/" className='navbar__menu-item--link' onClick={() => {
                setActive("");
                window.scrollTo(0, 0);
            }}>
                {title}
            </Link>
        </li>

    );
}

export default NavItems;
