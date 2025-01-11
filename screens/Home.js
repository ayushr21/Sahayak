import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  useWindowDimensions,
  FlatList,
  Pressable
} from "react-native";
import React, {useEffect, useState} from "react";
import Header from "../components/Header";
import Complaint from "../components/Complaint";
// import MockComplaintData from "../MOCK_COMPLAINT_DATA.json";

const Home = () => {
  const windowHeight = useWindowDimensions().height - 100;
  const windowWidth = useWindowDimensions().width - 40;
  const [complaints, setComplaints] = useState([]);

  const getComplaints = async () => {
    try {
      const response = await fetch("http://172.25.185.248:3001/complaint");
      const data = await response.json();
      setComplaints(data.complaints);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getComplaints();
  }, []);
  return (
    <View style={styles.container}>
      <Pressable onPress={getComplaints}>
        <Header />
      </Pressable>
      <View style={[styles.main, { width: windowWidth, height: windowHeight }]}>
        <Text style={styles.pageHeading}>Community Complaints</Text>
        <FlatList
          data={complaints}
          renderItem={({ item }) => {
            return <Complaint item={item} />;
          }}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 20,
  },
  main: {},
  pageHeading: {
    fontSize: 25,
    height: 50,
    // fontFamily: 'Mitr-Regular',
  },
  scrollView: {},
});
