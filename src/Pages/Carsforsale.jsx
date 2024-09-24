import React, { useState, useEffect } from 'react';
import CarDetailsModal from '../Components/CarDetailsModal';
import CarDetails from '../Components/CarDetails';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Carsforsale = () => {
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
        className="relative w-full h-[80vh] bg-cover bg-center -top-20"
        style={{ backgroundImage: 'url(./Images/Hybrid.jpg)' }}
        data-aos="fade-in"
      >
        <div className="absolute inset-0 bg-opacity-70 flex items-center justify-center text-center p-6">
          <div className="text-white space-y-6" data-aos="zoom-in">
           
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-wide" data-aos="fade-right">
              Cars for Sale
            </h1>
            <p className="text-lg sm:text-2xl lg:text-3xl font-light opacity-90" data-aos="fade-up">
              Explore our exclusive collection of premium cars.
            </p>
            <div className="mt-10">
              <a
                href="#carlist"
                className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition duration-300"
                data-aos="fade-up"
              >
                Browse Cars
              </a>
            </div>
          </div>
        </div>
      </section>

      
         {/* Car Listings Section */}
         <section id="carlist" className="py- b">
        <div className="container mx-auto text-center">
          <div className="">
            <CarDetails onMoreDetailsClick={handleMoreDetailsClick} />
          </div>
        </div>
      </section>

      {/* Modal for car details */}
      {selectedCar && (
        <CarDetailsModal car={selectedCar} onClose={handleCloseModal} />
      )}
    </>
  );
};

export default Carsforsale;
