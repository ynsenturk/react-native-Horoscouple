import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';
import Images from '../../images';
import styles from './Splash.style';

const Splash = ({navigation}: {navigation: any}) => {
  const [authLoaded, setAuthLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthLoaded(true);
    }, 1500);
  }, []);

  useEffect(() => {
    if (authLoaded) {
      navigation.navigate('Welcome');
    }
  }, [authLoaded, navigation]);

  return (
    <View>
      <Image source={Images.splash} style={styles.backgroundImage} />
      <View style={styles.logoView}>
        <Image source={Images.logo} style={styles.logoImage} />
        <Text style={styles.titleText}>Horoscouple</Text>
      </View>
    </View>
  );
};

export default Splash;
