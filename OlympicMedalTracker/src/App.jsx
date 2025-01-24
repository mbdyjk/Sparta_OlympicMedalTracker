import React, { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import "./App.css";

function App() {
  // 국가 및 메달 데이터를 저장할 상태
  const [countries, setCountries] = useState([]);

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <MedalForm setCountries={setCountries} />
      <MedalList countries={countries} />
    </div>
  );
}

export default App;
