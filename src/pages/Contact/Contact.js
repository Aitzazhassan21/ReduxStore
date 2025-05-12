import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const Contact = () => {
  const [successMsg, setSuccessMsg] = useState("");

  return (
    <div className="max-w-container mx-auto px-4">
      <Breadcrumbs title="Contact" />

      <Formik
        initialValues={{
          clientName: "",
          email: "",
          messages: ""
        }}
        validationSchema={Yup.object({
          clientName: Yup.string().required("Enter your Name"),
          email: Yup.string().email("Enter a valid Email").required("Enter your Email"),
          messages: Yup.string().required("Enter your Messages")
        })}
        onSubmit={(values, { resetForm }) => {
          setTimeout(() => {
            setSuccessMsg(`Thank you dear ${values.clientName}, Your message has been received. Confirmation message on Your Email- ${values.email}, successfully.`);
            setTimeout(() => {
              setSuccessMsg("");
              resetForm(); // Clear the form fields after 30 seconds
            }, 5000); // Clear success message after 30 seconds
          }, 400);
        }}
      >
        {({ isSubmitting }) => (
          <Form className="pb-20">
            <h1 className="font-titleFont font-semibold text-3xl">
              Fill up a Form
            </h1>
            <div className="w-[500px] h-auto py-6 flex flex-col gap-6">
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Name
                </p>
                <Field
                  type="text"
                  name="clientName"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  placeholder="Enter your name here"
                />
                <ErrorMessage name="clientName" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1" />
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Email
                </p>
                <Field
                  type="email"
                  name="email"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor"
                  placeholder="Enter your email here"
                />
                <ErrorMessage name="email" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1" />
              </div>
              <div>
                <p className="text-base font-titleFont font-semibold px-2">
                  Messages
                </p>
                <Field
                  as="textarea"
                  name="messages"
                  className="w-full py-1 border-b-2 px-2 text-base font-medium placeholder:font-normal placeholder:text-sm outline-none focus-within:border-primeColor resize-none"
                  placeholder="Enter your messages here"
                />
                <ErrorMessage name="messages" component="div" className="text-red-500 text-sm font-titleFont font-semibold mt-1 px-2 flex items-center gap-1" />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-44 bg-primeColor text-gray-200 h-10 font-titleFont text-base tracking-wide font-semibold hover:bg-black hover:text-white duration-200"
              >
                {isSubmitting ? "Submitting..." : "Submit"}
              </button>
            </div>
          </Form>
        )}
      </Formik>

      {successMsg && (
        <p className="pb-20 w-96 font-medium text-green-500">{successMsg}</p>
      )}
    </div>
  );
};

export default Contact;

