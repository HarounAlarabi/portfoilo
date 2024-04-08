import Icon from "../Icon";
import TechText from "./TechText";
import VideoBg from "./VideoBg";



function Technologies() {

    const techs = [ 'html5', 'css3', 'javascript', 'react', 'node-dot-js', 'sass', 'docker', 'git', 'amazonaws', 'postgresql', 'terraform' ];


    return (
        <div className="tech">
            <VideoBg />
            <TechText />
            <div className="tech__container">

                {techs.map((tech, index) => (
                    <figure className="tech__icons" key={index}>
                        <Icon icon={tech} className='tech__icons-icon' />
                    </figure>

                ))}
            </div>

        </div>
    );
}

export default Technologies;
