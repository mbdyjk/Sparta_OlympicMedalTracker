import React, { useState } from "react";

function MedalForm({ setCountries }) {
  const [formData, setFormData] = useState({
    name: "",
    gold: 0,
    silver: 0,
    bronze: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "name" ? value : Math.max(0, parseInt(value, 10) || 0),
    }));
  };

  const handleAddCountry = () => {
    //console.log("Adding Country:", formData);
    if (!formData.name) {
      alert("국가명을 입력하세요");
      return;
    }

    // countries에 국가 추가
    setCountries((prev) => [...prev, formData]);
    // 입력 후에 form을 초기화한다.
    setFormData({ name: "", gold: 0, silver: 0, bronze: 0 });
  };

  return (
    <form className="form">
      <input
        type="text"
        name="name"
        placeholder="국가명"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        name="gold"
        placeholder="금메달"
        value={formData.gold}
        onChange={handleChange}
        min="0"
      />
      <input
        type="number"
        name="silver"
        placeholder="은메달"
        value={formData.silver}
        onChange={handleChange}
        min="0"
      />
      <input
        type="number"
        name="bronze"
        placeholder="동메달"
        value={formData.bronze}
        onChange={handleChange}
        min="0"
      />
      <button type="button" onClick={handleAddCountry}>
        국가 추가
      </button>
    </form>
  );
}

export default MedalForm;
