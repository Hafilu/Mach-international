import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import mission from "../assets/mission.jpg";
import vision from "../assets/vision.jpg";
import core from "../assets/core.jpg";
import values from "../assets/values.jpg";
import about from "../assets/about.jpg";
import stand from "../assets/standout.jpg";
import inspection from "../assets/inspection.jpg";
import construction from "../assets/construction.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LazyLoad from "react-lazyload";
import Button from "../Components/Button";
import CountUp, { useCountUp } from "react-countup";
import ServiceCard from "../Components/ServiceCard";
import ContactSection from "../Components/Contact";
import AddressCard from "../Components/AddressCard";
import Footer from "../Components/Footer";

const banners = [
  {
    id: 1,
    imgUrl: banner3,
    title: "",
    heading: "Welcome To Mach International",
    description:
      "Your reliable partner for technical services & solutions, worldwide.",
  },
  {
    id: 2,
    imgUrl: banner2,
    title: "What Makes Mach International",
    heading: "Our Service Industry Sectors",
    description:
      "Oil & Gas, Marine, Petrochemical, Renewable Energy, Power, Manufacturing, Infrastructure and other associated industries.",
  },
  {
    id: 3,
    imgUrl: banner1,
    title: "What Makes Mach International",
    heading: "Distinct From Competitors?",
    description:
      "Our customer-centric ideals, proactive approach and commitment makes us stand out amidst competition. We assure complete peace and serenity to our customers through our distinct and unique operations methodology.",
  },
];

const Ourvalues = [
  "Customer Service Excellence",
  "Community and Environment",
  "Alignment and Accountability",
  "Teamwork",
  "Balance",
  "Integrity",
  "Passion for Results",
  "Respect",
  "Long-Term View",
  "Innovation",
  "Growth",
  "Accountability",
];

const addresses = [
  {
    flag: "https://flagcdn.com/ca.svg", // Canada Flag URL
    country: "Canada",
    address: `Mach International
500 Stone Church Road East
Hamilton L8W3X5
ON, Canada`,
  },
  {
    flag: "https://flagcdn.com/us.svg", // USA Flag URL
    country: "USA",
    address: `Mach International
B12, Wilmington,
28401, North Carolina
United States of America`,
  },
  {
    flag: "https://flagcdn.com/gb.svg", // UK Flag URL
    country: "UK",
    address: `Mach International
Mere End, Knutsford,
WA 16 6QU, Manchester,
United Kingdom`,
  },
  {
    flag: "https://flagcdn.com/my.svg", // Malaysia Flag URL
    country: "Malaysia",
    address: `Mach International
Taman Sri Andalas
41200 Klang,
Selangor, Malaysia`,
  },
  {
    flag: "https://flagcdn.com/au.svg", // Australia Flag URL
    country: "Australia",
    address: `Mach International
2/21 Station RD
Oak Park 3046,
Melbourne, Australia`,
  },
  {
    flag: "https://flagcdn.com/om.svg", // Oman Flag URL
    country: "Oman",
    address: `Mach International
Sohar,
Postal Code: 311
Sultanate of Oman`,
  },
  {
    flag: "https://flagcdn.com/in.svg", // India Flag URL
    country: "India",
    address: `Mach International
Crimson Layout
Krishnakuteeer Road,
Whitefield, Bengaluru, India`,
  },
];
const Home = () => {
  useCountUp({
    ref: "counter",
    end: 1234567,
    enableScrollSpy: true,
    scrollSpyDelay: 1000,
  });
  return (
    <div>
      <div className="carousel-wrapper relative">
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          stopOnHover={false}
          showIndicators={false}
          showStatus={false}
          showArrows={false}
          interval={3000}
          swipeable={true}
          emulateTouch={true}
        >
          {banners.map((banner, index) => (
            <div key={index} className="relative">
              <LazyLoad height={200}>
                <img
                  src={banner.imgUrl}
                  alt={banner.title}
                  className="w-full h-screen object-cover"
                />
              </LazyLoad>
              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
              {/* Title and description overlay */}
              <div className="absolute inset-0 flex flex-col justify-center items-start flex-1  w-[85%] mx-auto text-white px-4">
                <div className="text-left w-[70%]">
                  <p className="text-[20px]   capitalize font-figtree">
                    {banner.title}
                  </p>
                  <h1 className="text-4xl md:text-8xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
                    {banner.heading}
                  </h1>
                  <div
                    className="text-[20px] mb-10  capitalize font-figtree"
                    dangerouslySetInnerHTML={{
                      __html: banner.description,
                    }}
                  />

                  <Button text={"READ MORE"} to={"/"} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>

      <section className="bg-gray-100 py-24">
        <div className="w-[85%] mx-auto  ">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-14">
            {/* Left Section */}
            <div className="md:w-1/2 about-style-four">
              <h2 className="text-3xl font-bold font-figtree text-[#104cba]">
                ABOUT US
              </h2>
              <p className="my-8  text-5xl font-bold font-playfair">
                We Provide Exceptionally Reliable Technical Services & Solution.
              </p>
              <p className="font-figtree text-lg">
                Mach International is a fast-growing customercentric technical
                services and solutions provider, worldwide. We provide
                exceptionally reliable technical services and solutions for
                Second Party & Third Party Inspections, Hazardous Area
                Inspections, Expediting (Desk & Field), Vendor Assessments,
                Audits, Engineering, Project Management, Technical Staffing and
                Procurement services in Oil & Gas, Marine, Petrochemical,
                Renewable Energy, Power, Manufacturing, Infrastructure and other
                associated industries.
              </p>

              <ul className="font-figtree mt-10">
                <li>Distinct &amp; Unique Operations Methodology</li>
                <li>Efficient &amp; Cost Effective</li>
                <li>100% Client Satisfaction</li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2">
              <div className="w-[80%] ml-auto">
                <img
                  src={about}
                  alt="Business Representation"
                  className="w-full h-[400px] object-cover rounded-lg shadow-lg"
                />
                <div className="mt-16  font-figtree  grid grid-cols-6 md:grid-cols-2   gap-10   text-center">
                  {/* Statistic Item */}
                  <div>
                    <h3 className="text-4xl font-bold mb-2  text-gray-800">
                      <CountUp end={120} duration={2} enableScrollSpy />+
                    </h3>
                    <p className="text-gray-600 text-lg">Clients</p>
                  </div>
                  {/* Statistic Item */}
                  <div>
                    <h3 className="text-4xl font-bold mb-2 text-gray-800">
                      <CountUp end={50} duration={2} enableScrollSpy />+
                    </h3>
                    <p className="text-gray-600 text-lg">Partners</p>
                  </div>
                  {/* Statistic Item */}
                  <div>
                    <h3 className="text-4xl font-bold mb-2 text-gray-800">
                      <CountUp end={300} duration={2} enableScrollSpy />%
                    </h3>
                    <p className="text-gray-600 text-lg">Growth</p>
                  </div>
                  {/* Statistic Item */}
                  <div>
                    <h3 className="text-4xl font-bold mb-2 text-gray-800">
                      <CountUp end={15} duration={2} enableScrollSpy />+
                    </h3>
                    <p className="text-gray-600 text-lg">Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="w-[80%] mx-auto pb-24 pt-20 ">
        <h2 className=" text-5xl font-bold font-playfair text-center mb-16">
          Our Company Culture
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3  ">
          {/* Card 1 - Mission */}
          <div className="flex flex-col items-center  ">
            <div className="   p-8 text-justify bg-red-900">
              <h3 className="text-3xl font-bold font-playfair text-white   mt-8">
                Our Mission
              </h3>
              <p className="text-white py-6 text-lg font-figtree">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consequuntur ut enim soluta, placeat animi vel pariatur
                delectus, labore natus illum id eligendi magni dolorem
                distinctio, laudantium beatae temporibus quas!
              </p>
            </div>
            <div className="w-full  ">
              <img
                src={mission}
                alt="Mission Illustration"
                className=" w-full h-[350px] object-cover"
              />
            </div>
          </div>

          {/* Card 2 - Vision */}
          <div className="flex flex-col items-center ">
            <div className="w-full  ">
              <img
                src={vision}
                alt="Vision Illustration"
                className="w-full h-[350px]  object-cover"
              />
            </div>
            <div className=" p-8 text-justify bg-orange-700  ">
              <h3 className="text-3xl font-bold font-playfair text-white   mt-8">
                Our Vision
              </h3>
              <p className="text-white py-6 text-lg font-figtree">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consequuntur ut enim soluta, placeat animi vel pariatur
                delectus, labore natus illum id eligendi magni dolorem
                distinctio, laudantium beatae temporibus quas!
              </p>
            </div>
          </div>

          {/* Card 3 - Values */}
          <div className="flex flex-col items-center ">
            <div className=" p-8 text-justify bg-sky-700  ">
              <h3 className="text-3xl font-bold font-playfair text-white   mt-8">
                Our Values
              </h3>
              <p className="text-white py-6 text-lg font-figtree">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                consequuntur ut enim soluta, placeat animi vel pariatur
                delectus, labore natus illum id eligendi magni dolorem
                distinctio, laudantium beatae temporibus quas!
              </p>
            </div>
            <div className="w-full  ">
              <img
                src={values}
                alt="Values Illustration"
                className="w-full h-[350px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-24">
        {" "}
        <h2 className=" text-5xl font-bold font-playfair text-center mx-auto md:w-[60%] mb-16">
          What makes Mach International distinct from competitors?
        </h2>
        <div className="w-[85%] mx-auto flex justify-between items-center gap-10 about-style-four ">
          <div className="md:w-1/2">
            <img
              src={stand}
              alt="Business Representation"
              className="w-[85%] h-[400px] object-cover rounded-lg shadow-lg"
            />
          </div>

          <div className="md:w-1/2">
            <ul className="font-figtree ">
              <li>Valued technical expertise across industries</li>
              <li>Maximized value for cost</li>
              <li>
                Global Coverage through branch offices and associated offices
                worldwide, even at remote locations
              </li>
              <li>Exhaustive commodity experience</li>
              <li>Value added services of dedicated Technical Team</li>
              <li>Support Services &amp; On Job Consultation</li>
              <li>
                We value open and honest communication, and strive to support
                our clients to achieve their goals
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="w-[80%] mx-auto py-24">
        <h2 className=" text-5xl font-bold font-playfair text-center mx-auto md:w-[60%] mb-16">
          Here’s what Mach International provides.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-20">
          <ServiceCard
            src={inspection}
            title={"3rd Party Inspection"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur ut enim soluta, placeat animi vel pariatur delectus, labore natus illum id eligendi magni dolorem  distinctio, laudantium beatae temporibus quas!"
            }
          />
          <ServiceCard
            src={construction}
            title={"Construction"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur ut enim soluta, placeat animi vel pariatur delectus, labore natus illum id eligendi magni dolorem  distinctio, laudantium beatae temporibus quas!"
            }
          />
        </div>
      </section>

      <section className="py-24 bg-gray-100">
        <div className="w-[80%] mx-auto">
          <h2 className=" text-5xl font-bold font-playfair text-center mx-auto md:w-[60%] mb-16">
            Our Core Values
          </h2>

          <div className="w-[60%] mx-auto">
            <img
              src={core}
              alt=""
              className="w-full h-[400px]  object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="flex flex-wrap gap-6 justify-center pt-16 px-6">
            {Ourvalues.map((value, index) => (
              <div
                key={index}
                className="px-6 py-2 border border-black rounded-full   text-lg font-figtree font-semibold transition-all duration-300 hover:bg-[#104cba] hover:border-[#104cba] hover:text-white"
              >
                {value}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section>
        <ContactSection />
      </section>

      <section className="w-[85%] mx-auto py-24">
        <h2 className=" text-5xl font-bold font-playfair text-center mx-auto md:w-[60%] mb-16">
          Our Branches
        </h2>
        <AddressCard addresses={addresses} />
      </section>

      <section>
        <div className="relative w-full h-[450px]">
          {/* Embedded Google Map */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14425.805545021738!2d55.4885815!3d25.32263!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f5f5df14e533d%3A0x73cc61cd6d65a7e3!2sSharjah%20Research%20Technology%20and%20Innovation%20Park!5e0!3m2!1sen!2sin!4v1733476385069!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>

          {/* Address Card */}
          <div className="absolute top-4 right-4 bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-playfair font-bold mb-2">
              Head Office
            </h2>
            <div className="font-figtree">
              <p>Mach International (FZE)</p>
              <p>
                Block B - B14 -114, Sharjah Research Technology & Innovation
                Park (SRTIP)
              </p>
              <p>P.O. Box 124510, Sharjah, United Arab Emirates</p>
              <p>
                <span className="font-bold">Ph:</span> +971 6 543 6774
              </p>
              <p>
                <span className="font-bold">Mob:</span> +971 556 7500 19
              </p>
              <p>
                <span className="font-bold">Mail:</span>{" "}
                <a
                  href="mailto:info@machintl.com"
                  className="text-blue-500 hover:underline"
                >
                  info@machintl.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
