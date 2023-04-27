import React from 'react';
import {ScrollView, View, Image, Text, TouchableOpacity} from 'react-native';
import styles from './Welcome.style';
import Images from '../../images';

const Welcome = ({navigation}: {navigation: any}) => {
  return (
    <ScrollView style={styles.containerScrollView}>
      <View style={styles.containerView}>
        <View style={styles.horoscopeView}>
          <Image source={Images.horoscopes} style={styles.horoscopeImage} />
          <View style={styles.titleView}>
            <Text style={styles.titleText}>Your Horoscope Matches here</Text>
          </View>
          <View style={styles.subtitleView}>
            <Text style={styles.subtitleText}>
              Join us! If you want horoscope matches
            </Text>
          </View>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={[styles.button, styles.loginButton]}>
            <Text style={[styles.buttonText, styles.loginButtonText]}>
              Login
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={[styles.button, styles.registerButton]}>
            <Text style={[styles.buttonText, styles.registerButtonText]}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Welcome;
