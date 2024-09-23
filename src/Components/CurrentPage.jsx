import React from 'react';

const CurrentPage = ({ currentPage, handlePageChange, totalPages }) => {
  return (
    <section className="py-8 bg-gray-900 text-center">
      <nav aria-label="Page navigation">
        <ul className="inline-flex items-center space-x-2">
          {/* Render page numbers dynamically based on totalPages */}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
            <li key={page}>
              <button
                onClick={() => handlePageChange(page)}
                className={`px-4 py-2 rounded-full hover:bg-gray-300 transition ${
                  currentPage === page ? 'bg-gray-400' : 'bg-gray-200'
                }`}
              >
                {page}
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
};

export default CurrentPage;
