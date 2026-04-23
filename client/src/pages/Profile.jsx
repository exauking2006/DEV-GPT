import React from "react";
import ProfileCard from "../components/profile/ProfileCard";

export default function Profile() {
  const user = {
    name: "User",
    email: "user@gmail.com",
  };

  return <ProfileCard user={user} />;
}
