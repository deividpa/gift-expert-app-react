import React, { useState } from "react";

const AddCategory = () => {
  const [inputValue, setInputValue] = useState("Ingresar valor");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit succeed");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inpAddCat"
        id="inpAddCat"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default AddCategory;
