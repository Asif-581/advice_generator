import "./App.css";
import divider from './images/pattern-divider-desktop.svg'
import icon from './images/icon-dice.svg'
import { useEffect, useState } from "react";
import axios from 'axios';
function App() {

  const [advice, setAdvice] = useState('');
  const [adviceno, setAdviceNo] = useState('');
  
  const fetchAdvice = async () => {
    const { data:{slip:{advice,id}}} = await axios.get("https://api.adviceslip.com/advice");
    setAdvice(advice);
    setAdviceNo(id);
}
 
  useEffect(() => {
    fetchAdvice();
  },[])

  return (
    <div className="App">
      <div className="advice">
        <span>advice #{adviceno}</span>
        <p>
          {advice}
        </p>
        <img src={divider} alt="divider" /><br />
        <button className="btn" type="button" onClick={fetchAdvice}>
          <img src={icon} alt="icon" />
        </button>
      </div>
    </div>
  );
}

export default App;
