import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  useWindowDimensions,
  Image,
  TextInput,
  Pressable
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import bgImage from "../assets/images/loginScreenBgImage.jpg";
import logo from "../assets/logo/Sahayak-logos_white.png";

const PhoneNoReg = ({navigation}) => {
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
            <View>
              <Text style={styles.slogan}>
                Speak up, Transform your Village
              </Text>
              <View style={styles.phoneNoContainer}>
                <View style={styles.countryCodeContainer}>
                  <Text style={styles.countryCode}>+91</Text>
                </View>
                <TextInput
                  style={styles.phoneNo}
                  maxLength={10}
                  keyboardType="numeric"
                  placeholder="Enter Your Number"
                />
              </View>
              <Pressable style={styles.loginButton} onPress={()=>navigation.navigate("OTPVerification")}>
                <Text style={styles.loginButtonText}>Login</Text>
              </Pressable>
              <Text style={styles.notice}>By continuing, you agree to our terms of service and privacy.</Text>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default PhoneNoReg;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
    backgroundColor: "#000",
  },
  main: {
    display: "flex",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingHorizontal: 20,
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
  phoneNoContainer: {
    display: 'flex',
    flexDirection: "row",
    gap: 10,
  },
  countryCodeContainer: {
    backgroundColor: "#fff",
    height: 50,
    width: 50,
    borderRadius: 5,
    justifyContent: "center",
  },
  countryCode: {
    textAlign: "center",
    fontSize: 25,
    // fontFamily: 'LeagueGothic-Regular',
  },
  phoneNo: {
    flex: 1,
    textAlign: "center",
    fontSize: 25,
    // fontFamily: 'LeagueGothic-Regular',
    backgroundColor: "#fff",
    height: 50,
    borderRadius: 5,
  },
  loginButton: {
    height: 50,
    borderRadius: 5,
    color: '#000',
    backgroundColor: '#e5d010',
    justifyContent: "center",
    marginVertical: 10,
  },
  loginButtonText: {
    textAlign: "center",
    fontSize: 25,
    // fontFamily: 'LeagueGothic-Regular',
  },
  notice: {
    color: "#fff",
    fontSize: 14,
    letterSpacing: -1,
    textAlign: 'center',
    // fontFamily: 'LeagueGothic-Regular',
  },
});
