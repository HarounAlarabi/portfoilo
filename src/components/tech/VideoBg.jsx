import video from "../../images/bgvideo-5.webm";

function VideoBg() {
    return (
        <div className="tech__bgvideo">
            <video autoPlay loop muted id="background-video" className="tech__bgvideo-content">
                <source src={video} type="video/webm" />
            </video>
        </div>
    );
}

export default VideoBg;
