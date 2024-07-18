

function Skills() {
    return (
        <div className="skills">
            <div className="title">
                <h2>Skills.</h2>
            </div>

            <div className="skill-container">
                <div className="skill">
                    <div className="name-icon">
                        <i class='bx bx-code-alt'></i>
                        <h2>languages</h2>

                    </div>

                    <p className="skill-det">
                        Python, Javascript, TypeScript, Java, C, C++, SQL, NoSQL, Ruby
                    </p>
                </div>

                <div className="skill">
                    <div className="name-icon">
                        <i class='bx bxs-edit' ></i>
                        <h2>design</h2>

                    </div>

                    <p className="skill-det">
                        Illustrator, XD, Photoshop, Final Cut Pro
                    </p>
                </div>

                <div className="skill">
                    <div className="name-icon">
                        <i class='bx bx-laptop' ></i>
                        <h2>web technologies</h2>

                    </div>

                    <p className="skill-det">
                        Vue, Angular, React, Node, Flask, HTML, CSS
                    </p>
                </div>
            </div>
        </div>

    );
}

export default Skills;