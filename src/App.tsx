import { useMemo } from "react";
import { bindActionCreators } from "redux";

import { incrementActions } from "./store/counter-toolkit/actions/counter-increment.actions";
import { useAppDispatch } from "./store/hooks/useAppDispach";
import ToDoList from "./ToDoList/ToDoList";

import { useApp } from "./useApp";

import "./App.css";
import { addProduct } from "./store/basket/basketSlice";
import { useAppSelector } from "./store/hooks/useAppSelector";
import Basket from "./Basket/Basket";

function App(): JSX.Element {
  const {
    counterState,
    divide,
    handleChangeDivide,
    handleChangeMultiply,
    handleDecrement,
    handleDivide,
    handleIncrement,
    handleMultiply,
    handlePow,
    handlePowByValue,
    multiply,
  } = useApp();

  const dispatch = useAppDispatch();

  const { increment } = useMemo(
    () => bindActionCreators({ increment: incrementActions }, dispatch),
    [dispatch]
  );

  return (
    <div className="App">
      Counter: {counterState}
      <button type="button" onClick={handleIncrement}>
        INCREMENT
      </button>
      <button type="button" onClick={handleDecrement}>
        INCREMENT
      </button>
      <button type="button" onClick={handlePow}>
        POW
      </button>
      <button type="button" onClick={handlePowByValue}>
        POW_BY_VALUE
      </button>
      <div>
        DIVIDE
        <input type="number" value={divide} onChange={handleChangeDivide} />
        <button type="button" onClick={handleDivide}>
          DIVIDE
        </button>
      </div>
      <div>
        MULTIPLY
        <input type="number" value={multiply} onChange={handleChangeMultiply} />
        <button type="button" onClick={handleMultiply}>
          MULTIPLY
        </button>
        <button onClick={() => increment}>INCREMENT "TOOLKIT"</button>
      </div>
      <ToDoList />
      <Basket />
    </div>
  );
}

export default App;
