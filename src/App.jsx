
import "./App.css";
import { formData } from "./formData";
import { useState } from "react";
import FormRendering from "./FormRendering.jsx";
import SubmissionDisplay from "./SubmissionDisplay";

export default function App() {
  const [type, setType] = useState(0);
  const [formValues, setFormValues] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const values = Object.values(formData);
  const keys = Object.keys(formData);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("Form data:", formValues);

    const formDataArray = Object.entries(formValues).map(([name, value]) => ({
      name,
      value
    }));
    console.log("Form data array:", formDataArray);

    setSubmitted(true); 
  }

  const handleInputChange = (name, value) => {
    setFormValues({ ...formValues, [name]: value });
  };

  const formBlocks = values[type].map((item) => (
    <FormRendering
      element={item}
      key={item.id}
      onInputChange={handleInputChange}
    />
  ));

  function backButton() {
    return (
      <div className="button">
        {type > 0 && (
          <button
            type="button"
            onClick={() => {
              setType(type - 1);
            }}
          >
            Previous
          </button>
        )}
        {type < keys.length - 1 && (
          <button
            type="button"
            onClick={() => {
              setType(type + 1);
            }}
          >
            Next
          </button>
        )}
        {type === keys.length - 1 && (
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="App">
      <h3>{keys[type]}</h3>
      <form className="form" onSubmit={handleSubmit}>
        {formBlocks}
        {backButton()}
      </form>

      {submitted && (
        <SubmissionDisplay formDataArray={Object.entries(formValues)} />
      )}
    </div>
  );
}
