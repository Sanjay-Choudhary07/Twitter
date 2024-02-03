import './App.css';
import Sidebar from './components/sidebar/Sidebar'
import Feed from './components/feed/Feed'
import Rightbar from './components/rightbar/Rightbar'

function App() {
  return (
    <div className="app">
     <Sidebar/> 
    <Feed/>
     <Rightbar/>
    </div>
  );
}
export default App;
