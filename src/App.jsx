import { Disclosure } from "@headlessui/react";
import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

import React, { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

const backgrounds = [
  "url(https://source.unsplash.com/random/1920x1080/?travel,nature)",
  "url(https://source.unsplash.com/random/1920x1080/?adventure,mountains)",
  "url(https://source.unsplash.com/random/1920x1080/?beach,ocean)",
  "url(https://source.unsplash.com/random/1920x1080/?forest,river)",
];

const destinations = [
  {
    title: "Santorini, Greece",
    description: "Experience the stunning views of Santorini.",
    location: "Greece",
    info: "Perfect for sunsets and ocean views.",
    image: "https://source.unsplash.com/random/400x300/?santorini",
  },
  {
    title: "Kyoto, Japan",
    description: "Discover the beauty of Kyoto.",
    location: "Japan",
    info: "Known for its temples and cherry blossoms.",
    image: "https://source.unsplash.com/random/400x300/?kyoto",
  },
  {
    title: "Banff, Canada",
    description: "Explore the serene landscapes of Banff.",
    location: "Canada",
    info: "A paradise for nature lovers and hikers.",
    image: "https://source.unsplash.com/random/400x300/?banff",
  },
];

const testimonials = [
  {
    message:
      "The trip to Santorini was unforgettable! Every moment was perfect.",
    profileImage: "https://source.unsplash.com/random/100x100/?portrait",
    name: "Jane Doe",
    date: "May 5, 2023",
    destination: "Santorini, Greece",
  },
  {
    message: "Kyoto’s beauty took my breath away. Highly recommended!",
    profileImage: "https://source.unsplash.com/random/100x100/?person",
    name: "John Smith",
    date: "April 18, 2023",
    destination: "Kyoto, Japan",
  },
];

const faqs = [
  {
    question: "What destinations do you cover?",
    answer:
      "We offer curated travel experiences to over 50 countries across six continents.",
  },
  {
    question: "Do you offer travel insurance?",
    answer: "Yes, travel insurance is included in all our packages.",
  },
  {
    question: "How can I cancel my trip?",
    answer:
      "You can cancel your trip up to 7 days before departure with a full refund.",
  },
];

function App() {
  const [currentBg, setCurrentBg] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 4000); // Change background every 4 seconds

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <Navbar />
      <main className="container">
        {/* Hero Section */}
        <section
          id="home"
          className="h-screen flex flex-col justify-center items-center text-center text-white px-4"
          style={{
            backgroundImage: backgrounds[currentBg],
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          <h1 className="text-5xl md:text-7xl font-bold text-black">
            Discover Your Next Adventure
          </h1>
          <p className="mt-4 text-lg text-black md:text-xl max-w-xl">
            Embark on a journey to explore the world's most beautiful places and
            create memories that will last a lifetime.
          </p>
          <button className="mt-6 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300">
            Start Exploring
          </button>
        </section>

        {/* About Section */}
        <section className="flex flex-col md:flex-row items-center md:items-start my-16 mx-4 md:mx-20 space-y-8 md:space-y-0 md:space-x-12">
          <img
            src="https://source.unsplash.com/random/800x600/?travel"
            alt="About Us"
            className="w-full md:w-1/2 rounded-lg shadow-lg"
          />
          <div className="flex flex-col justify-center md:w-1/2 text-gray-800 space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
            <p className="text-lg text-gray-700">
              At Wanderlust, we believe in the power of travel to transform
              lives. Join us as we explore the most beautiful destinations and
              hidden gems around the world.
            </p>
            <button className="bg-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 transition duration-300">
              Learn More
            </button>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="my-16 mx-4 md:mx-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Top Destinations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {destinations.map((destination, index) => (
              <div
                key={index}
                className="relative overflow-hidden rounded-lg shadow-lg cursor-pointer transition-transform transform hover:scale-105"
              >
                <img
                  src={destination.image}
                  alt={destination.title}
                  className="w-full h-60 object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <p className="text-xl font-bold">{destination.location}</p>
                  <p className="text-sm">{destination.info}</p>
                </div>
                <div className="p-4">
                  <h3 className="text-xl font-bold">{destination.title}</h3>
                  <p className="text-sm text-gray-600">
                    {destination.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="my-16 mx-4 md:mx-20">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              What Our Travelers Say
            </h2>
            <p className="text-lg text-gray-700">
              Real stories from real travelers.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-lg shadow-lg p-6">
                <p className="text-gray-600">{testimonial.message}</p>
                <div className="flex items-center mt-4">
                  <img
                    src={testimonial.profileImage}
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <div className="ml-3">
                    <p className="text-gray-800 font-semibold">
                      {testimonial.name}
                    </p>
                    <p className="text-gray-500 text-sm">
                      {testimonial.date} - {testimonial.destination}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ Sections */}
        <section className="my-16 mx-4 md:mx-20">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Frequently Asked Questions
          </h2>
          <div className="max-w-2xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex justify-between w-full px-4 py-2 text-left bg-gray-100 text-gray-800 rounded-lg focus:outline-none focus-visible:ring focus-visible:ring-opacity-75">
                      <span>{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-gray-500`}
                      />
                    </Disclosure.Button>
                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-gray-600">
                      {faq.answer}
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
