import projectlogo from "../assets/project-logo.png"


function Portfolio() {
    return(
        <div className="portfolio">
            <div className="title">
                <h2>Portfolio.</h2>
            </div>

            <div className="cards">
                <div className="card">
                    <img src={projectlogo} alt="project logo" className="card-logo" />
                    <hr />

                    <h2 className="project-title">Sheet Recognizer</h2>

                    <div className="tools-used">
                        <p className="tu">Flask</p>
                        <p className="tu">Node</p>
                    </div>

                    <p className="project-note">Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition</p>

                    <a href="" className="project-link">view website</a>
                </div>

                <div className="card">
                    <img src={projectlogo} alt="project logo" className="card-logo" />
                    <hr />

                    <h2 className="project-title">Sheet Recognizer</h2>

                    <div className="tools-used">
                        <p className="tu">Flask</p>
                        <p className="tu">Node</p>
                    </div>

                    <p className="project-note">Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition</p>

                    <a href="" className="project-link">view website</a>
                </div>

                <div className="card">
                    <img src={projectlogo} alt="project logo" className="card-logo" />
                    <hr />

                    <h2 className="project-title">Sheet Recognizer</h2>

                    <div className="tools-used">
                        <p className="tu">Flask</p>
                        <p className="tu">Node</p>
                    </div>

                    <p className="project-note">Music Sheet Recognizer (MSR) highlights basic Image Processing and Recognition</p>

                    <a href="" className="project-link">view website</a>
                </div>
            </div>

            <div className="see-github">
                <a href="https://github.com/Ankit-Verma-1" target="_blank">see more on github</a>
            </div>
        </div>
    );
}

export default Portfolio