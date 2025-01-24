import React, { useState } from "react";

function MedalForm({ countries, setCountries, sortBy, sortCountries }) {
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
      // 숫자 입력 영역에서 숫자가 아닌 값에 대해서는 0 반환하도록
      [name]: name === "name" ? value : Math.max(0, parseInt(value, 10) || 0),
    }));
  };

  const handleAddCountry = () => {
    //console.log("Adding Country:", formData);
    // 빈 국가명 체크
    if (!formData.name) {
      alert("국가명을 입력하세요");
      return;
    }

    // 중복 국가명 체크
    // countries가 배열임을 확실히 하기 위해 조건문 추가
    //console.log(countries);
    if (
      Array.isArray(countries) &&
      countries.some((country) => country.name === formData.name)
    ) {
      alert("이미 추가된 국가입니다.");
      return;
    }

    // countries에 국가 추가
    const newCountries = [...countries, formData];
    const sortedCountries = sortCountries(newCountries, sortBy);
    setCountries(sortedCountries);
    localStorage.setItem("countries", JSON.stringify(sortedCountries));
    // 입력 후에 form을 초기화한다.
    resetForm();
  };

  const handleUpdateCountry = () => {
    if (!countries.some((country) => country.name === formData.name)) {
      alert("해당 국가가 존재하지 않습니다. 국가명을 확인하세요.");
      return;
    }

    const updatedCountries = countries.map((country) =>
      country.name === formData.name ? formData : country
    );

    const sortedCountries = sortCountries(updatedCountries, sortBy);
    setCountries(sortedCountries);
    localStorage.setItem("countries", JSON.stringify(sortedCountries));
    resetForm();
  };

  const resetForm = () => {
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
      <button type="button" className="add-btn" onClick={handleAddCountry}>
        국가 추가
      </button>
      <button type="button" className="edit-btn" onClick={handleUpdateCountry}>
        업데이트
      </button>
    </form>
  );
}

export default MedalForm;
