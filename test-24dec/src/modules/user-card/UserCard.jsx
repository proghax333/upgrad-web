import React from "react";

function UserCard({ name, email }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
        border: "1px solid #ccc",
        padding: "2rem 1rem",
        borderRadius: "0.5rem",
        maxWidth: "28rem",
      }}
    >
      <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>User Details</h3>

      <div>
        <strong>Name: </strong>
        <span>{name}</span>
      </div>

      <div>
        <strong>Email: </strong>
        <span>{email}</span>
      </div>
    </div>
  );
}

export default UserCard;
