import React from 'react';
import NewCarCard from './NewCarCard';

const CarList = ({ cars, onMoreDetailsClick }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <NewCarCard key={car.id} car={car} onMoreDetailsClick={onMoreDetailsClick} />
      ))}
    </div>
  );
};

export default CarList;
