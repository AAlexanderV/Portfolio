import "./style/App/App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";
import Contacts from "./components/Contacts";

function App() {
    return (
        <div className="App">
            <Intro />
            <Skills />
            <Portfolio />
            <Contacts />
        </div>
    );
}

export default App;
