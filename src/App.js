import "./style/App/App.css";
import Intro from "./components/Intro";
import Skills from "./components/Skills";
import Portfolio from "./components/Portfolio";

function App() {
    return (
        <div className="App">
            <Intro />
            <Skills />
            <Portfolio />
        </div>
    );
}

export default App;
