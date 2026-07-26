import React from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import { COLORS } from '../constants/theme';
import { fontScale, moderateScale, verticalScale } from '../utils/responsive';

interface SocialButtonProps extends TouchableOpacityProps {
  title: string;
  icon: ImageSourcePropType;
  onPress: () => void;
}

export const SocialButton: React.FC<SocialButtonProps> = ({
  title,
  icon,
  onPress,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, style]}
      onPress={onPress}
      activeOpacity={0.85}
      {...props}
    >
      <Image source={icon} style={styles.icon} resizeMode="contain" />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    height: verticalScale(52),
    borderRadius: moderateScale(26),
    width: '100%',
    marginVertical: verticalScale(6),
    paddingHorizontal: moderateScale(20),
    elevation: 2,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  icon: {
    width: moderateScale(22),
    height: moderateScale(22),
    marginRight: moderateScale(12),
  },
  text: {
    fontSize: fontScale(15),
    fontWeight: '700',
    color: COLORS.textDark,
  },
});
