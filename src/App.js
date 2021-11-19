import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import SwipeButtons from './Components/SwipeButtons/SwipeButtons';
import TinderCards from './Components/TinderCards/TinderCards';
import Chats from './Components/Chats/Chats';
import ChatScreen from './Components/Chats/ChatScreen';

function App() {
  return (
    <div className="App">

      {/* Header*/}
      
      <Router>
          <Routes>
            <Route path="/purr/:cat" element = {<div><Header backButton="/purr"/> <ChatScreen /> </div>}/>
            <Route path="/purr" element = {<div><Header backButton="/"/> <Chats /> </div>}/>
            <Route path="/" element={ <div><Header /> <TinderCards /> <SwipeButtons/></div>}/>
      
          </Routes>
        {/* Big Tinder Card*/}
        {/* Button */}
        
        {/* chat list */}
        {/** individual chat listj */}

      
      </Router>

    </div>
  );
}

export default App;
