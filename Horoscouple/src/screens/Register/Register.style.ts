import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  containerScrollView: {
    backgroundColor: Colors.moon,
  },
  container: {
    justifyContent: 'center',
    marginTop: 50,
    paddingHorizontal: 25,
  },
  titleView: {
    marginTop: 50,
    alignItems: 'center',
  },
  titleText: {
    fontSize: 28,
    fontWeight: '700',
    textAlign: 'center',
    color: Colors.lightBlue,
  },
  subtitleView: {
    marginTop: 20,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
    color: Colors.defaultBackgroundColor,
  },
  registerBottomContainer: {
    backgroundColor: Colors.moon,
    marginTop: 40,
  },
  buttonView: {
    marginTop: 60,
  },
  button: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  signUpButton: {
    backgroundColor: Colors.lightBlue,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
  },
  signUpButtonText: {
    color: Colors.white,
  },
  linkButtonView: {
    marginTop: 40,
  },
  linkButton: {
    alignItems: 'center',
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: '700',
    color: Colors.defaultBackgroundColor,
  },
});
