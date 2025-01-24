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
      <div className="sort-options">
        <label>
          <input type="radio" name="sortBy" value="gold" />
          금메달 기준 정렬
        </label>
        <label>
          <input type="radio" name="sortBy" value="total" />총 메달 기준 정렬
        </label>
      </div>
      <MedalForm countries={countries} setCountries={setCountries} />
      <MedalList countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
