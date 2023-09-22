import React from "react";

function SubmissionDisplay({ formDataArray }) {
  const app = document.querySelector(".App");
  app.innerHTML = "";
  return (
    <div className="submission-display">
      <h3>Final Submission</h3>
      <div className="submission-data">
        {formDataArray.map(([name, value], index) => (
          <div key={index}>
            <p>
              {name}: {value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SubmissionDisplay;
