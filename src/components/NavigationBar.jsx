import React, { useEffect } from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';


// import { useDispatch, useSelector } from 'react-redux';
// import { authCheck } from '../app/features/auth/authSlice';
import { NavigationContainer, getFocusedRouteNameFromRoute } from '@react-navigation/native';
import Header from './AppHeaderBar';
import { createStackNavigator } from '@react-navigation/stack';
import CartScreen from '../pages/CartScreen';
import MonitoringScreen from '../pages/MonitoringScreen';
// import { DrawerContent } from './DrawerNav';
// import { createDrawerNavigator } from '@react-navigation/drawer';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

// const Drawer = createDrawerNavigator();


const BottomBar = ()=>{
  // const { user } = useSelector(({auth})=>auth);
  return (
    <React.Fragment>
      <Tab.Navigator
        initialRouteName="Cart"
        backBehavior="initialRoute"
        shifting={true}
        sceneAnimationEnabled={false}
        activeColor="#2897FF" // Color for active icon
        inactiveColor="#D4D6DD" // Color for inactive icon
        activeIndicatorStyle={{
          backgroundColor: 'white', // Background color of the tab bar
        }}
        barStyle={{
          backgroundColor: 'white', // Background color of the tab bar
          elevation: 100, // Shadow for Android
          shadowColor: '#000', // Shadow color for iOS
          shadowOffset: { width: 0, height: -2 }, // Shadow position for iOS
          shadowOpacity: 0.2, // Shadow opacity for iOS
          shadowRadius: 3, // Shadow radius for iOS
        }}
      >
        <Tab.Screen
          name="Cart"
          component={CartScreen}
          options={{
            tabBarIcon: 'map-outline',
            tabBarColor: 'transparent',
          }}
        />
        <Tab.Screen
          name="Traceur"
          component={MonitoringScreen}
          options={{
            tabBarIcon: 'map-marker-radius-outline',
            tabBarColor: '#000',
          }}
        />
      </Tab.Navigator>
    </React.Fragment>
  );

}

const StackBar = ()=>{
  // const { user } = useSelector(({auth})=>auth);
  return (
    <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        header: ({ options, route, navigation }) => (<Header options={options} route={route} navigation={navigation} />),
        headerMode:"screen"
      }}>
        
      <Stack.Screen
        name="Home"
        component={BottomBar}
        options={({ route }) => {
          const routeName = getFocusedRouteNameFromRoute(route) ?? 'Cart';
          return { headerTitle: routeName };
        }}
      />
    </Stack.Navigator>
  );
}


const NavigationBar = () => {
  return (
    <NavigationContainer>
      <StackBar/>

    </NavigationContainer>
  );
};


export default NavigationBar;