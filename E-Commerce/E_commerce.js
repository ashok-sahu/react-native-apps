import React from "react";
import { Dimensions } from "react-native";

import {createStackNavigator} from 'react-navigation-stack'
import {Transition} from 'react-native-reanimated'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {createMaterialTopTabNavigator} from 'react-navigation-tabs'
import {createAppContainer} from 'react-navigation'
import createAnimatedSwitchNavigator from 'react-navigation-animated-switch'

import Icon from "@expo/vector-icons/Ionicons";
import Login from "./screens/Login";
import Register from "./screens/Register";
import Home from "./screens/Home";
import Category from "./screens/Category";
import Detail from "./screens/Detail";
import Basket from "./screens/Basket";
import EditBasket from "./screens/EditBasket";
import Address from "./screens/Address";
import Shipping from "./screens/Shipping";
import Payment from "./screens/Payment";
import TermsAndConditions from "./screens/TermsAndConditions";
import CreditCard from "./screens/CreditCard";
import CustomDrawerComponent from "./components/CustomDrawerComponent";





// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';


export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
// const Stack = createStackNavigator();
{/* <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
</NavigationContainer>

<Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
</Stack.Navigator>

<Stack.Screen
  name="Home"
  component={HomeScreen}
  options={{ title: 'Overview' }}
/> */}

// const paymentStackNavigator = createStackNavigator();
// const HomeStackNavigator = createStackNavigator()
// const HomeDrawNavigator = createDrawerNavigator()

const paymentStackNavigator = createStackNavigator(
  {
    Payment: {
      screen: Payment
    },
    CreditCard: {
      screen: CreditCard
    }
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const CheckoutTabNavigator = createMaterialTopTabNavigator(
  {
    Address: {
      screen: Address
    },
    Shipping: {
      screen: Shipping
    },
    Payment: {
      screen: paymentStackNavigator
    }
  },
  {
    swipeEnabled: false,
    tabBarOptions: {
      activeTintColor: "#F08C4F",
      style: {
        backgroundColor: "#63CBA7"
      },
      indicatorStyle: {
        backgroundColor: "#F08C4F"
      }
    }
  }
);

const HomeStackNavigator = createStackNavigator({
  Home: {
    screen: Home,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Home",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="ios-search"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },
  Category: {
    screen: Category,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: navigation.state.params.name,
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            color="white"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        ),
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="md-cart"
            color="white"
            size={30}
            style={{
              paddingRight: 10
            }}
          />
        )
      };
    }
  },
  Basket: {
    screen: Basket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: "Basket",
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Checkout: {
    screen: CheckoutTabNavigator,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Checkout",
        headerLeft: (
          <Icon
            onPress={() => navigation.openDrawer()}
            name="md-menu"
            size={30}
            style={{
              paddingLeft: 10
            }}
          />
        )
      };
    }
  },
  Detail: {
    screen: Detail,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: navigation.state.params.detailName,
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Category")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  TermsAndConditions: {
    screen: TermsAndConditions,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Terms & Conditions",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("CreditCard")}
            name="ios-close"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  },
  EditBasket: {
    screen: EditBasket,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitleStyle: {
          color: "white"
        },
        headerStyle: {
          backgroundColor: "#5BBC9D"
        },
        headerTitle: "Edit Basket Item",
        headerLeft: null,
        headerRight: (
          <Icon
            onPress={() => navigation.navigate("Basket")}
            name="ios-checkmark"
            color="white"
            size={50}
            style={{
              paddingRight: 10
            }}
          />
        ),
        gesturesEnabled: false
      };
    }
  }
});

const HomeDrawNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeStackNavigator
    }
  },
  {
    drawerWidth: Dimensions.get("window").width,
    contentComponent: CustomDrawerComponent
  }
);

const AppSwitchNavigator = createAnimatedSwitchNavigator({
  Login: {
    screen: Login
  },
  Register: {
    screen: Register
  },
  Home: {
    screen: HomeDrawNavigator
  }
},
{
  // The previous screen will slide to the bottom while the next screen will fade in
  transition: (
    <Transition.Together>
      <Transition.Out
        type="slide-bottom"
        durationMs={400}
        interpolation="easeIn"
      />
      <Transition.In type="fade" durationMs={500} />
    </Transition.Together>
  ),
});

const AppContainer = createAppContainer(AppSwitchNavigator);
