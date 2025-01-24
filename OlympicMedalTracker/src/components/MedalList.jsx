import React from "react";

function MedalList({ countries, setCountries }) {
  const handleDelete = (name) => {
    // 입력한 국가 이름과 다른 항목들만 남긴다.
    setCountries((prev) => prev.filter((country) => country.name !== name));
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
          <tr key={index}>
            <td>{country.name}</td>
            <td>{country.gold}</td>
            <td>{country.silver}</td>
            <td>{country.bronze}</td>
            <td>
              <button
                className="delete-btn"
                onClick={() => handleDelete(country.name)}
              >
                삭제
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default MedalList;
