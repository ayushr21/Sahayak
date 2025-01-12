import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import bgImage from "../assets/images/loginScreenBgImage.jpg";
import logo from "../assets/logo/Sahayak-logos_white.png";

const UserRegistration = () => {
  const windowHeight = useWindowDimensions().height;
  const windowWidth = useWindowDimensions().width;
  return (
    <View
      style={[styles.container, { width: windowWidth, height: windowHeight }]}
    >
      <ImageBackground
        source={bgImage}
        style={[styles.bgImage, { width: windowWidth, height: windowHeight }]}
      >
        <LinearGradient
          colors={["rgba(0,0,0,0.25)", "rgba(0,0,0,1)"]}
          style={{ width: windowWidth, height: windowHeight }}
        >
          <View
            style={[styles.main, { width: windowWidth, height: windowHeight }]}
          >
            <Image source={logo} style={styles.logo} />
            <Text style={styles.slogan}>REGISTER</Text>
            <View style={styles.userInfoContainer}>
              <TextInput placeholder="First Name" style={styles.userInfo} />
              <TextInput placeholder="Last Name" style={styles.userInfo} />
              <TextInput placeholder="State" style={styles.userInfo} />
              <TextInput placeholder="District" style={styles.userInfo} />
              <TextInput placeholder="Village / Town" style={styles.userInfo} />
              <TextInput
                placeholder="Pincode"
                style={styles.userInfo}
                keyboardType="numeric"
              />
              <Pressable style={styles.registerButton}>
                <Text style={styles.registerButtonText}>Register</Text>
              </Pressable>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default UserRegistration;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#000",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  logo: {
    aspectRatio: 1 / 1,
    height: 250,
  },
  slogan: {
    textAlign: "center",
    color: "#fff",
    fontSize: 50,
    marginBottom: 25,
    // fontFamily: 'Mitr-Bold',
  },
  registerButton: {
    height: 50,
    width: "100%",
    borderRadius: 5,
    color: "#000",
    backgroundColor: "#e5d010",
    justifyContent: "center",
    marginVertical: 10,
  },
  registerButtonText: {
    textAlign: "center",
    fontSize: 25,
    // fontFamily: 'LeagueGothic-Regular',
  },
  notice: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: -1,
    textAlign: "center",
    // fontFamily: 'LeagueGothic-Regular',
  },
  userInfoContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: 10,
  },
  userInfo: {
    height: 50,
    width: "48%",
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 20,
    textAlign: "center",
  },
});
