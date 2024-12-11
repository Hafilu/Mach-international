import React, { useState } from "react";
import LazyLoad from "react-lazyload";
import Button from "../Components/Button";
import banner2 from "../assets/banner2.jpg";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import service4 from "../assets/service4.png";
import service5 from "../assets/service5.png";
import service6 from "../assets/service6.png";
import { XMarkIcon } from "@heroicons/react/24/solid";
import Gallery from "../Components/Gallery";
import CertificationSlider from "../Components/CertificationSlider";
const OurServices = [
  {
    title: "Engineering",
    description:
      "We provide a complete and cost-effective Engineering package to our clients in the Oil & Gas, Marine, Petrochemical, Renewable Energy, Power, Manufacturing, Infrastructure.",
    image_url: service1,
  },
  {
    title: "Second Party & Third Party Inspections",
    description:
      "Second Party (Client/Project Quality representatives) and Third Party (Independent) involves activities performed at Suppliers’/Manufacturers’ facilities  ",
    image_url: service2,
  },
  {
    title: "Shop & Desk Expediting",
    description:
      "Shop & Desk Expediting is performed to assess the status of design, document approvals, material availability, production status and adherence   ",
    image_url: service3,
  },
  {
    title: "Project Management",
    description:
      "We provide Project Management services for executing complex projects in Oil & Gas, Marine, Petrochemical, Renewable Energy, Power, Manufacturing.",
    image_url: service4,
  },
  {
    title: "Procurement Services",
    description:
      "We assist our clients in finding vendors that can reliably deliver results who will also work as trusted partners, who often require a rigorous vetting process. We assemble RFQs/RFPs from vendors ...",
    image_url: service5,
  },
  {
    title: "Vendor Assessments & Audits",
    description:
      "Vendor Assessment (Evaluation) Audits are done by performing a thorough independent assessment of supplier facility",
    image_url: service6,
  },
];

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [modalContent, setModalContent] = useState({});
  const openModal = (id) => {
    setIsModalOpen(true);
    setTimeout(() => setIsTransitioning(true), 10);
    setModalContent(() => {
      return OurServices.find((item) => item.title === id);
    });
  };
  console.log(modalContent);
  const closeModal = () => {
    setIsTransitioning(false);
    setTimeout(() => setIsModalOpen(false), 300);
  };

  return (
    <div>
      <div className="relative">
        <LazyLoad height={200}>
          <img
            src={banner2}
            alt={"banner"}
            className="w-full h-screen object-cover"
          />
        </LazyLoad>
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
        {/* Title and description overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-start flex-1  w-[85%] mx-auto text-white px-4">
          <div className="text-left w-[70%]">
            <p className="text-2xl   capitalize font-figtree">
              What Makes Mach International
            </p>
            <h1 className="text-4xl md:text-7xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
              Our Service Industry Sectors
            </h1>
            <div className="text-[20px] mb-10  capitalize font-figtree">
              Oil & Gas, Marine, Petrochemical, Renewable Energy, Power,
              Manufacturing, Infrastructure and other associated industries.
            </div>

            <Button text={"READ MORE"} to={"/"} />
          </div>
        </div>
      </div>

      <section className="w-[85%] mx-auto py-24">
        <p className="mb-8 md:w-[50%] mx-auto  text-4xl text-center font-bold font-playfair">
          We Provide Exceptionally Reliable Technical Services & Solution.
        </p>
        <p className="font-figtree text-center text-gray-800 text-lg">
          Mach International is a fast-growing customercentric technical
          services and solutions provider, worldwide. We provide exceptionally
          reliable technical services and solutions for Second Party & Third
          Party Inspections, Hazardous Area Inspections, Expediting (Desk &
          Field), Vendor Assessments, Audits, Engineering, Project Management,
          Technical Staffing and Procurement services in Oil & Gas, Marine,
          Petrochemical, Renewable Energy, Power, Manufacturing, Infrastructure
          and other associated industries. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Vel dicta cum, doloribus reprehenderit
          dolores, hic reiciendis optio harum iste voluptatibus blanditiis
          laudantium soluta? Sed consectetur nostrum, cum perspiciatis quasi
          dignissimos!
        </p>
      </section>

      <section className="w-[80%] mx-auto pb-24">
        <p className="mb-12 md:w-[50%] mx-auto  text-4xl text-center font-bold font-playfair">
          Our Services
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2   gap-14">
          {OurServices.map((service, index) => (
            <div key={index}>
              <div className="relative">
                <img
                  src={service.image_url}
                  alt=""
                  className="w-full h-[450px] object-cover"
                />

                <div className="absolute flex flex-col justify-between right-0 top-0 bg-[#FFFFFF] bg-opacity-80 md:w-1/2 w-[80%] h-[450px] p-8 font-playfair ">
                  <div>
                    <h3 className="mb-8 text-2xl">{service.title}</h3>
                    <p className="text-lg text-gray-800">
                      {service.description}
                    </p>{" "}
                  </div>

                  <div className="my-3">
                    <button onClick={() => openModal(service.title)}>
                      <span className="border-black border py-2 px-6 rounded-md text-base font-medium transition-colors duration-300 ease-in-out transform hover:bg-[#104cba] hover:text-white hover:border-[#104cba]  active:opacity-70">
                        READ MORE
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="w-[85%] mx-auto pb-24">
        <p className="mb-16  mx-auto  text-4xl text-center  font-bold font-playfair">
          Our Gallery
        </p>

        <Gallery />
      </section>

      <section className="w-[85%] mx-auto pb-24">
        <p className="mb-16  mx-auto  text-4xl text-center  font-bold font-playfair">
          Licenses and certifications
        </p>

        <CertificationSlider />
      </section>

      {isModalOpen && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-[999] transition-opacity duration-300 ${
            isTransitioning ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`relative bg-white px-10 pb-10 pt-6 rounded-lg max-w-2xl md:w-full w-[80%] max-h-[80vh] overflow-y-auto transition-transform duration-300 ${
              isTransitioning ? "scale-100" : "scale-50"
            }`}
          >
            <button
              className="absolute top-2 right-2 w-8 h-8  text-black"
              onClick={closeModal}
            >
              <XMarkIcon />
            </button>
            <div className="text-center">
              <h2 className="text-2xl mb-6 font-semibold">
                {modalContent.title}
              </h2>
              <img
                src={modalContent.image_url}
                alt=""
                className="h-[200px] w-full rounded-lg object-cover"
              />
              <p className="text-lg text-gray-800 mt-4">
                {modalContent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;
