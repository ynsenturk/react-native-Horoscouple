import React, {useState} from 'react';
import {ScrollView, View, Text, TouchableOpacity} from 'react-native';
import styles from './Login.style';
import CustomInput from '../../components/CustomInput';
import Colors from '../../styles/Colors';

const Login = ({navigation}: {navigation: any}) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  return (
    <ScrollView style={styles.containerScrollView}>
      <View style={styles.containerView}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Login here</Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitleText}>
            Welcome back you've been missed!
          </Text>
        </View>
        <View style={styles.loginBottomContainer}>
          <CustomInput
            placeholder="Email Address"
            placeholderTextColor={Colors.grey}
            textSize={14}
            inputBg={Colors.white}
            inputHeight={48}
            radius={8}
            marginBottom={10}
          />
          <CustomInput
            placeholder="Password"
            placeholderTextColor={Colors.grey}
            textSize={14}
            inputBg={Colors.white}
            inputHeight={48}
            radius={8}
            rightIcon
            rightIconName={passwordHidden ? 'eye' : 'eye-slash'}
            rightIconFunction={() => setPasswordHidden(!passwordHidden)}
            iconColor={Colors.grey}
            iconSize={21}
            password={passwordHidden}
            marginBottom={10}
          />
        </View>
        <View style={styles.forgotPasswordLinkButtonView}>
          <TouchableOpacity
            onPress={() => console.log('forgot')}
            style={styles.forgotPasswordLinkButton}>
            <Text style={[styles.linkButtonText, {color: Colors.lightBlue}]}>
              Forgot your password?
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => console.log('sign in')}
            style={[styles.button, styles.signInButton]}>
            <Text style={[styles.buttonText, styles.signInButtonText]}>
              Sign in
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.createAccountLinkButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Register')}
            style={styles.createAccountLinkButton}>
            <Text
              style={[
                styles.linkButtonText,
                {color: Colors.defaultBackgroundColor},
              ]}>
              Create new account
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Login;
