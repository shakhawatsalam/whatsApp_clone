import './App.css';
import Chat from './Components/Sidebar/Chat';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app">
      <div className='app_body'>
        <Sidebar/>
        <Chat></Chat>
      </div>
    </div>
  );
}

export default App;