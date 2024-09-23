import React from 'react';

const CarCard = ({ car, onMoreDetailsClick }) => {
  return (
    <button
      onClick={() => onMoreDetailsClick(car)}
      className="group relative transition-transform duration-500 transform hover:scale-105 focus:outline-none"
    >
      <div className="relative bg-gradient-to-b from-gray-800 to-gray-900 bg-opacity-60 backdrop-blur-xl p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-500">
        
        {/* Neon Glowing Border */}
        <div className="absolute inset-0 border border-transparent group-hover:border-purple-500 rounded-xl transition-all duration-500 animate-pulse"></div>

        {/* Car Image */}
        <div className="relative overflow-hidden rounded-lg h-48 mb-4">
          <img
            src={car.primaryPhotoUrl}
            alt={`${car.year} ${car.make} ${car.model}`}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-y-110"
          />
          {/* Futuristic overlay effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-purple-700 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>

        {/* Car Details */}
        <div className="space-y-2 text-center">
          <h3 className="text-xl font-bold text-white tracking-wide">
            {car.year} {car.make} {car.model} <span className="text-sm text-gray-400">({car.trim})</span>
          </h3>
          <p className="text-gray-400 text-sm">{car.mileage} miles | {car.city}, {car.state}</p>
          <p className="text-3xl font-bold text-purple-400 tracking-wide">
            {car.price}
          </p>
        </div>

        {/* Subtle Glowing Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-blue-600 to-green-500 opacity-10 rounded-xl pointer-events-none group-hover:opacity-20 transition-opacity duration-500"></div>
      </div>
    </button>
  );
};

export default CarCard;



