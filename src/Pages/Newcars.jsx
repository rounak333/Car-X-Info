import React, { useState, useEffect } from 'react';
import NewcarModal from '../Components/NewcarModal';
import NewCarDetails from '../Components/NewCarDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Newcars = () => {
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleMoreDetailsClick = (car) => {
    setSelectedCar(car);
  };

  const handleCloseModal = () => {
    setSelectedCar(null);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative w-full h-[80vh] bg-cover -top-20"
        style={{ backgroundImage: 'url(./Images/car1.jpg)'}}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-opacity-60 flex items-center justify-center text-center p-6">
          <div className="text-white space-y-6" data-aos="zoom-in">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold uppercase" data-aos="fade-right">
              Discover Your Next Car
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl font-light" data-aos="fade-up">
              Browse the latest models with cutting-edge technology.
            </p>
            <div data-aos="fade-up">
              <a
                href="#newcarlist"
                className="bg-white text-black px-6 py-3 rounded-full hover:bg-gray-800 hover:text-white transition duration-300"
              >
                Explore New Cars
              </a>
            </div>
          </div>
        </div>
      </section>

        {/* Car Listings Section */}
        <section id="newcarlist" className="py- b">
        <div className="container mx-auto text-center">
          <div className="">
            <NewCarDetails onMoreDetailsClick={handleMoreDetailsClick} />
          </div>
        </div>
      </section>

      {/* Modal for car details */}
      {selectedCar && (
        <NewcarModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Newcars;
