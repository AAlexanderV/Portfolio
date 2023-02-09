import avatar from "../images/avatar.jpg";

export default function About() {
    return (
        <main
            className="about"
            id="about"
        >
            <div className="avatar">
                <img
                    src={avatar}
                    alt="Avatar"
                />
            </div>
            <div className="about_contentBox">
                <header className="about_header">ABOUT ME</header>
                <div className="about_text">
                    <p>
                        Hello, my name is <span>Alexander Asaulov</span>. I am
                        28 and I have just changed my career from "attorney" to
                        a <span>"front-end developer"</span>.
                    </p>
                    <p>
                        My journey in programming began in spring 2021, when I
                        got interested in the topic of programming and computer
                        science in general, and I got "hooked" on YouTube videos
                        on this topic from various amateurs and professionals in
                        this field. I didn't think about web development then.
                        Later, I came across a free course on "Introduction to
                        Computer Science" from Harvard University's CS50x and
                        decided to try it out of curiosity.
                    </p>
                    <p>
                        So, from "Scratch" and C, I went to HTML/CSS and... at
                        first I did not like them as much as C. A little later,
                        I <span>discovered JS</span>. It turned out to be very
                        similar to C (comparing with python and html/css), but
                        much simpler and more functional. As a result,{" "}
                        <span>
                            I really liked web development and decided stay in
                            this technology stack
                        </span>
                        , to which I have dedicated myself for the past 10
                        months.
                    </p>
                </div>
            </div>
        </main>
    );
}
