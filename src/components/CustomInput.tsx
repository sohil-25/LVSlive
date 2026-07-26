import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import { COLORS } from '../constants/theme';
import { fontScale, moderateScale, verticalScale } from '../utils/responsive';

interface CustomInputProps extends TextInputProps {
  label: string;
  isPassword?: boolean;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  label,
  isPassword = false,
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={[
          styles.inputContainer,
          isFocused && styles.inputFocused,
        ]}
      >
        <TextInput
          style={styles.input}
          placeholderTextColor={COLORS.textLight}
          secureTextEntry={isPassword && !isPasswordVisible}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          {...props}
        />
        {isPassword && (
          <TouchableOpacity
            style={styles.eyeButton}
            onPress={() => setIsPasswordVisible(!isPasswordVisible)}
            activeOpacity={0.7}
            hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
          >
            <View style={styles.eyeIconContainer}>
              <View style={styles.eyeOuterRing}>
                <View style={styles.eyeInnerPupil} />
              </View>
              {isPasswordVisible && <View style={styles.eyeStrikeThrough} />}
            </View>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: verticalScale(16),
    width: '100%',
  },
  label: {
    fontSize: fontScale(14),
    fontWeight: '500',
    color: COLORS.textMuted,
    marginBottom: verticalScale(8),
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: COLORS.inputBackground,
    borderRadius: moderateScale(14),
    paddingHorizontal: moderateScale(16),
    height: verticalScale(52),
    borderWidth: 1.5,
    borderColor: 'transparent',
  },
  inputFocused: {
    borderColor: COLORS.inputFocusBorder,
    backgroundColor: COLORS.background,
  },
  input: {
    flex: 1,
    fontSize: fontScale(15),
    color: COLORS.textDark,
    paddingVertical: 0,
  },
  eyeButton: {
    paddingLeft: moderateScale(8),
  },
  eyeIconContainer: {
    width: moderateScale(22),
    height: moderateScale(22),
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeOuterRing: {
    width: moderateScale(18),
    height: moderateScale(12),
    borderRadius: moderateScale(6),
    borderWidth: 1.8,
    borderColor: COLORS.textMuted,
    justifyContent: 'center',
    alignItems: 'center',
  },
  eyeInnerPupil: {
    width: moderateScale(5),
    height: moderateScale(5),
    borderRadius: moderateScale(2.5),
    backgroundColor: COLORS.textMuted,
  },
  eyeStrikeThrough: {
    position: 'absolute',
    width: moderateScale(20),
    height: 1.8,
    backgroundColor: COLORS.textMuted,
    transform: [{ rotate: '-45deg' }],
  },
});
