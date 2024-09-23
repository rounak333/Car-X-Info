import React from 'react';
import CarCard from './CarCard';

const CarList = ({ cars, onMoreDetailsClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <CarCard key={car.id} car={car} onMoreDetailsClick={onMoreDetailsClick} />
      ))}
    </div>
  );
};

export default CarList;
