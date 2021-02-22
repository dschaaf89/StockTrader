import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Newsfeed from './Newsfeed';
import Stats from './Stats';

function App() {
  return (
   <div className ="App">
      {/* Header */}
      <div className ="app_header">
        <Header />
      </div>
      {/* Body */}
      <div className="app_body">
        <div className="app__container">
          <Newsfeed/>
          {/* stats */}
          <Stats/>
        </div>
      </div>

  </div>
   
  );
}

export default App;
