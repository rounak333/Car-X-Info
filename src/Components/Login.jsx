import React from 'react';

const Login = ({ isOpen, toggleModal }) => {
  if (!isOpen) return null; // Only render modal if it's open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg shadow-xl w-full max-w-lg relative">
        <button
          className="absolute top-2 right-2 text-gray-600 hover:text-black"
          onClick={toggleModal}
        >
          X
        </button>
        <div className="leading-loose ml-[4%]">
          <form className="max-w-sm m-4 p-10 bg-gray-200 rounded shadow-xl">
            <p className="text-center text-lg font-bold">LOGIN</p>
            <div className="mt-4">
              <label className="block text-sm text-gray-700" htmlFor="email">E-mail</label>
              <input
                className="w-full px-5 py-2 mt-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="email"
                id="email"
                placeholder="Enter your email"
                aria-label="email"
                required
              />
            </div>
            <div className="mt-4">
              <label className="block text-sm text-gray-700">Password</label>
              <input
                className="w-full px-5 py-2 mt-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                type="password"
                id="password"
                placeholder="Enter your password"
                aria-label="password"
                required
              />
            </div>
            <div className="mt-6 flex justify-between items-center">
              <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                type="submit">
                Sign In
              </button>
              <a className="text-sm text-gray-600 hover:text-red-400" href="#">
                Forgot Password?
              </a>
            </div>
            <div className="mt-6 text-center">
              <a className="text-sm text-gray-600 hover:text-red-400">
                Create an Account
              </a>
            </div>
          </form>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
