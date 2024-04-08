import './App.css';
import {UserInp} from './Components/userInp'
import { NumInp } from './Components/numInp';

function App() {
  return (
    <div className="App">
      
      <span><h1>CALCULATOR</h1></span>
      <UserInp/>
      <NumInp/>
      <span>
        <button>+</button>
        <button>-</button>
        <button>%</button>
        <button>x</button>
      </span>

    </div>
  );
}

export default App;
