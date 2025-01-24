import React, { useState } from "react";
import MedalForm from "./components/MedalForm";
import MedalList from "./components/MedalList";
import "./App.css";

function App() {
  // 국가 및 메달 데이터를 저장할 상태
  const [countries, setCountries] = useState(() => {
    // 로컬 스토리지에서 데이터를 가져온다.
    const savedCountries = localStorage.getItem("countries");
    return savedCountries ? JSON.parse(savedCountries) : [];
  });
  // 정렬 기준 상태
  const [sortBy, setSortBy] = useState("gold");

  // 정렬 기준 변경
  const handleSortChange = (e) => {
    // sortBy가 바로 적용되지 않는 문제 발생
    // setSortBy(e.target.value);
    const newValue = e.target.value;
    setSortBy(newValue);
    const sortedCountries = sortCountries([...countries], newValue); // 현재 리스트 정렬
    setCountries(sortedCountries);
  };

  // 정렬 로직
  const sortCountries = (list, value) => {
    if (value === "gold") {
      return list.sort((a, b) => b.gold - a.gold);
    } else if (value === "total") {
      return list.sort(
        (a, b) => b.gold + b.silver + b.bronze - (a.gold + a.silver + a.bronze)
      );
    }
    return list;
  };

  return (
    <div className="container">
      <h1>2024 파리 올림픽</h1>
      <div className="sort-options">
        <label>
          <input
            type="radio"
            name="sortBy"
            value="gold"
            checked={sortBy === "gold"}
            onChange={handleSortChange}
          />
          금메달 기준 정렬
        </label>
        <label>
          <input
            type="radio"
            name="sortBy"
            value="total"
            checked={sortBy === "total"}
            onChange={handleSortChange}
          />
          총 메달 기준 정렬
        </label>
      </div>
      <MedalForm
        countries={countries}
        setCountries={setCountries}
        sortBy={sortBy}
        sortCountries={sortCountries}
      />
      <MedalList countries={countries} setCountries={setCountries} />
    </div>
  );
}

export default App;
