import {StyleSheet, Dimensions} from 'react-native';
import Colors from '../../styles/Colors';
const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  backgroundImage: {
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    height: deviceSize.height,
    width: deviceSize.width,
  },
  logoView: {
    alignItems: 'center',
    marginTop: deviceSize.height / 3.25,
  },
  logoImage: {
    resizeMode: 'cover',
    height: 250,
    width: 250,
  },
  titleText: {
    fontSize: 45,
    fontWeight: '600',
    color: Colors.moon,
    marginTop: 15,
  },
});
