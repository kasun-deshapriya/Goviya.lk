import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import { View, StyleSheet } from 'react-native';

import Home from './src/BottomTab/Home';
import Profile from './src/BottomTab/Profile';
import Search from './src/BottomTab/Search';
import Message from './src/Profile/Message';
import Notification from './src/BottomTab/Notification';
import Order from './src/BottomTab/Order';

import Create from './src/Profile/CreateAcc';
import Register from './src/Profile/Register';
import Login from './src/Profile/Loging';
import AddProduct from './src/BottomTab/AddProduct';
import Location from './src/Home/Location';
import ViewProduct from './src/Home/ViewProduct';
import Favorites from './src/Profile/Favorite';

import Vegitables from './src/Serach/Vegitables';
import Fruits from './src/Serach/Fruits';
import Grains from './src/Serach/Grains';
import Search_Products from './src/Serach/SearchName';
import Home1 from './src/Serach/Home1';
import LoginProfile from './src/Profile/LoginProfile';
import AccLoging from './src/Profile/AccLogin';
import MyAds from './src/Profile/MyAds';
import MyOders from './src/Profile/MyOders';
import Setting from './src/Profile/Setting';




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

      <Tab.Screen name='Products' component={StackNavigator3} options={{
          tabBarLabel: 'Products',
          tabBarIcon: ({ color }) => (
            <Icon name='filter-circle' size={30} color={color} />
          ),
        }}/>
       
      <Tab.Screen name='Notification' component={StackNavigator4} options={{
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
      <Stack.Screen name='CreactAcc' component={Create} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Register' component={Register} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Login' component={Login} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Add Post' component={AddProduct} options={{headerStyle: {backgroundColor:'rgb(30 41 59)'}, headerTitleStyle: {color:'white'},}}/>
      <Stack.Screen name='location' component={Location}/>
      <Stack.Screen name='AccLoging' component={AccLoging} options={{headerStyle: {height: '',},}}/>

    </Stack.Navigator>
  );
}

function StackNavigator1() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Goviya.lk ' component={Home}  options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Pick A Location' component={Location}/>
      <Stack.Screen name='View Product' component={ViewProduct}/>
      <Stack.Screen name='Place the Order' component={Order}/>
      <Stack.Screen name='HomeCopy' component={Home1} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Search' component={Search}  options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Vegitables' component={Vegitables}/>
      <Stack.Screen name='Fruits' component={Fruits}/>
      <Stack.Screen name='Grains' component={Grains}/>
      <Stack.Screen name='Search Products' component={Search_Products}/>

    </Stack.Navigator>
  );
}

function StackNavigator2() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='profile' component={LoginProfile}  options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Message' component={Message}/>
      <Stack.Screen name='LoginProfile' component={Profile} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='AccLoging' component={AccLoging} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Favorite Posts' component={Favorites}/>
      <Stack.Screen name='Register' component={Register} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Login' component={Login} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='CreactAcc' component={Create} options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='My Post' component={MyAds}/>
      <Stack.Screen name='My Oders' component={MyOders}/>
      <Stack.Screen name='Setting' component={Setting}/>
      <Stack.Screen name='Add Post' component={AddProduct} options={{headerStyle: {backgroundColor:'rgb(30 41 59)'}, headerTitleStyle: {color:'white'},}}/>
      <Stack.Screen name='location' component={Location}/>

    </Stack.Navigator>
  );
}

function StackNavigator3() {
  return (
    <Stack.Navigator>

      <Stack.Screen name='Search' component={Search}  options={{headerStyle: {height: '',},}}/>
      <Stack.Screen name='Vegitables' component={Vegitables}/>
      <Stack.Screen name='Fruits' component={Fruits}/>
      <Stack.Screen name='Grains' component={Grains}/>
      <Stack.Screen name='Search Products' component={Search_Products}/>

    </Stack.Navigator>
  );
}

function StackNavigator4() {
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
