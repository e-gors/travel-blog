import Footer from "./layout/Footer";
import Navbar from "./layout/Navbar";

import React, { useState, useEffect } from "react";

const backgrounds = [
  "url(https://source.unsplash.com/random/1920x1080/?travel,nature)",
  "url(https://source.unsplash.com/random/1920x1080/?adventure,mountains)",
  "url(https://source.unsplash.com/random/1920x1080/?beach,ocean)",
  "url(https://source.unsplash.com/random/1920x1080/?forest,river)",
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
        <section
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
      </main>
      <Footer />
    </>
  );
}

export default App;
