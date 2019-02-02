import { AppRegistry,
  ScrollView,
  StyleSheet,
  Dimensions
} from 'react-native';
import { createStackNavigator,createAppContainer,
  createDrawerNavigator,
  DrawerItems,
  SafeAreaView } from 'react-navigation';



import Basic from './app/components/identity/Basic';
import Login from './app/components/identity/Login';
import Register from './app/components/identity/Register';

import SideMenu from './app/components/general/SideMenu';


import Home from './app/components/home/Home';
// import FireBase from './app/components/identity/FireBase';

const { width } = Dimensions.get('window');



const Stack = {

  Basic: {
    screen: Basic,
  },
  Login: {
    Name: 'Login',
    screen: Login,
  },
  Home: {
    screen: Home,
  },
  Register: {
    screen: Register,

  },
};

const DrawerRoutes = {
  Basic: {
    screen: createStackNavigator(Stack, { initialRouteName: 'Basic' }),
  },
};

const RootStack = createStackNavigator(

  {Drawer: {
      name: 'Drawer',
      screen: createDrawerNavigator(DrawerRoutes, {
        drawerWidth: width * 0.7,
        contentComponent:SideMenu,
        // CustomDrawerContentComponent,
      }),
    },
    ...Stack
  },
  {
    initialRouteName: 'Basic',
  }





);
const RootStack2 =createAppContainer(RootStack);
AppRegistry.registerComponent('iraq', () => RootStack2);


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
