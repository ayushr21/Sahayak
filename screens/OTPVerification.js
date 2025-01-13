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

const OTPVerification = ({navigation}) => {
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
            <View style={styles.bottomContainer}>
              <Text style={styles.heading}>Verify Phone Number</Text>
              <View style={styles.OTPContainer}>
                <TextInput
                  style={styles.OTPDigit}
                  placeholder="X"
                  maxLength={1}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.OTPDigit}
                  placeholder="X"
                  maxLength={1}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.OTPDigit}
                  placeholder="X"
                  maxLength={1}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.OTPDigit}
                  placeholder="X"
                  maxLength={1}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.OTPDigit}
                  placeholder="X"
                  maxLength={1}
                  keyboardType="numeric"
                />
                <TextInput
                  style={styles.OTPDigit}
                  placeholder="X"
                  maxLength={1}
                  keyboardType="numeric"
                />
              </View>
              
              <View style={styles.verifyButtonContainer}>
                <Text style={styles.notice}>Didn't receive yet? <Text style={styles.linkText}>Resend OTP</Text></Text>
                <Pressable style={styles.verifyButton} onPress={()=>navigation.navigate("UserRegistration")}>
                  <Text style={styles.verifyButtonText}>Login</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </View>
  );
};
export default OTPVerification;

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
  },
  logo: {
    aspectRatio: 1 / 1,
    height: 250,
  },
  bottomContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "rgba(119,119,119,0.8)",
    borderTopRightRadius: 50,
    borderTopLeftRadius: 50,
    width: "100%",
    height: "35%",
    padding: 20,
  },
  heading: {
    textAlign: "center",
    color: "#fff",
    fontSize: 25,
    // marginBottom: 25,
  },
  OTPContainer: {
    flexDirection: "row",
    gap: 8,
  },
  OTPDigit: {
    height: 50,
    width: 50,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 25,
    textAlign: "center",
  },
  verifyButtonContainer: {
    width: '100%',
  },
  verifyButton: {
    height: 50,
    width: "100%",
    borderRadius: 5,
    color: "#000",
    backgroundColor: "#e5d010",
    justifyContent: "center",
    marginVertical: 10,
  },
  verifyButtonText: {
    textAlign: "center",
    fontSize: 25,
    // fontFamily: 'LeagueGothic-Regular',
  },
  notice: {
    color: "#fff",
    fontSize: 14,
    textAlign: "center",
    // fontFamily: 'LeagueGothic-Regular',
  },
  linkText: {
    color: '#3E46FF',
    textDecorationStyle: 'solid',
    textDecorationColor: '#3E46FF',
    textDecorationLine: 'underline',
  },
});
