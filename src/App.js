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

            <h2 className='short-courses-heading'>Short Courses we Offer</h2>
            <p>Our eight week intensive certificate course is open to senior high school graduates, tertiary students,<br></br>school graduates, workers and the general public.</p>
            <h5>Evening and Weekend Session Only</h5>
            
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
