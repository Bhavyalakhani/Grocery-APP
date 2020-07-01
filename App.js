/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import auth from "@react-native-firebase/auth"
import storage from "@react-native-firebase/storage"
import { createSwitchNavigator } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createAppContainer} from 'react-navigation'
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'

import Loading from './screens/loading'
import SignUp from './screens/signup'
import Login from './screens/login'
import Main from './screens/main'
import Home from './screens/Home'
import Settings from './screens/settings'
import Profile from "./screens/profile"
import Icon from 'react-native-vector-icons/Ionicons'
const Switch = createSwitchNavigator(
  {
    Loading:{screen:Loading},
    SignUp:{screen:SignUp},
    Login:{screen:Login},
    Main:{screen:Main}
  },
  {
    initialRouteName: 'Loading'
  }
)


const Stack = createStackNavigator(
  {
    Loading:{screen:Loading},
    SignUp:{screen:SignUp},
    Login:{screen:Login},
    Main:{screen:Main}
  },
  {
    initialRouteName: 'Loading'
  }
)
const Drawer1 =createStackNavigator({
  
  Home:{screen:Home,
    defaultNavigationOptions: ({navigation}) => {  
      return {  
          headerLeft: (  
              <Icon  
                  style={{ paddingLeft: 10 }}  
                  onPress={() => navigation.toggleDrawer()}  
                  name="ios-menu"  
                  size={50}  
              />
          )  
      };  
      }  },
  Settings:{screen:Settings},
  Profile:{screen:Profile}
}
  
)

const Drawer=createDrawerNavigator({
  Home:{screen:Drawer1},
  Profile:{screen:Profile}
})
const Material=createMaterialBottomTabNavigator(
  {
      Login: {screen:Switch,
      navigationOptions:{  
        tabBarLabel:'Home',
        tabBarIcon:<Icon size={24} name="android-person" style={{ color: "black" }} />
    }  
  

    },
    Profile: { screen: Stack },
    Settings: { screen: Drawer },

  },
  {
    initialRouteName: 'Login',
    tabBarOptions: {
      activeTintColor: 'white',
      inactiveColor: '#9e9e9e', showIcon: 'true',
      style: { backgroundColor: 'blue', marginBottom: 20 },
      labelStyle: { fontSize: 20, textTransform: 'capitalize', textAlign: 'center', paddingBottom: 25 },
      tabStyle: { height: 58, justifyContent: 'center', alignItems: 'center', alignContent: 'center' },
      iconStyle: { inactiveColor: 'grey' }
      , indicatorStyle: { height: 4, backgroundColor: '#f48fb1' }
    },
  }
);




const AppContainer = createAppContainer(Material);
class App extends Component{
render(){
  return(
    <AppContainer />
  
  )
}
}


export default App;
