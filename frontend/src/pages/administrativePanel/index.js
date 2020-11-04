import React from 'react';
import './index.css';

import Chart from '../../components/Chart';
import PageWrapper from '../../components/PageWrapper';

const AdministrativePanel = () => {
  return (
    <PageWrapper withSidebar>
      <Chart></Chart>
    </PageWrapper>
  )
}

export default AdministrativePanel;