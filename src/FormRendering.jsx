import React, { useState } from "react";

function FormRendering({ element, onInputChange }) {
  const [text, setText] = useState("");

  function handleInputChange(event) {
    const { name, value } = event.target;
    setText(value);
    onInputChange(name, value);
  }

  let renderElement;

  if (element.type === "select") {
    renderElement = (
      <select name={element.name} value={text} onChange={handleInputChange}>
        {element.options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    );
  } else {
    renderElement = (
      <input
        type={element.type}
        placeholder={element.placeholder}
        value={text}
        name={element.name}
        onChange={handleInputChange}
        style={{
          margin: "5px"
        }}
      />
    );
  }

  return (
    <>
      <label
        id={element.id}
        style={{
          margin: "5px",
          textAlign: "right",
          display: "inline-block",
          // width: "200px"
        }}
      >
        {element.name}:
      </label>
      {renderElement}
      <br />
    </>
  );
}

export default FormRendering;
