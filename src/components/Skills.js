import htmlImg from "../images/html.png";
import cssImg from "../images/css.png";
import jsImg from "../images/js.png";
import pythonImg from "../images/python.png";
import cImg from "../images/c.png";
import reactImg from "../images/react.png";
import reactRouterImg from "../images/react-router.png";
import reduxImg from "../images/redux.png";
import gitImg from "../images/git.png";

export default function Skills() {
    return (
        <section
            className="skills"
            id="skills"
        >
            <header className="section_header">SKILLS</header>
            <main className="skills_content">
                <div className="skills_box">
                    <h2>Programming languages:</h2>
                    <ul>
                        <li>
                            <img
                                src={htmlImg}
                                alt="HTML"
                            />
                            <p>HTML</p>
                        </li>
                        <li>
                            <img
                                src={cssImg}
                                alt="CSS"
                            />
                            <p>CSS</p>
                        </li>

                        <li>
                            <img
                                src={jsImg}
                                alt="JavaScript"
                            />
                            <p>JavaScript</p>
                        </li>
                        <li>
                            <img
                                src={pythonImg}
                                alt="python"
                            />
                            <p>Python</p>
                        </li>
                        <li>
                            <img
                                src={cImg}
                                alt="C"
                            />
                            <p>C</p>
                        </li>
                    </ul>
                </div>

                <div className="skills_box">
                    <h2>Frameworks & systems:</h2>
                    <ul>
                        <li>
                            <img
                                src={reactImg}
                                alt="React"
                            />
                            <p>React</p>
                        </li>
                        <li>
                            <img
                                src={reduxImg}
                                alt="Redux"
                            />
                            <p>Redux</p>
                        </li>
                        <li>
                            <img
                                src={reactRouterImg}
                                alt="React router"
                            />
                            <p>React router</p>
                        </li>
                        <li>
                            <img
                                src={gitImg}
                                alt="Git"
                            />
                            <p>Git</p>
                        </li>
                    </ul>
                </div>
            </main>
        </section>
    );
}
