import React, { createContext, useEffect, useState } from "react";
import Routes from "Routes";

import Layout from "components/Layout/Layout";
import Header from "containers/Header/Header";

type DeviceType = 'mobile' | 'tablet' | 'desktop';

export const DeviceContext = createContext<DeviceType>('desktop');

const App = () => {
  const [device, setDevice] = useState<DeviceType>(checkDeviceSize());

  function checkDeviceSize() {
    const width = window.innerWidth;
    if (width > 1024) {
      return 'desktop';
    } else if (width > 768 && width <= 1024) {
      return 'tablet';
    } else {
      return 'mobile';
    }
  }

  useEffect(() => {
    const handleResize = () => {
      setDevice(checkDeviceSize());
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, []);
  
  return (
    <DeviceContext.Provider value={device}>
      <div>
        <Header />
        <Layout>
          <Routes />
        </Layout>
      </div>
    </DeviceContext.Provider>
  )
}

export default App
