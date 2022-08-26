import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/HomeScreen/Home';
import Details from './components/DetailsScreen/Details';
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <NavigationContainer>
      <StatusBar
        style="light"
      />
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerRight: () => (
            <Ionicons
              name="menu-outline"
              size={24}
              color="white"
            />
          ),
          headerStyle: {
            backgroundColor: '#000'
          },
          headerTintColor: "white"
        }}
      >
        <Stack.Screen
          name="home"
          component={Home}
          options={{
            title: "Pop Movies",

          }}
        />
        <Stack.Screen
          name="detail"
          component={Details}
          options={{
            title: "Movie details",
            headerBackTitleVisible: false
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}