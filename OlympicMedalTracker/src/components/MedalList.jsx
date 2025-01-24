import React from "react";
import MedalItem from "./MedalItem";

function MedalList({ countries, setCountries }) {
  const handleDelete = (name) => {
    // 입력한 국가 이름과 다른 항목들만 남긴다.
    //setCountries((prev) => prev.filter((country) => country.name !== name));
    const updatedCountries = countries.filter(
      (country) => country.name !== name
    );
    setCountries(updatedCountries);
    localStorage.setItem("countries", JSON.stringify(updatedCountries));
  };

  return (
    <table className="table">
      <thead>
        <tr>
          <th>국가명</th>
          <th>금메달</th>
          <th>은메달</th>
          <th>동메달</th>
          <th>액션</th>
        </tr>
      </thead>
      <tbody>
        {countries.map((country, index) => (
          <MedalItem
            key={index}
            country={country}
            onDeleteCountry={handleDelete}
          />
        ))}
      </tbody>
    </table>
  );
}

export default MedalList;
