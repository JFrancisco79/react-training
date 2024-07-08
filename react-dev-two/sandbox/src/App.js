import React, { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [yTip, setYTip] = useState(0);
  const [fTip, setFTip] = useState(0);

  function handleBill(e) {
    setBill(Number(e.target.value));
  }

  function handleYTip(e) {
    setYTip(Number(e.target.value));
  }

  function handleFTip(e) {
    setFTip(Number(e.target.value));
  }

  function handleReset() {
    setBill(0);
    setYTip(0);
    setFTip(0);
  }

  return (
    <div>
      <BillInput bill={bill} onChangeBill={handleBill} />
      <SelectPercentage onHandleChange={handleYTip} tip={yTip}>
        <label>How did you like the service?</label>
      </SelectPercentage>
      <SelectPercentage onHandleChange={handleFTip} tip={fTip}>
        <label>How did your friend like the service?</label>
      </SelectPercentage>
      {bill !== 0 ? (
        <div>
          <Calculation bill={bill} yTip={yTip} fTip={fTip} />
          <button onClick={handleReset}>Reset</button>
        </div>
      ) : null}
    </div>
  );
}

function Calculation({ bill, yTip, fTip }) {
  const percent = (yTip + fTip) / 2;
  const tip = bill * (percent / 100);
  const total = bill + tip;
  return (
    <p>
      <b>{`You pay $${total} ($${bill} + $${tip} tip)`}</b>
    </p>
  );
}

function BillInput({ bill, onChangeBill }) {
  return (
    <div>
      <label>How much was the bill?</label>
      <input value={bill} onChange={onChangeBill} />
    </div>
  );
}

function SelectPercentage({ children, onHandleChange, tip }) {
  return (
    <div>
      {children}
      <select onChange={(e) => onHandleChange(e)} value={tip}>
        <option value="0">Dissatisfied (0%)</option>
        <option value="5">It was okay (5%)</option>
        <option value="10">It was good (10%)</option>
        <option value="20">Absolutely amazing! (20%)</option>
      </select>
    </div>
  );
}
export default App;
