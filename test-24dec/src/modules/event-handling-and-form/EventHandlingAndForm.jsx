import { useState } from "react";

function EventHandlingAndForm() {
  const [submittedData, setSubmittedData] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.target).entries());

    setSubmittedData(data);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <form onSubmit={handleSubmit}>
        <h1 style={{ margin: "2rem", textAlign: "center" }}>Form handling</h1>
        <div
          style={{
            padding: "0.5rem 1rem",
            display: "flex",
            flexDirection: "row",
            gap: "0.5rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input
            type="text"
            name="username"
            style={{
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
            }}
            placeholder="Ex. johndoe"
          />
          <button
            type="submit"
            style={{
              border: "1px solid #ccc",
              padding: "0.5rem 1rem",
            }}
          >
            Submit
          </button>
        </div>
      </form>

      <div
        style={{
          width: "100%",
          maxWidth: "28rem",
          margin: "0 auto",
          border: "1px solid #ccc",
          padding: "2rem",
        }}
      >
        <h4 style={{ textAlign: "center", marginBottom: "1rem" }}>
          Submitted Data:
        </h4>

        <div>
          {submittedData &&
            Object.entries(submittedData).map(([key, value]) => {
              return (
                <div>
                  <strong>{key}</strong>: <span>{value}</span>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}

export default EventHandlingAndForm;
