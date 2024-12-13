import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import contactbg from "../assets/contactbg.jpg";
import CountUp, { useCountUp } from "react-countup";

const ContactSection = () => {
  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    mobile: Yup.string().required("Number is required"),

    message: Yup.string().required("Message is required"),
  });

  const initialValues = { name: "", email: "", message: "", mobile: "" };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };
  const stats = [
    { value: "5", suffix: "K", label: "Field Personnel Worldwide" },
    { value: "100", suffix: "%", label: "Positive Rating" },
  ];
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div
      className="relative bg-cover bg-center  h-max flex items-center justify-center"
      style={{
        backgroundImage: `url(${contactbg})`,
      }}
    >
      {/* Black Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-80"></div>

      {/* Content */}
      <div className="relative z-10   w-[85%] mx-auto  flex flex-col lg:flex-row items-center lg:items-start gap-20 py-24">
        {/* Left Section */}
        <div className="text-white lg:w-[60%]">
          <h2 className="text-4xl font-bold font-playfair mb-10">
            Business Strategies
          </h2>
          <h4 className="text-xl font-semibold   font-figtree mb-6">
            Strategy & Change Management
          </h4>
          <p className="text-base mb-6">
            Research and recognize the emergence of new technologies, which
            would disrupt what had been traditionally a very profitable business
            model, analyze and adopt the same if it enhances the services &
            solutions provided by Mach International
          </p>
          <h4 className="text-xl font-semibold   font-figtree mb-6">
            Research & Analysis
          </h4>
          <p className="text-base mb-6">
            Analyze and consider how the use of new technologies would impact
            the industry and Mach International’s services & business models.
          </p>

          <div className="flex items-center justify-start gap-4 py-8">
            {stats.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="text-center">
                  <h2 className="text-5xl font-bold font-playfair text-[#104cba]">
                    {" "}
                    <CountUp end={stat.value} duration={2} enableScrollSpy />
                    {stat.suffix}
                  </h2>
                  <p className="text-white font-figtree text-base">
                    {stat.label}
                  </p>
                </div>
                {index < stats.length - 1 && (
                  <div className="h-12 border-l border-gray-300 mx-6"></div> // Vertical line
                )}
              </React.Fragment>
            ))}
          </div>
        </div>

        {/* Right Section (Contact Form) */}
        <div className=" lg:p-6 rounded-lg shadow-lg lg:w-[40%]  w-full">
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ isSubmitting }) => (
              <Form className="flex flex-col gap-4 font-figtree">
                <div>
                  <label className="block text-white mb-2" htmlFor="name">
                    Name
                  </label>
                  <Field
                    name="name"
                    type="text"
                    className="w-full p-3 rounded-lg   text-white border  bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="email">
                    Email
                  </label>
                  <Field
                    name="email"
                    type="email"
                    className="w-full p-3 rounded-lg   text-white border   bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="mobile">
                    Mobile
                  </label>
                  <Field
                    name="mobile"
                    type="text"
                    className="w-full p-3 rounded-lg   text-white border   bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="mobile"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <div>
                  <label className="block text-white mb-2" htmlFor="message">
                    Message
                  </label>
                  <Field
                    name="message"
                    as="textarea"
                    rows="3"
                    className="w-full p-3 rounded-lg   text-white border  bg-white bg-opacity-20 backdrop-blur-md focus:outline-none  "
                  />
                  <ErrorMessage
                    name="message"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 bg-[#104cba] text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-300"
                  disabled={isSubmitting}
                >
                  SUBMIT
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
