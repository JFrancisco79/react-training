import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  const [step, setStep] = useState(1);

  function fnClickNext() {
    setStep((prev) => {
      return prev === messages.length ? prev : prev + 1;
    });
  }

  function fnClickPrev() {
    setStep((prev) => {
      return prev === 1 ? 1 : prev - 1;
    });
  }

  return (
    <div className="steps">
      <div className="numbers">
        <div className={step >= 1 ? "active" : ""}>1</div>
        <div className={step >= 2 ? "active" : ""}>2</div>
        <div className={step >= 3 ? "active" : ""}>3</div>
      </div>
      <p className="message">
        Step {step}: {messages[step - 1]}
      </p>
      <div className="buttons">
        <button
          onClick={fnClickPrev}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Previous
        </button>
        <button
          onClick={fnClickNext}
          style={{ backgroundColor: "#7950f2", color: "#fff" }}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
