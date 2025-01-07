import { StyleSheet } from "react-native";
import PhoneNoReg from "./screens/PhoneNoReg";
import OTPVerification from "./screens/OTPVerification";
import UserRegistration from "./screens/UserRegisteration";
import Home from "./screens/Home";
import NewComplaint from "./screens/NewComplaint";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
export default function App() {
  const isSignedIn = true;
  return (
    <NavigationContainer>
      {isSignedIn ? (
        <>
          <Tab.Navigator
            screenOptions={{
              tabBarShowLabel: false,
              headerShown: false,
              tabBarStyle: { height: 50 },
            }}
          >
            <Tab.Screen
              name="Home"
              component={Home}
              options={{
                tabBarIcon: ({ color }) => (
                  <MaterialCommunityIcons
                    name="account-group-outline"
                    size={50}
                    color={color}
                  />
                ),
              }}
            />
            <Tab.Screen
              name="New Complaint"
              component={NewComplaint}
              options={{
                tabBarIcon: ({ color }) => (
                  <Ionicons
                    name="add-circle-outline"
                    size={50}
                    color={color}
                  />
                ),
              }}
            />
          </Tab.Navigator>
        </>
      ) : (
        <>
          <Stack.Navigator screenOptions={{
            headerShown: false,
            animation: "none",
          }}>
            <Stack.Screen name="PhoneNoReg" component={PhoneNoReg} />
            <Stack.Screen name="OTPVerification" component={OTPVerification} />
            <Stack.Screen name="UserRegistration" component={UserRegistration} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
    // <View style={styles.container}>
    //   <PhoneNoReg/>
    //   <OTPVerification/>
    //   <UserRegistration/>
    //   <Home/>
    //   <NewComplaint/>
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: StatusBar.currentHeight,
    // paddingHorizontal: 15,
    // backgroundColor: "transparent",
  },
});
