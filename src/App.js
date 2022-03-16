import Hello from "./hello";
import {useState} from 'react'
function App() {
  const Displaybutt=()=>{
    if (disp===true) {return(<button onClick={()=>display?setDisplay(false):setDisplay(true)}>
    clickToDisplay
  </button>)}else{return false}
  }

  const DisplayHello=()=>{
    if (display===true) {return(<Hello/>)}else{return false}
  }
  const off=()=>{
    setDisp(false); 
    setDisplay(false);
  }
  const [display,setDisplay]=useState(false);
  const [disp,setDisp]=useState(false);
  return (
   <div>
     <button onClick={()=>disp?off():setDisp(true)}>
       clickToDisplay
     </button>
     <Displaybutt />
     <DisplayHello />
   </div>
    
  );
}
export default App;
