import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import logoIcon from '../assets/logo/logo-icon.png';

const Header = () => {
  return (
    <View style={styles.container}>
        <Image source={logoIcon} style={styles.logoIcon}/>
      <Text style={styles.logoText}>Sahayak</Text>
    </View>
  )
}

export default Header;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
    },
    logoIcon: {
        height: 50,
        width: 50,
    },
    logoText: {
        fontSize: 25,
        marginLeft: 10,
        // fontFamily: 'LeagueGothic-Regular',
    },
});