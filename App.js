import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

import Home from './src/BottomTab/Home';
import Product from './src/BottomTab/Product';
import Profile from './src/BottomTab/Profile';
import Search from './src/BottomTab/Search';
import Message from './src/BottomTab/Message';
import Notification from './src/BottomTab/Notification';

import Create from './src/Stack/CreateAcc';
import Register from './src/Stack/Register';
import Login from './src/Stack/Loging';
import AddProduct from './src/BottomTab/AddProduct';
import Location from './src/Stack/Location';
import ViewProduct from './src/BottomTab/ViewProduct';




const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      
      <Tab.Screen name='Home' component={StackNavigator1} options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color }) => (
            <Icon name='home' size={26} color={color} />
          ),
        }}/>

      <Tab.Screen name='Search' component={Search} options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({ color }) => (
            <Icon name='search' size={26} color={color} />
          ),
        }}/>
      
      <Tab.Screen name='Product' component={StackNavigator} options={{
          tabBarLabel: 'Post Ad',
          tabBarIcon: ({ color }) => (
            <Icon name='add-circle' size={30} color={color}/>
          ),
        }}/>
       
      <Tab.Screen name='Notification' component={StackNavigator3} options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({ color }) => (
            <Icon name='notifications' size={26} color={color} />
          ),
        }}/>

      <Tab.Screen name='Profile' component={StackNavigator2} options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color }) => (
            <Icon name='person' size={26} color={color} />
          ),
        }}/>
    
      
    </Tab.Navigator>
  );
}

function StackNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name=' ' component={Product} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='CreactAcc' component={Create} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Register' component={Register} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Login' component={Login} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Add Post' component={AddProduct}/>
      <Stack.Screen name='location' component={Location}/>
    </Stack.Navigator>
  );
}

function StackNavigator1() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Goviya.lk ' component={Home}  options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Pick A Location' component={Location}/>
      <Stack.Screen name='View Product' component={ViewProduct}/>
    </Stack.Navigator>
  );
}

function StackNavigator2() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='profile' component={Profile}  options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Message' component={Message}/>
    </Stack.Navigator>
  );
}

function StackNavigator3() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Notification' component={Notification}  options={{headerStyle: {},}}/>

    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator/>
    </NavigationContainer>
  );
}
