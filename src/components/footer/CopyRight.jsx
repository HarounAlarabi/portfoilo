function CopyRight() {
    const year = new Date().getFullYear();
    return (
        <div className='rights' >
            <p>
                <span className="copyRight">© {year}</span>
                <span className="copyRight">  All Rights Reserved for H.</span>
            </p>
        </div>
    );
}

export default CopyRight;
