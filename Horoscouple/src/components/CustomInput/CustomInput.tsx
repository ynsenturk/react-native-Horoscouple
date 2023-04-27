import React, {FC} from 'react';
import {View, Text, TextInput, TextInputProps} from 'react-native';
import styles from './CustomInput.style';
import TouchableIcon from '../TouchableIcon';

interface IInputProps extends TextInputProps {
  title?: boolean;
  titleText?: string;
  titleTextSize?: number;
  titleTextColor?: string;
  textSize?: number;
  inputBg?: string;
  inputHeight?: number;
  radius?: number;
  iconColor?: string;
  iconSize?: number;
  rightIcon?: boolean;
  rightIconFunction?: () => void;
  rightIconName?: string;
  password?: boolean;
  marginBottom?: number;
}

const CustomInput: FC<IInputProps> = ({
  title,
  titleText,
  titleTextSize,
  titleTextColor,
  textSize,
  inputBg,
  inputHeight,
  radius,
  iconColor,
  iconSize,
  rightIcon,
  rightIconFunction,
  rightIconName,
  password,
  marginBottom,
  ...other
}) => {
  return (
    <View style={[styles.headerContainer, {marginBottom: marginBottom}]}>
      <View style={styles.titleContainer}>
        {title ? (
          <Text style={{color: titleTextColor, fontSize: titleTextSize}}>
            {titleText}
          </Text>
        ) : (
          ''
        )}
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          {...other}
          secureTextEntry={password}
          style={[
            styles.input,
            {
              backgroundColor: inputBg,
              height: inputHeight,
              borderRadius: radius,
              fontSize: textSize,
            },
          ]}
        />
        {rightIcon ? (
          <TouchableIcon
            iconName={rightIconName}
            iconColor={iconColor}
            iconSize={iconSize}
            onPress={() =>
              rightIconFunction !== undefined && rightIconFunction()
            }
          />
        ) : (
          ''
        )}
      </View>
    </View>
  );
};

export default CustomInput;
