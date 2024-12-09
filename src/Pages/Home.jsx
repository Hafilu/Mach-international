import React from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import missionbg from "../assets/missionbg.jpg";
import insta from "../assets/insta.png";
import linkdin from "../assets/linkdin.png";
import x from "../assets/twitter.png";
import fb from "../assets/fb.png";
import core from "../assets/core.jpg";
import corebg from "../assets/business.jpg"
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
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
  { title: "Customer Service Excellence", text: "Duis aute irure dolor in." },
  { title: "Sustainability", text: "Duis aute irure dolor in." },
  { title: "Empowerment", text: "Duis aute irure dolor in." },
  { title: "Integrity", text: "Duis aute irure dolor in." },
 
  { title: "Accountability", text: "Duis aute irure dolor in." },
  { title: "Transparency", text: "Duis aute irure dolor in." },
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

  const sliderSettings = {
    dots: false,
    infinite: true,

    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
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
                  <h1 className="text-4xl md:text-7xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
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
              <h2 className="text-2xl font-bold font-figtree text-[#104cba]">
                ABOUT US
              </h2>
              <p className="my-8  text-4xl font-bold font-playfair">
                We Provide Exceptionally Reliable Technical Services & Solution.
              </p>
              <p className="font-figtree text-gray-800 text-lg">
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

              <ul className="font-figtree text-gray-800 mt-10">
                <li>Distinct &amp; Unique Operations Methodology</li>
                <li>Efficient &amp; Cost Effective</li>
                <li>100% Client Satisfaction</li>
              </ul>
            </div>

            {/* Right Section */}
            <div className="md:w-1/2 ">
              <div className="w-[80%] ml-auto relative">
                <img
                  src="https://img.freepik.com/free-photo/construction-site-silhouettes_1127-3253.jpg?t=st=1733738896~exp=1733742496~hmac=ecb0df6018f757857eb00a4fc20443ef8b32a9ebb27e2208a4eb730bf6493c66&w=900"
                  alt="Business Representation"
                  className="w-full h-[600px] object-cover rounded-lg shadow-lg "
                />
                
                <div className="mt-12  font-figtree w-[80%]  grid grid-cols-6 md:grid-cols-2 absolute bottom-[50px] left-1/2 transform -translate-x-1/2 gap-6   text-center">
                  {/* Statistic Item */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-md  rounded-lg p-5">
                    <h3 className="text-4xl font-bold mb-2  text-white">
                      <CountUp end={120} duration={2} enableScrollSpy />+
                    </h3>
                    <p className="text-white text-lg">Clients</p>
                  </div>
                  {/* Statistic Item */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-md  rounded-lg p-5">
                    <h3 className="text-4xl font-bold mb-2 text-white">
                      <CountUp end={50} duration={2} enableScrollSpy />+
                    </h3>
                    <p className="text-white text-lg">Partners</p>
                  </div>
                  {/* Statistic Item */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-md  rounded-lg p-5">
                    <h3 className="text-4xl font-bold mb-2 text-white">
                      <CountUp end={300} duration={2} enableScrollSpy />%
                    </h3>
                    <p className="text-white text-lg">Growth</p>
                  </div>
                  {/* Statistic Item */}
                  <div className="bg-white bg-opacity-20 backdrop-blur-md  rounded-lg p-5">
                    <h3 className="text-4xl font-bold mb-2 text-white">
                      <CountUp end={15} duration={2} enableScrollSpy />+
                    </h3>
                    <p className="text-white text-lg">Awards</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div
        className="py-24 relative"
        style={{
          backgroundImage: `url(${missionbg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Black Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>
        <div className="relative z-10  ">
          <div className="  bg-cover bg-center flex items-center justify-center">
            <div className="w-[85%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 ">
              {/* Left Section */}
              <div className="md:w-[70%]  ">
                <Slider {...sliderSettings}>
                  <div className="px-3">
                    <div className="bg-gray-800  p-10   text-white font-playfair rounded-lg shadow-md">
                      <div>
                        <h2 className="text-3xl font-bold  uppercase mb-4">
                          Our Mission
                        </h2>
                        <p className="text-lg">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas dolor illo quia sed quisquam sint accusamus
                          fugit deserunt harum quis impedit est, voluptatibus
                          
                        </p>
                        <p className="mt-2 mb-8 text-lg">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas dolor illo quia sed quisquam sint accusamus
                           
                        </p>

                        <Button text={"READ MORE"} to={"/"} />
                      </div>
                    </div>
                  </div>

                  <div className="px-3">
                    <div className="bg-gray-800  p-10  font-playfair text-white rounded-lg shadow-md">
                      <div>
                        <h2 className="text-3xl font-bold  uppercase mb-4">
                          Our vission
                        </h2>
                        <p className="text-lg">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas dolor illo quia sed quisquam sint accusamus
                          fugit deserunt harum quis impedit est, voluptatibus
                           
                        </p>
                        <p className="mt-2 mb-8 text-lg">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas dolor illo quia sed quisquam sint accusamus
                         
                        </p>

                        <Button text={"READ MORE"} to={"/"} />
                      </div>
                    </div>
                  </div>
                  <div className="px-3">
                    <div className="bg-gray-800  p-10  font-playfair text-white rounded-lg shadow-md">
                      <div>
                        <h2 className="text-3xl font-bold  uppercase mb-4">
                          Our values
                        </h2>
                        <p className="text-lg">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas dolor illo quia sed quisquam sint accusamus
                          fugit deserunt harum quis impedit est, voluptatibus
                          
                        </p>
                        <p className="mt-2 mb-8 text-lg">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Quas dolor illo quia sed quisquam sint accusamus
                           
                        </p>

                        <Button text={"READ MORE"} to={"/"} />
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>

              {/* Right Section */}
              <div className="flex items-end justify-end flex-col  font-playfair text-white p-6 rounded-lg shadow-md">
                <p className="text-5xl font-medium text-center">
                  The Future Is Here
                </p>
                <p className="text-right text-lg py-10">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Dolore, laudantium delectus veritatis nemo magnam labore
                  asperiores! Modi ipsum dolores cupiditate unde.{" "}
                </p>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="   flex items-center justify-center w-[30px] h-[30px] rounded-full bg-white  text-[#00235a]  "
                  >
                    <img src={fb} alt="" />
                  </a>
                  <a
                    href="#"
                    className="  p-2  flex items-center justify-center  w-[30px] h-[30px] rounded-full bg-white   text-[#00235a]  "
                  >
                    <img src={insta} alt="" />
                  </a>
                  <a
                    href="#"
                    className="   p-2  flex items-center justify-center   w-[30px] h-[30px] rounded-full bg-white  text-[#00235a]  "
                  >
                    <img src={x} alt="" />
                  </a>
                  <a
                    href="#"
                    className="   p-2 flex items-center justify-center  w-[30px] h-[30px] rounded-full bg-white   text-[#00235a]  "
                  >
                    <img src={linkdin} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="bg-gray-100 py-24">
        {" "}
        <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[50%] mb-16">
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
            <ul className="font-figtree text-gray-800">
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
        <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[50%] mb-16">
          Here’s what Mach International provides.
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center gap-20">
          <ServiceCard
            src={inspection}
            title={"TECHNICAL SERVICES"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur ut enim soluta, placeat animi vel pariatur delectus, labore natus illum id eligendi magni dolorem  distinctio, laudantium beatae temporibus quas!"
            }
          />
          <ServiceCard
            src={construction}
            title={"MACH INFRA"}
            desc={
              " Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum consequuntur ut enim soluta, placeat animi vel pariatur delectus, labore natus illum id eligendi magni dolorem  distinctio, laudantium beatae temporibus quas!"
            }
          />
        </div>
      </section>

      <section className="pb-24 bg-gray-100">
        <div className="relative">
          <img src={core} alt="" className="w-full h-[450px]  object-cover" />{" "}
          <div className="w-[75%] bg-white rounded-lg shadow-md absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 z-10"  style={{
          backgroundImage: `url(${corebg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}>
            <h2 className=" text-4xl font-bold font-playfair text-center   py-10">
              Our Core Values
            </h2>
            <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-16 pb-10">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Id deleniti a
              molestiae fuga expedita, qui sunt illo perferendis eaque nam
              nostrum quibusdam dicta reprehenderit magni officiis, vitae
              asperiores similique ipsam. Dolores molestiae in distinctio!
              Itaque delectus laborum enim ipsum porro? Tempore totam quos
              officia reiciendis voluptate minus, sunt vitae modi error harum?
            </p>
          </div>
        </div>
        <div className="w-[85%] mx-auto mt-[200px]">
         
            <div className="grid grid-cols-1 md:grid-cols-2    w-[70%] mx-auto gap-y-10 gap-x-20   ">
              {Ourvalues.map((value, index) => (
                <div key={index} className="flex items-start">
                  {/* Icon */}
                  <div className="text-2xl text-[#104cba] mr-4">➤</div>
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-lg font-playfair text-gray-800">{value.text}</p>
                  </div>
                </div>
              ))}
            </div>
         
        </div>
      </section>

      <section>
        <ContactSection />
      </section>

      <section className="w-[85%] mx-auto py-24">
        <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[60%] mb-16">
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
            <div className="font-figtree text-gray-800">
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
