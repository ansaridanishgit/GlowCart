import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CustomBottomBar from './BottomDesign';
import Home from '../../Screens/BottomTabs/Home';
import Offers from '../../Screens/BottomTabs/Offers';
import Wishlist from '../../Screens/BottomTabs/Wishlist';
import Profile from '../../Screens/BottomTabs/Profile';

const Tab = createBottomTabNavigator();

const BottomNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={{ headerShown: false }}
      tabBar={(props) => <CustomBottomBar {...props} />}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Offers" component={Offers} />
      <Tab.Screen name="Wishlist" component={Wishlist} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};
export default BottomNavigation;