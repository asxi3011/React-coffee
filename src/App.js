import logo from './logo.svg';
import './App.css';
import './component/style.css'
import BodyProduct from './component/BobyProduct';

import FindOut from './component/FindOut';
import NotFound from './component/NotFound';
import GetOder from './component/GetOder';


function App() {
  return (
    
    <div className="App">
      {/* <FindOut/> */}
      <GetOder/>
    

      <BodyProduct/>
      
    </div>
  );
}

export default App;
