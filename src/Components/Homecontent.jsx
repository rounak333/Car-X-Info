import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles

const HomeContent = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-cover bg-center -top-20" style={{ backgroundImage: 'url(./Images/B.jpg)' }} data-aos="fade-in">
        <div className="absolute w-full inset-0 bg-gradient-to-r from-black via-transparent to-black flex items-center justify-center text-center p-6">
          <div className="text-white space-y-6 max-w-xl mx-auto" data-aos="zoom-in">
            <h1 className="text-3xl sm:text-5xl 2xl:text-7xl font-extrabold uppercase tracking-widest text-slate-200">
              The Future of Automobiles
            </h1>
            <p className="text-xl sm:text-2xl lg:text-3xl font-light text-gray-300">
              Revolutionize your journey with the latest in automotive technology, performance, and sustainability. Whether new or pre-owned, find your dream car today.
            </p>
            <div className="mt-10">
              <a href="/carsforsale" className="bg-gradient-to-r from-blue-500 to-green-400 px-6 py-3 rounded-full font-semibold uppercase text-lg hover:scale-110 transition transform duration-300" data-aos="fade-up">
                Discover Cars
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Cars Section */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-center text-white" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-8" data-aos="fade-down">Our Top Models</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-right">
            <img src="https://www.tesla.com/sites/default/files/modelsx-new/social/model-s-hero-social.jpg" alt="Tesla Model S Plaid" className="w-full mb-6 rounded-lg shadow-md" loading="lazy" />
            <h3 className="text-3xl font-bold mb-4">Tesla Model S Plaid</h3>
            <p className="text-gray-400">Experience the pinnacle of electric performance with unmatched speed and range.</p>
            <a href="/newcars" className="inline-block mt-4 text-blue-400 hover:text-blue-500">Learn More</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-up">
            <img src="./Images/Taycan.jpg" alt="Porsche Taycan" className="w-full mb-6 rounded-lg shadow-md" loading="lazy" />
            <h3 className="text-3xl font-bold mb-4">Porsche Taycan</h3>
            <p className="text-gray-400">A fusion of luxury, performance, and cutting-edge electric mobility.</p>
            <a href="/newcars" className="inline-block mt-4 text-blue-400 hover:text-blue-500">Learn More</a>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-left">
            <img src="./Images/car3.jpg" alt="Audi e-tron GT" className="w-full mb-6 rounded-lg shadow-md" loading="lazy" />
            <h3 className="text-3xl font-bold mb-4">Audi e-tron GT</h3>
            <p className="text-gray-400">Redefine luxury and performance with this all-electric masterpiece.</p>
            <a href="/newcars" className="inline-block mt-4 text-blue-400 hover:text-blue-500">Learn More</a>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 bg-gray-900 text-center text-white" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-8">Advanced Technologies</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <img src="./Images/Speedometer.jpg" alt="Supercar Speed" className="w-20 mb-4" loading="lazy" />
            <h3 className="text-2xl font-bold">Supercar Speed</h3>
            <p className="text-gray-400 mt-2">Unmatched acceleration powered by next-gen electric motors.</p>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <img src="./Images/SelfDrive.jpeg" alt="Autonomous Driving" className="w-20 mb-4" loading="lazy" />
            <h3 className="text-2xl font-bold">Autonomous Driving</h3>
            <p className="text-gray-400 mt-2">Feel the future with AI-powered safety and comfort at every turn.</p>
          </div>
          <div className="flex flex-col items-center" data-aos="zoom-in">
            <img src="./Images/Hybrid.jpg" alt="Sustainable Power" className="w-20 mb-4" loading="lazy" />
            <h3 className="text-2xl font-bold">Sustainable Power</h3>
            <p className="text-gray-400 mt-2">Drive into the future with eco-friendly, long-lasting electric batteries.</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gradient-to-r from-gray-800 to-gray-900 text-center text-white" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-8">Why Choose Us?</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-right">
            <h3 className="text-2xl font-bold mb-2">Exclusive Service</h3>
            <p className="text-gray-400">We provide personalized, premium service for all your car-buying needs.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-up">
            <h3 className="text-2xl font-bold mb-2">Expertise</h3>
            <p className="text-gray-400">Years of experience make us the most trusted name in the industry.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-down">
            <h3 className="text-2xl font-bold mb-2">Innovative Technology</h3>
            <p className="text-gray-400">We bring the latest innovations in technology directly to you.</p>
          </div>
          <div className="p-6 bg-gray-800 rounded-lg shadow-lg transform hover:scale-105 hover:bg-gray-700 transition duration-300" data-aos="fade-left">
            <h3 className="text-2xl font-bold mb-2">Sustainability</h3>
            <p className="text-gray-400">Join us in driving toward a greener, cleaner future with electric cars.</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-100 text-center" data-aos="fade-up">
        <h2 className="text-4xl font-extrabold mb-8 text-gray-900">What Our Customers Say</h2>
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-right">
            <p className="text-gray-700">"The best decision I’ve ever made! The electric power combined with luxury is unbeatable!"</p>
            <h4 className="mt-4 text-xl font-bold text-gray-800">Alex P.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-up">
            <p className="text-gray-700">"Top-notch service with futuristic cars. Couldn’t ask for a better experience."</p>
            <h4 className="mt-4 text-xl font-bold text-gray-800">Sarah T.</h4>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg" data-aos="fade-left">
            <p className="text-gray-700">"Innovative, stylish, and eco-friendly cars at the best prices. Highly recommended!"</p>
            <h4 className="mt-4 text-xl font-bold text-gray-800">James R.</h4>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeContent;
