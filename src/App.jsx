import { useState } from "react";
import TimeZoneClock from "./components/TimeZoneClock";

function App() {
  return (
    <>
      <h1>Relógio Mundial</h1>
      <select>
        <option value="" disabled selected>
          Selecione um fuso horário
        </option>
      </select>
      <div>
        <TimeZoneClock />
      </div>
    </>
  );
}

export default App;
