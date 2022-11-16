import deliveryAppImg from "../images/portfolio/delivery_app.png";
import forecastAppImg from "../images/portfolio/weather_forecast.png";
import mfinanceImg from "../images/portfolio/mfinance.png";
import tic_tac_toeImg from "../images/portfolio/tic-tac-toe.png";
import kopfflexImg from "../images/portfolio/first_web_site.png";
import shippingImg from "../images/portfolio/shipping.png";

export default function Portfolio() {
    return (
        <section
            className="portfolio"
            id="portfolio"
        >
            <header className="section_header">Portfolio</header>

            <main className="porfolio_content">
                <div className="portfolio_item">
                    <div className="name">
                        <header>Delivery app</header>
                        <a
                            href="https://react-router-redux-pizza-delivery.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={deliveryAppImg}
                                alt="Delivery app"
                            />
                        </a>
                    </div>
                    <div className="details">
                        <p>
                            An app, which stores products' and user's info in a
                            local storage. You can go through a short
                            registration procedure to see it's features in full.
                            Not optimized in full for small screens currently.
                            All data stores locally only. For your protection
                            "Continue and Pay" button is currently not active :)
                        </p>
                        <div className="used_technologies">
                            React, Redux, React router, CSS
                        </div>
                        <div className="links">
                            <a
                                className="git_link"
                                href="https://github.com/AAlexanderV/deliveryApp_react-router-redux"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="net_link"
                                href="https://react-router-redux-pizza-delivery.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="portfolio_item">
                    <div className="name">
                        <header>Weather forecast app</header>
                        <a
                            href="https://meteo-cat-forecast.netlify.app/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={forecastAppImg}
                                alt="Weather forecast app"
                            />
                        </a>
                    </div>
                    <div className="details">
                        <p>
                            A weather forecast application that uses the
                            weatherapi.com API to give you access to current
                            weather conditions around the world. Search is
                            possible in different languages. Please note that
                            its styles are not currently optimized for small
                            screens.
                        </p>
                        <div className="used_technologies">
                            React, React Hooks, CSS
                        </div>
                        <div className="links">
                            <a
                                className="git_link"
                                href="https://github.com/AAlexanderV/Weather_forecast"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="net_link"
                                href="https://meteo-cat-forecast.netlify.app/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="portfolio_item">
                    <div className="name">
                        <header>Marine-Finance</header>
                        <a
                            href="https://marinefinance.od.ua/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={mfinanceImg}
                                alt="Marine-Finance"
                            />
                        </a>
                    </div>
                    <div className="details">
                        <p>
                            A web-site of a financial institution with the
                            credit calculator.
                        </p>
                        <div className="used_technologies">
                            HTML, CSS, JavaScript
                        </div>
                        <div className="links">
                            <a
                                className="git_link"
                                href="https://github.com/AAlexanderV/MFinance"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="net_link"
                                href="https://marinefinance.od.ua/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="portfolio_item">
                    <div className="name">
                        <header>Tic-tac-toe with invincible AI</header>
                        <a
                            href="https://aalexanderv.github.io/tic-tac-toe-with-AI/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={tic_tac_toeImg}
                                alt="Marine-Finance"
                            />
                        </a>
                    </div>
                    <div className="details">
                        <p>
                            A tic-tac-toe game. Check if you can win the game :)
                        </p>
                        <div className="used_technologies">
                            HTML, CSS, JavaScript
                        </div>
                        <div className="links">
                            <a
                                className="git_link"
                                href="https://github.com/AAlexanderV/tic-tac-toe-with-AI"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="net_link"
                                href="https://aalexanderv.github.io/tic-tac-toe-with-AI/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="portfolio_item">
                    <div className="name">
                        <header>Shipping company web-site</header>
                        <a
                            href="https://aalexanderv.github.io/2nd-simpleWebsite/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={shippingImg}
                                alt="Shipping web-site"
                            />
                        </a>
                    </div>
                    <div className="details">
                        <p>
                            Here I was trying to learn SCSS and it may also be
                            considered as my 2-nd simple web-site.
                        </p>
                        <div className="used_technologies">
                            HTML, SCSS, JavaScript
                        </div>
                        <div className="links">
                            <a
                                className="git_link"
                                href="https://github.com/AAlexanderV/2nd-simpleWebsite/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="net_link"
                                href="https://aalexanderv.github.io/2nd-simpleWebsite/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live site
                            </a>
                        </div>
                    </div>
                </div>

                <div className="portfolio_item">
                    <div className="name">
                        <header>My first simple web-site</header>
                        <a
                            href="https://aalexanderv.github.io/my-1st-website/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img
                                src={kopfflexImg}
                                alt="Kopfflex web-site"
                            />
                        </a>
                    </div>
                    <div className="details">
                        <p>
                            A first web-site, which I've tried to make when I
                            just started learning CSS and didn't know much about
                            JS.
                        </p>
                        <div className="used_technologies">
                            HTML, CSS, JavaScript
                        </div>
                        <div className="links">
                            <a
                                className="git_link"
                                href="https://github.com/AAlexanderV/my-1st-website/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                className="net_link"
                                href="https://aalexanderv.github.io/my-1st-website/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Live site
                            </a>
                        </div>
                    </div>
                </div>
            </main>
        </section>
    );
}
