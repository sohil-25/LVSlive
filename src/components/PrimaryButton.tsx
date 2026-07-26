import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../constants/theme';
import { fontScale, moderateScale, verticalScale } from '../utils/responsive';

interface PrimaryButtonProps extends TouchableOpacityProps {
  title: string;
  onPress: () => void;
}

export const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  title,
  onPress,
  style,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.85}
      style={[styles.wrapper, style]}
      {...props}
    >
      <LinearGradient
        colors={COLORS.primaryGradient as [string, string]}
        start={{ x: 0, y: 0.5 }}
        end={{ x: 1, y: 0.5 }}
        style={styles.gradientContainer}
      >
        <Text style={styles.buttonText}>{title}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    borderRadius: moderateScale(28),
    elevation: 4,
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 8,
  },
  gradientContainer: {
    height: verticalScale(54),
    borderRadius: moderateScale(28),
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: moderateScale(24),
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: fontScale(16),
    fontWeight: '700',
    letterSpacing: 0.3,
  },
});
