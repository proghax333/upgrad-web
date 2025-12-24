import React from "react";
import UserCard from "./UserCard";

function UserCardPage() {
  const name = "John Doe";
  const email = "johndoe@mail.mail";

  return (
    <div style={{ padding: "1rem" }}>
      <UserCard name={name} email={email} />
    </div>
  );
}

export default UserCardPage;
