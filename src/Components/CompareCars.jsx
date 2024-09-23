import React, { useState } from 'react';

const carOptions = [
  {
    id: 1,
    name: 'Tesla Model S',
    img: './Images/Tesla.jpg',
    specs: {
      horsepower: 1020,
      topSpeed: '200 mph',
      range: '396 miles',
      price: '$94,990'
    }
  },
  {
    id: 2,
    name: 'Audi e-tron GT',
    img: './Images/Audi.jpg',
    specs: {
      horsepower: 637,
      topSpeed: '152 mph',
      range: '238 miles',
      price: '$104,900'
    }
  },
  {
    id: 3,
    name: 'BMW iX',
    img: './Images/BMW.jpg',
    specs: {
      horsepower: 516,
      topSpeed: '124 mph',
      range: '324 miles',
      price: '$87,100'
    }
  },
  {
    id: 4,
    name: 'Mercedes EQS SUV',
    img: './Images/Mercedes.jpg',
    specs: {
      horsepower: 355,
      topSpeed: '130 mph',
      range: '305 miles',
      price: '$104,400'
    }
  }
];

const CompareCars = () => {
  const [selectedCar1, setSelectedCar1] = useState(null);
  const [selectedCar2, setSelectedCar2] = useState(null);

  const handleSelectCar1 = (event) => {
    const carId = parseInt(event.target.value);
    setSelectedCar1(carOptions.find((car) => car.id === carId));
  };

  const handleSelectCar2 = (event) => {
    const carId = parseInt(event.target.value);
    setSelectedCar2(carOptions.find((car) => car.id === carId));
  };

  return (
    <div id='compare' className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
      <div className="container mx-auto py-16">
        <h2 className="text-4xl font-bold text-center mb-12">Compare Cars</h2>

        {/* Dropdowns to select cars */}
<div className="flex flex-col sm:flex-row justify-center space-y-8 sm:space-y-0 sm:space-x-8 mb-12">
  <div className="flex flex-col w-full sm:w-auto">
    <label className="text-lg mb-2">Select First Car</label>
    <select
      className="p-3 rounded bg-gray-700 text-white"
      onChange={handleSelectCar1}
      defaultValue=""
    >
      <option value="" disabled>Select a car</option>
      {carOptions.map((car) => (
        <option key={car.id} value={car.id}>
          {car.name}
        </option>
      ))}
    </select>
  </div>

  <div className="flex flex-col w-full sm:w-auto">
    <label className="text-lg mb-2">Select Second Car</label>
    <select
      className="p-3 rounded bg-gray-700 text-white"
      onChange={handleSelectCar2}
      defaultValue=""
    >
      <option value="" disabled>Select a car</option>
      {carOptions.map((car) => (
        <option key={car.id} value={car.id}>
          {car.name}
        </option>
      ))}
    </select>
  </div>
</div>


        {/* Compare section */}
        {selectedCar1 && selectedCar2 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Car 1 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img
                src={selectedCar1.img}
                alt={selectedCar1.name}
                className="w-full h-64 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-3xl font-bold mb-4">{selectedCar1.name}</h3>
              <ul className="space-y-2">
                <li className="text-lg">
                  <span className="font-bold">Horsepower:</span>{' '}
                  {selectedCar1.specs.horsepower} hp
                </li>
                <li className="text-lg">
                  <span className="font-bold">Top Speed:</span>{' '}
                  {selectedCar1.specs.topSpeed}
                </li>
                <li className="text-lg">
                  <span className="font-bold">Range:</span>{' '}
                  {selectedCar1.specs.range}
                </li>
                <li className="text-lg">
                  <span className="font-bold">Price:</span>{' '}
                  {selectedCar1.specs.price}
                </li>
              </ul>
            </div>

            {/* Car 2 */}
            <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
              <img
                src={selectedCar2.img}
                alt={selectedCar2.name}
                className="w-full h-64 object-cover mb-6 rounded-lg"
              />
              <h3 className="text-3xl font-bold mb-4">{selectedCar2.name}</h3>
              <ul className="space-y-2">
                <li className="text-lg">
                  <span className="font-bold">Horsepower:</span>{' '}
                  {selectedCar2.specs.horsepower} hp
                </li>
                <li className="text-lg">
                  <span className="font-bold">Top Speed:</span>{' '}
                  {selectedCar2.specs.topSpeed}
                </li>
                <li className="text-lg">
                  <span className="font-bold">Range:</span>{' '}
                  {selectedCar2.specs.range}
                </li>
                <li className="text-lg">
                  <span className="font-bold">Price:</span>{' '}
                  {selectedCar2.specs.price}
                </li>
              </ul>
            </div>
          </div>
        )}

        {/* Placeholder if no car is selected */}
        {(!selectedCar1 || !selectedCar2) && (
          <div className="text-center text-gray-400 mt-12">
            Please select two cars to compare.
          </div>
        )}
      </div>
    </div>
  );
};

export default CompareCars;
