import React, { useState, useEffect } from 'react';
import NewCarList from './NewCarList';
import CurrentPage from './CurrentPage';

const CarApp = ({ onMoreDetailsClick }) => {
  const [cars, setCars] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const carsPerPage = 6; // Fixed to showing 6 cars per page

  useEffect(() => {
    // Mock API call to fetch cars
    const fetchCars = async () => {
      const carData = [
        // Sample car data


              {
                "id": 1,
                "brand": "Tesla",
                "carName": "Model S",
                "model": "2024",
                "price": "$89,990",
                "speed": "200 mph",
                "gps": true,
                "seatType": "Leather",
                "automatic": true,
                "rating": 4.9,
                "imgUrl": "https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg",
                "description": "A sleek, high-performance electric sedan with advanced autopilot features and a long range."
              },
              {
                "id": 2,
                "brand": "BMW",
                "carName": "iX",
                "model": "2024",
                "price": "$83,200",
                "speed": "155 mph",
                "gps": true,
                "seatType": "Premium Leather",
                "automatic": true,
                "rating": 4.8,
                "imgUrl": "https://www.wsupercars.com/wallpapers-regular/BMW/2022-BMW-iX-M60-004-2160.jpg",
                "description": "BMWs all-electric SUV with top-notch interior comfort, cutting-edge tech, and impressive range."
              },
              {
                "id": 3,
                "brand": "Audi",
                "carName": "e-Tron GT",
                "model": "2024",
                "price": "$104,900",
                "speed": "152 mph",
                "gps": true,
                "seatType": "Alcantara",
                "automatic": true,
                "rating": 4.7,
                "imgUrl": "https://www.wsupercars.com/wallpapers-regular/Audi/2022-Audi-RS-E-Tron-GT-004-2160.jpg",
                "description": "A fully electric sports sedan that combines Audi’s classic design with futuristic features and great performance."
              },
              {
                "id": 4,
                "brand": "Mercedes-Benz",
                "carName": "EQC",
                "model": "2024",
                "price": "$68,900",
                "speed": "112 mph",
                "gps": true,
                "seatType": "Leather",
                "automatic": true,
                "rating": 4.6,
                "imgUrl": "https://stimg.cardekho.com/images/carexteriorimages/930x620/Mercedes-Benz/EQS/8423/1691645568687/front-left-side-47.jpg?imwidth=890&impolicy=resize",
                "description": "A luxury electric SUV that delivers a smooth ride with a powerful engine and stylish interiors."
              },
              {
                "id": 5,
                "brand": "Lucid",
                "carName": "Air",
                "model": "2024",
                "price": "$138,000",
                "speed": "168 mph",
                "gps": true,
                "seatType": "Nappa Leather",
                "automatic": true,
                "rating": 4.9,
                "imgUrl": "https://hips.hearstapps.com/hmg-prod/images/lm240409-my24pressdrive-2-661f1fbe947a5.jpg?crop=1xw:1xh;center,top&resize=980:*",
                "description": "Lucid’s flagship electric sedan, offering industry-leading range and advanced driver assistance systems."
              },
              {
                "id": 6,
                "brand": "Porsche",
                "carName": "Taycan",
                "model": "2024",
                "price": "$150,000",
                "speed": "162 mph",
                "gps": true,
                "seatType": "Leather",
                "automatic": true,
                "rating": 4.8,
                "imgUrl": "https://media.porsche.com/mediakit/taycan/Bilder/Taycan-turbo/image-thumb__5437__mk2-modal-item/S20_3193_fine.jpg",
                "description": "Porsche’s fully electric sports car with lightning-fast acceleration, luxurious interior, and advanced handling."
              },
              {
                "id": 7,
                "brand": "Ford",
                "carName": "Mustang Mach-E",
                "model": "2024",
                "price": "$53,000",
                "speed": "124 mph",
                "gps": true,
                "seatType": "Cloth",
                "automatic": true,
                "rating": 4.5,
                "imgUrl": "https://images4.alphacoders.com/122/thumb-1920-1227465.jpg",
                "description": "An all-electric SUV that blends the iconic Mustang design with modern electric power and tech."
              },
              {
                "id": 8,
                "brand": "Hyundai",
                "carName": "Ioniq 6",
                "model": "2024",
                "price": "$45,500",
                "speed": "115 mph",
                "gps": true,
                "seatType": "Cloth",
                "automatic": true,
                "rating": 4.6,
                "imgUrl": "https://dmassets.hyundai.com/is/image/hyundaiautoever/hyundai-ioniq-6-driving-experience-0323-exterior-11:Image%20Video%20Collection%20Layer%20Item%20Desktop?wid=884&hei=497",
                "description": "A stylish, futuristic electric sedan with great range, an eco-friendly interior, and advanced tech features."
              }
            
          
        // Add the remaining car data...
      ];
      setCars(carData);
    };

    fetchCars();
  }, []);

  // Calculate total number of pages
  const totalPages = Math.ceil(cars.length / carsPerPage);

  // Get current cars to display based on pagination
  const indexOfLastCar = currentPage * carsPerPage;
  const indexOfFirstCar = indexOfLastCar - carsPerPage;
  const currentCars = cars.slice(indexOfFirstCar, indexOfLastCar);

  // Handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto p-4 ">
      <h1 className="text-5xl font-extrabold mb-10 text-gray-400 ">Latest Cars</h1>

      {/* Car List */}
      <NewCarList cars={currentCars} onMoreDetailsClick={onMoreDetailsClick} />

      {/* Pagination Controls */}
      <CurrentPage
        currentPage={currentPage}
        handlePageChange={handlePageChange}
        totalPages={totalPages}
      />
    </div>
  );
};

export default CarApp;
