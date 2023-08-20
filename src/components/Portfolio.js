import petProjectsData from "../portfolioData";

export default function Portfolio() {
  return (
    <section
      className="portfolio"
      id="portfolio"
    >
      <header className="section_header">PORTFOLIO</header>

      <main className="porfolio_content">
        {petProjectsData.map((dataItem) => {
          return (
            <div className="portfolio_item">
              <div className="name">
                <header>{dataItem.header}</header>
                <a
                  href={dataItem.liveSite}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    src={dataItem.image}
                    alt={dataItem.alt}
                  />
                </a>
              </div>
              <div className="details">
                <p>{dataItem.description}</p>
                <div className="used_technologies">{dataItem.usedTechnologies}</div>
                <div className="links">
                  <a
                    className="git_link"
                    href={dataItem.githubLink}
                    target="_blank"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                  <a
                    className="net_link"
                    href={dataItem.liveSite}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Live site
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </section>
  );
}
