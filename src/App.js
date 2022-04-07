import { useReducer } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from './Button';
import OperationButton from './OperationButton';

const ACTIONS = {
  ADD_DIGIT : 'add-digit',
  CLEAR: 'clear',
  DELETE_DIGIT: 'delete-digit',
  CHOOSE_OPERATION: 'choose-operation',
  EVALUATE: 'evaluate'
}

function reducer(state, {type, payload}){
    switch(type){
      case ACTIONS.ADD_DIGIT:
        return {
          ...state, 
          currentOperand: `${currentOperand}${payload.digit}`
        }
    }
  }


function App() {
  const [{currentOperand, previousOperand, operation}, dispatch] = useReducer(reducer, {});

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{previousOperand}{operation}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>
      <button className="span-two">AC</button>
      <button>DEL</button>
      <OperationButton digit="÷" dispatch={dispatch}/>
      <Button digit="1" dispatch={dispatch}/>
      <Button digit="2" dispatch={dispatch}/>
      <Button digit="3" dispatch={dispatch}/>
      <OperationButton digit="*" dispatch={dispatch}/>
      <Button digit="4" dispatch={dispatch}/>
      <Button digit="5" dispatch={dispatch}/>
      <Button digit="6" dispatch={dispatch}/>
      <OperationButton digit="+" dispatch={dispatch}/>
      <Button digit="7" dispatch={dispatch}/>
      <Button digit="8" dispatch={dispatch}/>
      <Button digit="9" dispatch={dispatch}/>
      <OperationButton digit="-" dispatch={dispatch}/>
      <Button digit="." dispatch={dispatch}/>
      <Button digit="0" dispatch={dispatch}/>
      <OperationButton digit="=" dispatch={dispatch}/>
    </div>
  );
}

export default App;
