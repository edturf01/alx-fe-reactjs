import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const formikForm = () => {
  return (
    <Formik
      initialValues={{ name: "", email: "" }}
      validationSchema={Yup.object({
        name: Yup.string().required("Name is required"),
        email: Yup.string().email("Invalid email").required("Email is required"),
      })}
      onSubmit={(values) => {
        console.log("Form Data", values);
      }}
    >
      <Form className="flex flex-col gap-4">
        <div>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" className="border p-2" />
          <ErrorMessage name="name" component="div" className="text-red-500" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Field name="email" type="email" className="border p-2" />
          <ErrorMessage name="email" component="div" className="text-red-500" />
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Submit
        </button>
      </Form>
    </Formik>
  );
};

export default formikForm;
