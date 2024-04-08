import './App.css';
import { UserInp } from './Components/userInp'
import { NumInp } from './Components/numInp';
import { OperatorInp } from './Components/operatorInp';

function App() {
  return (
    <div className="App">
      
      <span><h1>CALCULATOR</h1></span>
      <UserInp/>
      <NumInp/>
      <OperatorInp/>

    </div>
  );
}

export default App;
