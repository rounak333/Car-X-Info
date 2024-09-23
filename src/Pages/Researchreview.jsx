import React, { useState } from 'react';
import CompareCars from '../Components/CompareCars';


const researchData = [
  {
    id: 1,
    title: 'Electric Cars: The Future of Transportation',
    description: 'Explore how electric vehicles are revolutionizing the auto industry with cutting-edge technology and eco-friendly performance.',
    img: './Images/ElectricCar.jpg',
    link: '/research/electric-cars'
  },
  {
    id: 2,
    title: 'AI-Driven Autopilot Systems: A Deep Dive',
    description: 'Understand the advancements in AI technology that are pushing self-driving cars closer to reality.',
    img: './Images/SelfDrive.jpeg',
    link: '/research/autopilot-systems'
  },
  {
    id: 3,
    title: 'Hybrid Cars vs Gasoline Cars: Which is Better?',
    description: 'A detailed comparison of hybrid and gasoline-powered cars, focusing on performance, cost, and sustainability.',
    img: './Images/Hybrid.jpg',
    link: '/research/hybrid-vs-gasoline'
  }
];

const reviewsData = [
  {
    id: 1,
    title: '2024 Tesla Model S Review: Still the King of EVs',
    rating: 4.9,
    img: './Images/teslaS.jpg',
    link: '/reviews/tesla-model-s-2024'
  },
  {
    id: 2,
    title: 'Audi e-tron GT Review: Performance Meets Luxury',
    rating: 4.8,
    img: './Images/Audi.jpg',
    link: '/reviews/audi-e-tron-gt'
  },
  {
    id: 3,
    title: 'BMW iX Review: Cutting-Edge Technology in an SUV',
    rating: 4.7,
    img: './Images/BMW.jpg',
    link: '/reviews/bmw-ix'
  }
];

const comparisonData = [
  {
    id: 1,
    car1: 'Tesla Model S',
    car2: 'Audi e-tron GT',
    comparison: 'Comparing performance, range, and cost to help you decide between two top electric sedans.',
    img1: './Images/teslaS.jpg',
    img2: './Images/Audi.jpg',
    link: '/comparison/tesla-vs-audi'
  },
  {
    id: 2,
    car1: 'BMW iX',
    car2: 'Mercedes EQS SUV',
    comparison: 'A side-by-side comparison of two luxury electric SUVs with a focus on tech and comfort.',
    img1: './Images/BMW.jpg',
    img2: './Images/Mercedes.jpg',
    link: '/comparison/bmw-vs-mercedes'
  }
];

const ResearchReview = () => {
  const [currentTab, setCurrentTab] = useState('research');

  return (
    <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200 min-h-screen">
      {/* Tabs for Research, Reviews, and Comparison */}
      <div className="flex justify-center items-center pt-10 space-x-10 text-lg">
        <button
          className={`hover:text-cyan-300 transition duration-300 ${currentTab === 'research' ? 'text-cyan-400' : ''}`}
          onClick={() => setCurrentTab('research')}
        >
          Research
        </button>
        <button
          className={`hover:text-cyan-300 transition duration-300 ${currentTab === 'reviews' ? 'text-cyan-400' : ''}`}
          onClick={() => setCurrentTab('reviews')}
        >
          Reviews
        </button>
        <button
          className={`hover:text-cyan-300 transition duration-300 ${currentTab === 'comparison' ? 'text-cyan-400' : ''}`}
          onClick={() => setCurrentTab('comparison')}
        >
          Comparison
        </button>
      </div>

      {/* Dynamic Section based on active tab */}
      <div className="container mx-auto py-16">
        {currentTab === 'research' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {researchData.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-gray-800 hover:bg-cyan-900 transition duration-500 hover:shadow-xl transform hover:-translate-y-1"
              >
                <img src={item.img} alt={item.title} className="w-full h-40 object-contain rounded-md mb-4" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-4">{item.description}</p>
                <a
                  href='#'
                  className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-gray-900 rounded-full transition duration-300"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        )}

        {currentTab === 'reviews' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {reviewsData.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-gray-800 hover:bg-cyan-900 transition duration-500 hover:shadow-xl transform hover:-translate-y-1"
              >
                <img src={item.img} alt={item.title} className="w-full h-40 object-cover rounded-md mb-4" />
                <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-400 mb-2">Rating: {item.rating}/5</p>
                <a
                  href={item.link}
                  className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-gray-900 rounded-full transition duration-300"
                >
                  Read Review
                </a>
              </div>
            ))}
          </div>
        )}

        {currentTab === 'comparison' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {comparisonData.map((item) => (
              <div
                key={item.id}
                className="p-4 rounded-lg bg-gray-800 hover:bg-cyan-900 transition duration-500 hover:shadow-xl transform hover:-translate-y-1"
              >
                <div className="flex justify-between items-center mb-4">
                  <img src={item.img1} alt={item.car1} className="w-1/3 h-32 object-cover rounded-md" />
                  <span className="text-xl font-bold">vs</span>
                  <img src={item.img2} alt={item.car2} className="w-1/3 h-32 object-cover rounded-md" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{item.car1} vs {item.car2}</h3>
                <p className="text-gray-400 mb-4">{item.comparison}</p>
                <a
                  href='#compare'
                  className="inline-block px-4 py-2 bg-cyan-500 hover:bg-cyan-700 text-gray-900 rounded-full transition duration-300"
                >
                  Compare
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
      <CompareCars/>
    </div>
  );
};

export default ResearchReview;
