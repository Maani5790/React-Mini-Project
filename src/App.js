import React,{ useState } from "react";
import './index.css';

const App = () => {
  const [num,changeNum] = useState(0);
  const incrementNum = () => {
    changeNum(num+1);
  }
  const decrementNum = () => {
    if(num-1<0){
       alert("you can't decrease than 0 ")
    }else{
      changeNum(num-1);
    }
  }
  return(
     <>
     <h1 style={{textAlign : "center"}}>Project</h1>
      <div className="main_div">
        <div className="main_center">
          <h1>{num}</h1>
          <div className="button_div">
            <button onClick={incrementNum}> Increment </button>
            <button onClick= {decrementNum}> Decrement </button>
          </div>
        </div>

      </div>
     </>
  );
}
export default App; 