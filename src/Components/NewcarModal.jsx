import React from 'react';

const CarDetailsModal = ({ car, onClose }) => {
  // Helper function to format the URL
  const formatUrl = (url) => {
    if (!url) return '#';
    return url.startsWith('http://') || url.startsWith('https://') ? url : `http://${url}`;
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 w-full h-full">
      <div className="bg-opacity-30 bg-white/10 backdrop-blur-lg rounded-xl shadow-2xl border border-gray-700 max-w-3xl w-full relative p-8">
        <button
          className="absolute top-4 right-4 text-white hover:text-red-500 transition-all duration-200 transform hover:scale-110"
          onClick={onClose}
        >
          ✖
        </button>

        <div className="flex flex-col items-center md:flex-col text-white">
          <img
          
            src={car.imgUrl}
            alt={car.carName}
            className="w-full md:w-1/2 rounded-lg shadow-lg mb-6 md:mb-0"
          />
          <div className="md:ml-8 mt-4 md:mt-0 space-y-4">
            <h2 className="text-3xl font-extrabold tracking-wide neon-text mb-4">{car.brand} {car.carName}</h2>

            <div className="grid grid-cols-2 gap-">
              <div>
                <p className="text-lg font-semibold">Price</p>
                <p className="text-sm">${car.price}</p>
              </div>
             
              <div className="md:ml-8 mt-6 md:mt-0 space-y-4">
            <h2 className="text-xl font-bold">Configurations</h2>
            <p className="text-sm">Gps: {car.gps}</p>
            <p className="text-sm">Automatic: {car.automatic}</p>
            <p className="text-sm">Rating:{car.rating}</p>
          </div>

              <div>
                <p className="text-lg font-semibold">Speed</p>
                <p className="text-sm">{car.speed} km/h</p>
              </div>
              <div>
                <p className="text-lg font-semibold">Description</p>
                <p className="text-sm capitalize">{car.description}</p>
              </div>
            </div>

            <a
              href={formatUrl(car.clickoffUrl)}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-lg shadow-lg text-sm transition-all duration-200"
            >
              Visit Official Page
            </a>
           
          </div>

         
        </div>
      </div>
    </div>
  );
};

export default CarDetailsModal;
