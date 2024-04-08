import './App.css';
import {UserInp} from './Components/userInp'



function App() {
  return (
    <div className="App">
      
      <span><h1>CALCULATOR</h1></span>
      <UserInp/>
      

      <span>
        <button>1</button>
        <button>2</button>
        <button>3</button>
        <button>4</button>
        <button>5</button>
        <button>6</button>
        <button>7</button>
        <button>8</button>
        <button>9</button>
      </span>

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
