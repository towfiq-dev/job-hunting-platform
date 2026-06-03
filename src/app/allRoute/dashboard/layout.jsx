import DashboardSidebar from '@/components/allRoute/dashboard/dashboardSidebar/DashboardSidebar';
import React from 'react';

const DashboardLayout = ({children}) => {
  return (
    <div className='flex items-center min-h-screen'>
      <DashboardSidebar/>
      <div className='flex-1'>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;