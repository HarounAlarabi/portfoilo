import CopyRight from "./CopyRight";
import Icon from "../Icon";
import { Link } from "react-router-dom";

function Footer() {

    return (
        <div className="footer" id='contact'>
            <Link to='https://www.githup.com/harounalarabi'>
                <Icon icon="github" className='footer__icon' />
            </Link>
            <Link to='https://www.linkedin.com/in/haroun-alarabi-abb0b4247/'>
                <Icon icon="linkedin" className='footer__icon' />
            </Link>
            <a href='mailto:alarabiharoun@gmail.com'>
                <Icon icon="gmail" className='footer__icon' />
            </a>
            <CopyRight />
        </div>
    );
}

export default Footer;
