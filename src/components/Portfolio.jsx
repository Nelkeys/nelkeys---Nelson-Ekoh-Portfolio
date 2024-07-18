import projectlogo from "../assets/project-logo.png"


function Portfolio() {
    return (
        <div className="portfolio">
            <div className="title">
                <h2>Portfolio.</h2>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="i-hr">
                        <img src="https://pngimg.com/uploads/bitcoin/bitcoin_PNG48.png" alt="project logo" className="card-logo" />
                        <hr />
                    </div>


                    <h2 className="project-title">Global international</h2>

                    <div className="tools-used">
                        <p className="tu">HTML</p>
                        <p className="tu">CSS</p>
                    </div>

                    <p className="project-note">Global International Activation Platform offers secure, user-friendly withdrawal code activation for various digital platforms, enhancing financial control.</p>

                    <a href="https://global-int.vercel.app/" className="project-link" target="_blank">view website</a>
                </div>

                <div className="card">
                    <div className="i-hr">
                        <img src="https://media.dev.to/cdn-cgi/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fz9ab8e7kv2jmhtecx2dg.png" alt="project logo" className="card-logo" />
                        <hr />
                    </div>


                    <h2 className="project-title">React Chat App</h2>

                    <div className="tools-used">
                        <p className="tu">React</p>
                        <p className="tu">TypeScript</p>
                        <p className="tu">ChatEngine</p>
                    </div>

                    <p className="project-note">This Chat App is an interactive, user-friendly web application for real-time messaging and communication.</p>

                    <a href="http://nelkeys-chat-app.vercel.app/" className="project-link" target="_blank">view website</a>
                </div>

                <div className="card">
                    <div className="i-hr">
                        <img src="https://nacos-aksuchapter.vercel.app/assets/logo/logo.png" alt="project logo" className="card-logo" />
                        <hr />
                    </div>


                    <h2 className="project-title">NACOS AKSU App</h2>

                    <div className="tools-used">
                        <p className="tu">Firebase</p>
                        <p className="tu">Vanilla Js</p>
                    </div>

                    <p className="project-note">The NACOS AKSU Chapter app offers a user portal for login, student materials, and department notifications.</p>

                    <a href="https://nacos-aksuchapter.vercel.app/" className="project-link" target="_blank">view website</a>
                </div>
            </div>

            <div className="see-github">
                <a href="https://github.com/Nelkeys" target="_blank">see more on github</a>
            </div>
        </div>
    );
}

export default Portfolio