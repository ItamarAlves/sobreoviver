import React from 'react';

import Navbar from '../Navbar';
import Sidebar from '../Sidebar';

const PageWrapper = ({ withSidebar = false, children }) => {
  return (
    <div className="d-flex" id="wrapper">

      {withSidebar && <Sidebar />}

      <div id="page-content-wrapper">
        <Navbar />
        <div className="container-fluid">
          {children}
        </div>
      </div>

    </div>);
}

export default PageWrapper;