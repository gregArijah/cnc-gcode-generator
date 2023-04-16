import React, { useState } from 'react';

export default function Container() {
  const [currentPage, setCurrentPage] = useState('G-code');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'G-code') {
      return <Gcode />;
    }
    if (currentPage === 'Toolpath') {
      return <About />;
    }
    if (currentPage === 'Metadata') {
      return <Metadata />;
    }
    return <Library />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* Here we are calling the renderPage method which will return a component  */}
      {renderPage()}
    </div>
  );
}
