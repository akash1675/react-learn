import { useState } from "react";
import styles from "./App.module.css"
import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";


function App() {
  const [calval, setCalVal] = useState("sex");
  const onButtonClick = (buttonText) => {
    if(buttonText === 'C'){
      setCalVal("");
    }
    else if(buttonText === '='){
      const result = eval(calval);
      setCalVal(result);
    }
    else{
      const newDisplayVal = calval + buttonText;
      setCalVal(newDisplayVal);
    }
  }
  
  return (
    <>
    <div className={styles.calculator}>
     <Display displayValue = {calval}></Display>
      <ButtonContainer onButtonClick = {onButtonClick}></ButtonContainer>
    </div>
    </>
  );
}

export default App
