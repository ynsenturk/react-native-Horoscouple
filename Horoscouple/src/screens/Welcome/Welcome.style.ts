import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  containerScrollView: {
    backgroundColor: Colors.defaultBackgroundColor,
  },
  containerView: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 25,
  },
  horoscopeView: {
    alignItems: 'center',
  },
  horoscopeImage: {
    resizeMode: 'cover',
    height: 300,
    width: 300,
  },
  titleView: {
    marginTop: 50,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 36,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.horoscope,
  },
  subtitleView: {
    marginTop: 5,
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 18,
    fontWeight: '500',
    color: Colors.moon,
  },
  buttonView: {
    flexDirection: 'row',
    marginTop: 50,
  },
  button: {
    flex: 1,
    marginHorizontal: 5,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  loginButton: {
    backgroundColor: Colors.lightBlue,
  },
  registerButton: {
    backgroundColor: Colors.moon,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
  },
  loginButtonText: {
    color: Colors.moon,
  },
  registerButtonText: {
    color: Colors.defaultBackgroundColor,
  },
});
