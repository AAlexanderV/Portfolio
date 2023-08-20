import rickAndMortyImg from "./images/portfolio/rick-and-morty.png";
import evolutionImg from "./images/portfolio/bact.png";
import deliveryAppImg from "./images/portfolio/delivery_app.png";
import forecastAppImg from "./images/portfolio/weather_forecast.png";
import mfinanceImg from "./images/portfolio/mfinance.png";
import tic_tac_toeImg from "./images/portfolio/tic-tac-toe.png";
import kopfflexImg from "./images/portfolio/first_web_site.png";
import shippingImg from "./images/portfolio/jb.png";

const petProjectsData = [
  {
    header: "Rick and Morty characters",
    liveSite: "https://rick-morty-series-characters.netlify.app/",
    githubLink: "https://github.com/AAlexanderV/rick-and-morty-characters",
    image: rickAndMortyImg,
    alt: "Rick and Morty characters",
    description:
      "An app which gives access to hundreds of characters, images, locations and episodes filled with canonical information as seen on Rick and Morty TV show. App uses API from https://rickandmortyapi.com/ and has a simple Google authorization.",
    usedTechnologies: "Google authorization, React, Redux Toolkit, CSS",
  },

  {
    header: "Evolution simulator",
    liveSite: "https://bact-simulator.netlify.app/",
    githubLink: "https://github.com/AAlexanderV/Bacteria",
    image: evolutionImg,
    alt: "Evolution simulator",
    description:
      "An app which simulates the lifecycle of Bacts, where you can place as much food and Bacts as you want. It has a real-time statistics module, where you can see how they evolve.",
    usedTechnologies: "React, Redux Toolkit, CSS",
  },

  {
    header: "Tic-tac-toe with minimax algorithm",
    liveSite: "https://tic-tac-toe-minimax-algorithm.netlify.app/",
    githubLink: "https://github.com/AAlexanderV/Tic-tac-toe-minimax-algorithm",
    image: tic_tac_toeImg,
    alt: "Tic-tac-toe",
    description: "A tic-tac-toe game. Check if you can win the game :)",
    usedTechnologies: "React, TypeScript, SCSS",
  },

  {
    header: "Delivery app",
    liveSite: "https://react-router-redux-pizza-delivery.netlify.app/",
    githubLink: "https://github.com/AAlexanderV/deliveryApp_react-router-redux",
    image: deliveryAppImg,
    alt: "Delivery app",
    description:
      "An app, which stores products' and user's info in a local storage. You can go through a short registration procedure to see it's features in full. Not optimized in full for small screens currently. All data stores locally only. For your protection 'Continue and Pay' button is currently not active :)",
    usedTechnologies: "React, Redux Toolkit, React router, CSS",
  },

  {
    header: "Weather forecast app",
    liveSite: "https://meteo-cat-forecast.netlify.app/",
    githubLink: "https://github.com/AAlexanderV/Weather_forecast",
    image: forecastAppImg,
    alt: "Weather forecast app",
    description:
      "A weather forecast application that uses the weatherapi.com API to give you access to current weather conditions around the world. Search is possible in different languages. Please note that its styles are not currently optimized for small screens.",
    usedTechnologies: "React, React Hooks, CSS",
  },

  {
    header: "Marine-Finance",
    liveSite: "https://marinefinance.od.ua/",
    githubLink: "https://github.com/AAlexanderV/MFinance",
    image: mfinanceImg,
    alt: "Marine-Finance",
    description: "A web-site of a financial institution with the credit calculator.",
    usedTechnologies: "HTML, CSS, JavaScript",
  },

  {
    header: "Shipping company web-site",
    liveSite: "https://just-bulk-dmcc.netlify.app/",
    githubLink: "https://github.com/AAlexanderV/just-bulk/",
    image: shippingImg,
    alt: "Shipping web-site",
    description: "A simple web-site of a shipping company.",
    usedTechnologies: "HTML, CSS, JavaScript",
  },

  {
    header: "My first simple web-site",
    liveSite: "https://aalexanderv.github.io/my-1st-website/",
    githubLink: "https://github.com/AAlexanderV/my-1st-website/",
    image: kopfflexImg,
    alt: "Kopfflex web-site",
    description:
      "A first web-site, which I've tried to make when I just started learning CSS and didn't know much about JS.",
    usedTechnologies: "HTML, CSS, JavaScript",
  },
];

export default petProjectsData;
