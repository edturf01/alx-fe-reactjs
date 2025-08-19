import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";

function Profile() {
  return (
    <div>
      <h2>Profile Page</h2>

      <nav style={{ marginBottom: "1rem" }}>
        <Link to="details" style={{ marginRight: "1rem" }}>Profile Details</Link>
        <Link to="settings">Profile Settings</Link>
      </nav>

      <Routes>
        <Route path="details" element={<ProfileDetails />} />
        <Route path="settings" element={<ProfileSettings />} />
      </Routes>
    </div>
  );
}

export default Profile;