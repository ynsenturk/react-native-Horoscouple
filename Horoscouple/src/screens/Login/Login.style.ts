import {StyleSheet} from 'react-native';
import Colors from '../../styles/Colors';

export default StyleSheet.create({
  containerScrollView: {
    backgroundColor: Colors.moon,
  },
  containerView: {
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
    marginTop: 25,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  subtitleText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.defaultBackgroundColor,
  },
  loginBottomContainer: {
    backgroundColor: Colors.moon,
    marginTop: 40,
  },
  buttonView: {
    marginTop: 30,
  },
  button: {
    flex: 1,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
  signInButton: {
    backgroundColor: Colors.lightBlue,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: '800',
  },
  signInButtonText: {
    color: Colors.white,
  },
  forgotPasswordLinkButtonView: {
    marginTop: 30,
  },
  forgotPasswordLinkButton: {
    alignItems: 'flex-end',
  },
  createAccountLinkButtonView: {
    marginTop: 40,
  },
  createAccountLinkButton: {
    alignItems: 'center',
  },
  linkButtonText: {
    fontSize: 14,
    fontWeight: '700',
  },
});
