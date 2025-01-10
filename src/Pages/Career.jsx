import React, { useRef } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import Footer from "../Components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { sendCareerData } from "../Api/Api";
import LazyLoad from "react-lazyload";

const Career = ({ footer_info, banner }) => {
  const fileInputRef = useRef(null);
  const validationSchema = Yup.object({
    name: Yup.string()
      .required("Name is required")
      .min(2, "Name must be at least 2 characters"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    coverLetter: Yup.string()
      .required("Cover letter is required")
      .min(10, "Cover letter must be at least 10 characters"),
    resume: Yup.mixed()
      .required("Resume is required")
      .test(
        "fileSize",
        "File size must be less than 5MB",
        (value) => value && value.size <= 5 * 1024 * 1024
      )
      .test(
        "fileType",
        "Unsupported file format. Upload PDF or DOCX",
        (value) =>
          value &&
          [
            "application/pdf",
            "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
          ].includes(value.type)
      ),
  });

  const handleSubmit = async (
    values,
    { setSubmitting, resetForm, setFieldValue }
  ) => {
    try {
      const formData = new FormData();
      formData.append("name", values.name);
      formData.append("email", values.email);
      formData.append("coverLetter", values.coverLetter);
      formData.append("resume", values.resume);

      // Call your API function
      const message = await sendCareerData(formData);
      toast.success(`Application submitted successfully.`);
      resetForm(); // Reset the form after successful submission
      setFieldValue("resume", null);
      if (fileInputRef.current) {
        fileInputRef.current.value = ""; // Clear the file input field
      }
      console.log(values);
    } catch (error) {
      toast.error("Failed to submit the application.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="font-figtree">
      {banner && (
        <div className="relative">
          <LazyLoad height={200}>
            <img
              src={banner.banner_url}
              alt={"banner"}
              className="w-full h-screen object-cover"
            />
          </LazyLoad>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
          {/* Title and description overlay */}
          <div className="absolute inset-0 flex flex-col justify-center items-start flex-1  w-[85%] mx-auto text-white  ">
            <div className="text-left lg:w-[70%] w-[90%]">
              <p className="text-2xl   capitalize font-figtree">
                {banner.banner_short_title}
              </p>
              <h1 className="text-4xl md:text-7xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
                {banner.banner_title}
              </h1>
              <div className="text-[20px] mb-10  capitalize font-figtree">
                {banner.banner_sub_title}
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="py-24">
        <div className="w-[85%] mx-auto max-w-screen-xl border-[1px] border-solid p-10 bg-white rounded-lg shadow-md">
          <h1 className="text-2xl uppercase mb-6 font-bold  ">
            Job Application
          </h1>
          <Formik
            initialValues={{
              name: "",
              email: "",
              coverLetter: "",
              resume: null,
            }}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({ setFieldValue, isSubmitting }) => (
              <Form className="space-y-4">
                {/* Name Field */}
                <div>
                  <label
                    htmlFor="name"
                    className="block   font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Enter your name..."
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="block   font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter your email..."
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Cover Letter Field */}
                <div>
                  <label
                    htmlFor="coverLetter"
                    className="block  font-medium text-gray-700"
                  >
                    Cover Letter
                  </label>
                  <Field
                    as="textarea"
                    name="coverLetter"
                    id="coverLetter"
                    rows="5"
                    placeholder="Enter your cover letter..."
                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                  />
                  <ErrorMessage
                    name="coverLetter"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Resume Upload */}
                <div>
                  <label
                    htmlFor="resume"
                    className="block  font-medium text-gray-700"
                  >
                    Resume
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    ref={fileInputRef}
                    className="mt-1 block file:cursor-pointer w-max text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
                    onChange={(event) =>
                      setFieldValue("resume", event.currentTarget.files[0])
                    }
                  />
                  <ErrorMessage
                    name="resume"
                    component="div"
                    className="text-red-500 text-sm mt-1"
                  />
                </div>

                {/* Submit Button */}
                <div className="text-end">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-max py-2 px-4     bg-[#104cba] text-white rounded-lg shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  >
                    {isSubmitting ? "Submitting..." : "Submit Application"}
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      {footer_info && (
        <Footer data={footer_info?.site_info} menu={footer_info?.menus} />
      )}
      <ToastContainer />
    </div>
  );
};

export default Career;
