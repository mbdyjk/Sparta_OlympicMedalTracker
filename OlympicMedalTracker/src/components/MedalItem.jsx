import React from "react";

function MedalItem({ country, onDeleteCountry }) {
  return (
    <tr>
      <td>{country.name}</td>
      <td>{country.gold}</td>
      <td>{country.silver}</td>
      <td>{country.bronze}</td>
      <td>
        <button
          className="delete-btn"
          onClick={() => onDeleteCountry(country.name)}
        >
          삭제
        </button>
      </td>
    </tr>
  );
}

export default MedalItem;
