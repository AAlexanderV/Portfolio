import avatar from "../images/avatar.jpg";

export default function About() {
  return (
    <main className="about" id="about">
      <div className="avatar">
        <img src={avatar} alt="Avatar" />
      </div>
      <div className="about_contentBox">
        <header className="about_header">ABOUT ME</header>
        <div className="about_text">
          <p>
            Hello, my name is <span>Alex</span>.
          </p>
          <p>
            My journey in programming began in the spring of 2021 when I became
            interested in programming and computer science in general. I got
            "hooked" on YouTube videos about these topics from various amateurs
            and professionals in the field. At that time, I wasn't considering
            web development. Later, I came across a free course called
            "Introduction to Computer Science" from Harvard University's CS50x
            and decided to try it out of curiosity.
          </p>
          <p>
            Starting with "Scratch" and C, I eventually moved on to HTML/CSS,
            which I didn't initially enjoy much. However, a bit later, I{" "}
            <span>discovered JS</span>. It turned out to be very similar to C
            (especially when compared to Python and HTML/CSS), but much simpler
            and more functional. As a result,{" "}
            <span>
              I really got into web development and decided to stay within this
              technology stack.
            </span>
          </p>
        </div>
      </div>
    </main>
  );
}
