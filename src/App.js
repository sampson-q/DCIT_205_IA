import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import VideoBackground from './components/VideoBackground';
import ProgramsComponent from './components/ProgramsComponent';
import InformationComponent from './components/InformationComponent';

function App() {
    return (
        <div className="App">
            <NavBar />
            <VideoBackground />
            <ProgramsComponent />
            <InformationComponent />
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>Edit <code>src/App.js</code> and save to reload.</p>
                <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer" >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
