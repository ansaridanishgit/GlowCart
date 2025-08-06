import React, { useContext } from 'react';
import AppStack from './AppStack/AppStack';
import AuthStack from './AuthStack/AuthStack';
import { AuthContext } from '../Context/AuthContext';

const Navigation = () => {
  const {userToken } = useContext(AuthContext);

  return (
    <>
      {userToken !== null ? <AppStack /> : <AuthStack />}
    </>
  );
};

export default Navigation;
