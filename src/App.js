import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
function App() {
  const [step, setStep] = useState(1);
  const [show, setShow] = useState(true);
  const handleNext = () => {
    const newStep = step + 1;

    if (step < 3) setStep(newStep);
  };
  const handlePrev = () => {
    const newStep = step - 1;
    if (step > 1) setStep(newStep);
  };
  const showModal = () => {
    setShow(!show);
    console.log("clicked");
  };
  return (
    <>
      <button className="close" onClick={showModal}>
        &times;
      </button>
      {show ? (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">{messages[step - 1]}</p>
          <div className="buttons">
            <button onClick={handlePrev}>Previous</button>
            <button onClick={handleNext}>Next</button>
          </div>
        </div>
      ) : (
        <h2 className="display">click button to open modal</h2>
      )}
    </>
  );
}

export default App;
