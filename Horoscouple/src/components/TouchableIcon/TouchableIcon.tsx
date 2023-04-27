import React, {FC} from 'react';
import {View, TouchableOpacity} from 'react-native';
import FontAwesoome5 from 'react-native-vector-icons/FontAwesome5';

interface ITouchableIconProps {
  iconName?: string;
  iconColor?: string;
  iconSize?: number;
  onPress: () => void;
}

const TouchableIcon: FC<ITouchableIconProps> = ({
  iconName,
  iconColor,
  iconSize,
  onPress,
}) => {
  return (
    <View>
      <TouchableOpacity onPress={onPress}>
        <FontAwesoome5
          name={iconName ? iconName : ''}
          style={{color: iconColor, fontSize: iconSize}}
        />
      </TouchableOpacity>
    </View>
  );
};

export default TouchableIcon;
