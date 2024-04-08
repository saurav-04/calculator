import './App.css';
import { useState } from 'react';
import { UserInp } from './Components/userInp'
import { NumInp } from './Components/numInp';
import { OperatorInp } from './Components/operatorInp';
import { CalcContext } from './Helpers/context';

function App() {
  const [ input , setInput ] = useState(0)
  const [ result, setResult ] = useState(0)


  

  return (
    <div className="App">
      
      <span><h1>CALCULATOR</h1></span>
      
      <CalcContext.Provider value={{input,setInput}}>
          <UserInp/>
          <NumInp/>
          <OperatorInp/>
      </CalcContext.Provider>

      <span className='result'>
        {result}
      </span>

    </div>
  );
}

export default App;
