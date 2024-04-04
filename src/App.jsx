import { useState } from "react";
import "./App.css";

// function App() {
//   return (
//     <>
//       <Add />
//       <br />
//       <Subtract />
//       <br />
//       <Multiply />
//       <br />
//       <Divide />
//     </>
//   );
// }

// function Add() {
//   const [firstInput, setFirstInput] = useState(10);
//   const [secondInput, setSecondInput] = useState(5);

//   function resultHandler() {
//     return firstInput + secondInput;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={firstInput}
//         onChange={(e) => setFirstInput(Number(e.target.value))}
//       />
//       +
//       <input
//         type="text"
//         value={secondInput}
//         onChange={(e) => setSecondInput(Number(e.target.value))}
//       />
//       = {resultHandler()}
//     </div>
//   );
// }

// function Subtract() {
//   const [firstInput, setFirstInput] = useState(10);
//   const [secondInput, setSecondInput] = useState(5);

//   function resultHandler() {
//     return firstInput - secondInput;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={firstInput}
//         onChange={(e) => setFirstInput(Number(e.target.value))}
//       />
//       -
//       <input
//         type="text"
//         value={secondInput}
//         onChange={(e) => setSecondInput(Number(e.target.value))}
//       />
//       = {resultHandler()}
//     </div>
//   );
// }

// function Multiply() {
//   const [firstInput, setFirstInput] = useState(10);
//   const [secondInput, setSecondInput] = useState(5);

//   function resultHandler() {
//     return firstInput * secondInput;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={firstInput}
//         onChange={(e) => setFirstInput(Number(e.target.value))}
//       />
//       *
//       <input
//         type="text"
//         value={secondInput}
//         onChange={(e) => setSecondInput(Number(e.target.value))}
//       />
//       = {resultHandler()}
//     </div>
//   );
// }

// function Divide() {
//   const [firstInput, setFirstInput] = useState(10);
//   const [secondInput, setSecondInput] = useState(5);

//   function resultHandler() {
//     return firstInput / secondInput;
//   }

//   return (
//     <div>
//       <input
//         type="text"
//         value={firstInput}
//         onChange={(e) => setFirstInput(Number(e.target.value))}
//       />
//       /
//       <input
//         type="text"
//         value={secondInput}
//         onChange={(e) => setSecondInput(Number(e.target.value))}
//       />
//       = {resultHandler()}
//     </div>
//   );
// }

// export default App;

// After Refactor

function App() {
  return (
    <>
      <CalculatorOperation operation="Add" />
      <br />
      <CalculatorOperation operation="Subtract" />
      <br />
      <CalculatorOperation operation="Multiply" />
      <br />
      <CalculatorOperation operation="Divide" />
    </>
  );
}

function CalculatorOperation({ operation }) {
  const [firstInput, setFirstInput] = useState(10);
  const [secondInput, setSecondInput] = useState(5);

  let result;
  switch (operation) {
    case "Add":
      result = firstInput + secondInput;
      break;
    case "Subtract":
      result = firstInput - secondInput;
      break;
    case "Multiply":
      result = firstInput * secondInput;
      break;
    case "Divide":
      result = firstInput / secondInput;
      break;
    default:
      result = "";
  }

  return (
    <div>
      <input
        type="number"
        value={firstInput}
        onChange={(e) => setFirstInput(Number(e.target.value))}
      />
      {operation === "Add" && "+"}
      {operation === "Subtract" && "-"}
      {operation === "Multiply" && "*"}
      {operation === "Divide" && "/"}
      <input
        type="number"
        value={secondInput}
        onChange={(e) => setSecondInput(Number(e.target.value))}
      />
      = {result}
    </div>
  );
}

export default App;
