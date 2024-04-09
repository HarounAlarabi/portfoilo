// import { Link } from "react-router-dom";

// function NavItems({ title, setActive, active, id, className }) {
//     return (
//         <li className={className}>
//             <Link to="/" className='navbar__menu-item--link' onClick={() => {
//                 setActive("");
//                 window.scrollTo(0, 0);
//             }}>
//                 {title}
//             </Link>
//         </li>

//     );
// }

// export default NavItems;

import React from "react";

function NavItems({ title, sectionId, className }) {
    return (
        <li className={className}>
            <a href={`#${sectionId}`} className='navbar__menu-item--link'>
                {title}
            </a>
        </li>
    );
}

export default NavItems;

