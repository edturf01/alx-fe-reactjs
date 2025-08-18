import React from "react";
import RegistrationForm from "./components/RegistrationForm";
import FormikForm from "./components/FormikForm";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <RegistrationForm />
      <FormikForm />
    </div>
  );
}

export default App;
