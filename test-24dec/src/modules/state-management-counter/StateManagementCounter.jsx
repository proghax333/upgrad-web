import { useState } from "react";

function StateManagementCounter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((c) => c + 1);
  };

  const handleDecrement = () => {
    setCount((c) => c - 1);
  };

  return (
    <div>
      <h1 style={{ textAlign: "center", margin: "3rem 0rem 0rem" }}>
        A simple counter
      </h1>

      <div
        style={{
          padding: "2rem 1rem",
          display: "flex",
          flexDirection: "row",
          gap: "0.5rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "black",
            color: "white",
            outlineColor: "blue",
          }}
          onClick={handleDecrement}
        >
          Decrement -
        </button>
        <p style={{ fontWeight: "bold", fontSize: "1.5rem", margin: "0 2rem" }}>
          {count}
        </p>
        <button
          style={{
            padding: "0.5rem 1rem",
            background: "black",
            color: "white",
            outlineColor: "blue",
          }}
          onClick={handleIncrement}
        >
          Increment +
        </button>
      </div>
    </div>
  );
}

export default StateManagementCounter;
