import React, {useState} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import styles from './Register.style';
import CustomInput from '../../components/CustomInput';
import Colors from '../../styles/Colors';

const Register = ({navigation}: {navigation: any}) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const [confirmPasswordHidden, setConfirmPasswordHidden] = useState(true);
  return (
    <ScrollView style={styles.containerScrollView}>
      <View style={styles.container}>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>Create account</Text>
        </View>
        <View style={styles.subtitleView}>
          <Text style={styles.subtitleText}>
            Create an account so you can explore all the existing horoscope
          </Text>
        </View>
        <View style={styles.registerBottomContainer}>
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
          <CustomInput
            placeholder="Confirm Password"
            placeholderTextColor={Colors.grey}
            textSize={14}
            inputBg={Colors.white}
            inputHeight={48}
            radius={8}
            rightIcon
            rightIconName={confirmPasswordHidden ? 'eye' : 'eye-slash'}
            rightIconFunction={() =>
              setConfirmPasswordHidden(!confirmPasswordHidden)
            }
            iconColor={Colors.grey}
            iconSize={21}
            password={confirmPasswordHidden}
          />
        </View>
        <View style={styles.buttonView}>
          <TouchableOpacity
            onPress={() => console.log('sign up')}
            style={[styles.button, styles.signUpButton]}>
            <Text style={[styles.buttonText, styles.signUpButtonText]}>
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.linkButtonView}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Login')}
            style={styles.linkButton}>
            <Text style={styles.linkButtonText}>Already have an account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Register;
