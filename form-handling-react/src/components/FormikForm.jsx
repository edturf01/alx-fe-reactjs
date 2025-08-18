import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

// Validation schema using Yup
const validationSchema = Yup.object({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

function FormikForm() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    // Mock API simulation
    console.log("User registered (Formik):", values);
    alert("Registration successful with Formik!");
    resetForm();
  };

  return (
    <div className="p-4 max-w-md mx-auto bg-green-100 rounded-lg shadow-md mt-6">
      <h2 className="text-xl font-bold mb-4">Register (Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values, handleChange }) => (
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
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
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
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500 text-sm"
              />
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
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
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
