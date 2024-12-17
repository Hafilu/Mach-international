import React, { useEffect, useState } from "react";
import banner1 from "../assets/banner1.jpg";
import banner2 from "../assets/banner2.jpg";
import banner3 from "../assets/banner3.jpg";
import mission from "../assets/mission.png";
import vission from "../assets/vission.png";
import value from "../assets/value.png";
import map from "../assets/map.png";
import core from "../assets/core.jpg";
import corebg from "../assets/business.jpg";

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
import Loader from "../Components/Loader";
import { fetchHomeData } from "../Api/Api";
import MetaHelmet from "../Components/MetaData";

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
  const [data, setData] = useState(null);

  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      try {
        const result = await fetchHomeData();

        setData(result);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        console.error("Error fetching home data:", error);
      }
    };

    loadData();
  }, []);

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

  function splitIntoTwoWords(input) {
    // Check if the input contains a space
    if (input.includes(" ")) {
      return input.split(" ", 2); // Split into an array of two words
    }
    return [input]; // Return the input as an array with a single word if no space
  }

  if (isLoading) {
    return <Loader />;
  }
  return (
    <div>
      {data && <MetaHelmet metaData={data.meta_data} />}
      {data?.homeBanner?.length > 0 && (
        <div className="carousel-wrapper relative" id="home">
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            stopOnHover={false}
            showIndicators={false}
            showStatus={false}
            showArrows={false}
            interval={3000}
            swipeable={false}
            emulateTouch={true}
          >
            {data.homeBanner.map((banner, index) => (
              <div key={banner.id} className="relative">
                <LazyLoad height={200}>
                  <img
                    src={banner.banner_url}
                    alt={banner.title}
                    className="w-full h-screen object-cover"
                  />
                </LazyLoad>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/60 to-black/80"></div>
                {/* Title and description overlay */}
                <div className="absolute inset-0 flex flex-col justify-center items-start flex-1  w-[85%] mx-auto text-white ">
                  <div className="text-left lg:w-[70%] w-[90%]">
                    <p className="text-[20px]   capitalize font-figtree">
                      {banner.sub_title}
                    </p>
                    <h1 className="text-4xl md:text-7xl capitalize mb-[30px] mt-[20px] font-bold font-playfair ">
                      {banner.title}
                    </h1>
                    <div
                      className="text-[20px] mb-10  capitalize font-figtree"
                      dangerouslySetInnerHTML={{
                        __html: banner.description,
                      }}
                    />

                    <Button text={banner.button_text} to={banner.button_url} />
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      )}

      {data?.aboutUs && (
        <section className="bg-gray-100 py-24" id="about-us">
          <div className="w-[85%] mx-auto  ">
            <div className="flex flex-col lg:flex-row items-center md:items-start gap-14">
              {/* Left Section */}
              <div className="lg:w-1/2 about-style-four">
                <h2 className="text-2xl font-bold font-figtree text-[#104cba]">
                  {data.aboutUs.title}
                </h2>
                <p className="my-8  text-4xl font-bold font-playfair">
                  {data.aboutUs.sub_title}
                </p>
                <p className="font-figtree text-gray-800 text-lg">
                  <div
                    dangerouslySetInnerHTML={{
                      __html: data.aboutUs.description,
                    }}
                  />
                </p>
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.aboutUs.alternate_description,
                  }}
                />
              </div>

              {/* Right Section */}
              <div className="lg:w-1/2 ">
                <div className="lg:w-[80%] w-full ml-auto relative">
                  <img
                    src={data.aboutUs.key_feature_bg_image_url}
                    alt="Business Representation"
                    className="w-full md:h-[550px] h-[400px]  object-cover rounded-lg shadow-lg "
                  />

                  <div className="mt-12  font-figtree w-[80%]  grid  grid-cols-2 absolute bottom-[50px] left-1/2 transform -translate-x-1/2 gap-6   text-center">
                    {/* Statistic Item */}
                    {data?.keyFeatures?.map((item) => (
                      <div className="bg-white bg-opacity-20 backdrop-blur-md  rounded-lg p-5" key={item.id}>
                        <h3 className="text-4xl font-bold mb-2  text-white">
                          <CountUp
                            end={item.count}
                            duration={2}
                            enableScrollSpy
                          />
                          {item.symbol}
                        </h3>
                        <p className="text-white text-lg">{item.title}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {data?.missionVisionValue && (
        <section className=" w-[85%] mx-auto py-24">
          <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[50%] mb-16">
            {data.missionVisionValue.main_title}
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-3   ">
            <div className="flex justify-center flex-col items-center pt-3   hover:bg-[#eaf3ff] hover:shadow-lg transition duration-300">
              <img
                src={data.missionVisionValue.mission_image_url}
                alt=""
                className="w-[80px] h-[80px] object-cover"
              />

              <h2 className="text-2xl font-bold font-figtree mt-6 uppercase">
                {splitIntoTwoWords(data.missionVisionValue.mission_title)[0]}{" "}
                <span className="text-[#104cba]">
                  {splitIntoTwoWords(data.missionVisionValue.mission_title)[1]}
                </span>
              </h2>
              <div className="flex items-center justify-center  py-6 ">
                <div className="flex items-center space-x-1">
                  <div className="border-t border-[#104cba] w-20"></div>
                  <span className="text-[#104cba] text-lg">★</span>
                  <div className="border-t border-[#104cba] w-20"></div>
                </div>
              </div>

              <img
                src={data.missionVisionValue.mission_image_url}
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-8 py-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.missionVisionValue.mission,
                  }}
                />
              </p>
            </div>

            <div className="flex justify-center flex-col items-center pt-3   hover:bg-[#eaf3ff] hover:shadow-lg transition duration-300">
              <div className="w-full flex justify-center flex-col items-center lg:border-x-2 border-gray-500">
                <img
                  src={data.missionVisionValue.vision_image_url}
                  alt=""
                  className="w-[90px] h-[90px] object-cover "
                />

                <h2 className="text-2xl font-bold font-figtree mt-6 uppercase">
                  {splitIntoTwoWords(data.missionVisionValue.vision_title)[0]}{" "}
                  <span className="text-[#104cba]">
                    {splitIntoTwoWords(data.missionVisionValue.vision_title)[1]}
                  </span>
                </h2>
              </div>
              <div className="flex items-center justify-center  py-6 ">
                <div className="flex items-center space-x-1">
                  <div className="border-t border-[#104cba] w-20"></div>
                  <span className="text-[#104cba] text-lg">★</span>
                  <div className="border-t border-[#104cba] w-20"></div>
                </div>
              </div>
              <div className="w-full flex justify-center flex-col items-center lg:border-x-2 border-gray-500">
                <img
                  src={data.missionVisionValue.vision_image_url}
                  alt=""
                  className="w-[30px] h-[30px] object-cover"
                />
              </div>
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-8 py-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.missionVisionValue.vision,
                  }}
                />
              </p>
            </div>

            <div className="flex justify-center flex-col items-center pt-3   hover:bg-[#eaf3ff] hover:shadow-lg transition duration-300">
              <img
                src={data.missionVisionValue.our_value_image_url}
                alt=""
                className="w-[90px] h-[90px] object-cover"
              />

              <h2 className="text-2xl font-bold font-figtree mt-6 uppercase">
                {splitIntoTwoWords(data.missionVisionValue.our_values_title)[0]}{" "}
                <span className="text-[#104cba]">
                  {
                    splitIntoTwoWords(
                      data.missionVisionValue.our_values_title
                    )[1]
                  }
                </span>
              </h2>
              <div className="flex items-center justify-center  py-6 ">
                <div className="flex items-center space-x-1">
                  <div className="border-t border-[#104cba] w-20"></div>
                  <span className="text-[#104cba] text-lg">★</span>
                  <div className="border-t border-[#104cba] w-20"></div>
                </div>
              </div>

              <img
                src={data.missionVisionValue.our_value_image_url}
                alt=""
                className="w-[30px] h-[30px] object-cover"
              />
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 px-8 py-6">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.missionVisionValue.our_values,
                  }}
                />
              </p>
            </div>
          </div>
        </section>
      )}

      {data?.specialities?.length > 0 && (
        <section className="bg-gray-100 py-24">
          {" "}
          <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[50%] w-[85%] mb-16">
            {data?.specialityContent?.title}
          </h2>
          <div className="w-[85%] mx-auto flex justify-between items-center md:flex-row flex-col  gap-10 about-style-four ">
            <div className="md:w-1/2">
              <img
                src={data?.specialityContent?.image_url}
                alt="Business Representation"
                className="lg:w-[85%] h-[400px] object-cover rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-1/2">
              <ul className="font-figtree text-gray-800">
                {data?.specialities?.map((item) => (
                  <li key={item.id}>{item.title}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      )}

      {data?.specialities?.length > 0 && (
        <section className="lg:w-[80%] w-[85%] mx-auto py-24">
          <h2 className=" text-4xl font-bold font-playfair text-center mx-auto lg:w-[50%] w-[85%] mb-16">
           {data?.siteData?.home_service_heading}
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center lg:gap-20 gap-6">
            {data?.services?.map((item) => (
              <ServiceCard
                key={item.id}
                src={item.thumbnail_image_url}
                title={item.title}
                desc={item.short_description}
                id={item.short_url}
              />
            ))}
          </div>
        </section>
      )}

      {data?.corevalueContent && (
        <section className="pb-24 bg-gray-100" id="core-value">
          <div className="relative">
            <img
              src={data.corevalueContent.image_url}
              alt=""
              className="w-full h-[450px]  object-cover"
            />{" "}
            <div
              className="md:w-[75%] w-[85%] bg-white rounded-lg shadow-md absolute bottom-[-150px] left-1/2 transform -translate-x-1/2 z-10"
              style={{
                backgroundImage: `url(${corebg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <h2 className=" text-4xl font-bold font-playfair text-center   py-10">
                {data.corevalueContent.title}
              </h2>
              <p className="text-lg mb-2 text-center font-playfair text-gray-800 md:px-16 px-6 pb-10">
                <div
                  dangerouslySetInnerHTML={{
                    __html: data.corevalueContent.description,
                  }}
                />
              </p>
            </div>
          </div>
          <div className="w-[85%] mx-auto mt-[200px]">
            <div className="grid grid-cols-1 md:grid-cols-2    w-[70%] mx-auto gap-y-10 gap-x-20   ">
              {data.coreValue?.map((value, index) => (
                <div key={value.id} className="flex items-start">
                  {/* Icon */}
                  <div className="text-2xl text-[#104cba] mr-4">➤</div>
                  {/* Content */}
                  <div>
                    <h3 className="text-2xl font-playfair font-bold mb-2">
                      {value.title}
                    </h3>
                    <p className="text-lg font-playfair text-gray-800">
                      {value.sub_title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}
      {data?.contactUs && (
        <section id="contact-us">
          <ContactSection contact={data.contactUs} />
        </section>
      )}

      <section className="w-[85%] mx-auto pt-20  ">
        <h2 className=" text-4xl font-bold font-playfair text-center mx-auto md:w-[60%] ">
          Our Branches
        </h2>
        <img
          src={data?.contactUs?.world_map_url}
          alt=""
          className="w-full   object-cover"
        />
      </section>
      {data?.branches?.length > 0 && (
        <section className="w-[85%] mx-auto pb-24">
          <AddressCard addresses={data.branches} />
        </section>
      )}
{data?.contactUs && (
      <section>
        <div className="relative w-full h-[450px]">
          {/* Embedded Google Map */}
          <iframe
            src={data.contactUs.map}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>

          {/* Address Card */}
          <div className="absolute md:top-4 md:right-4 bottom-3 h-min bg-white p-6 rounded-lg shadow-lg max-w-sm">
            <h2 className="text-2xl font-playfair font-bold mb-2">
              Head Office
            </h2>
            <div className="font-figtree text-gray-800">
              <p>{data.contactUs.head_office_title}</p>
              <p>
               {data.contactUs.head_office_address}
              </p>
              
              <p>
                <span className="font-bold">Ph:</span> {data.contactUs.head_office_phone}
              </p>
              <p>
                <span className="font-bold">Mob:</span> {data.contactUs.head_office_mobile}
              </p>
              <p>
                <span className="font-bold">Mail:</span>{" "}
                <a
                  href={`mailto:${data.contactUs.head_office_email_id}`}
                  className="text-blue-500 hover:underline"
                >
                  {data.contactUs.head_office_email_id}
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>)}
    </div>
  );
};

export default Home;
