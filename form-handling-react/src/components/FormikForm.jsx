import React from "react";
import { Formik, Form } from "formik";

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { setErrors, resetForm }) => {
    const newErrors = {};

    // Explicit field checks
    if (!values.username) {
      newErrors.username = "Username is required";
    }
    if (!values.email) {
      newErrors.email = "Email is required";
    }
    if (!values.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);

    // Stop submission if errors exist
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Mock API simulation
    console.log("User registered (Formik):", values);
    alert("Registration successful with Formik!");
    resetForm();
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-green-100 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        {({ values, handleChange, errors }) => (
          <Form className="space-y-3">
            <div>
              <input
                type="text"
                name="username"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </div>

            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={values.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email}</p>
              )}
            </div>

            <div>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
                className="w-full p-2 border rounded"
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white p-2 rounded hover:bg-green-600"
            >
              Register
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormikForm;
