import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Component/Navbar'
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homescreen/>
    </div>
  );
}

export default App;
