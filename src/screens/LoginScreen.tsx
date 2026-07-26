import React, { useState } from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { CustomInput } from '../components/CustomInput';
import { PrimaryButton } from '../components/PrimaryButton';
import { SocialButton } from '../components/SocialButton';
import { COLORS } from '../constants/theme';
import {
  fontScale,
  moderateScale,
  SCREEN_HEIGHT,
  SCREEN_WIDTH,
  verticalScale,
} from '../utils/responsive';

// Asset Imports
const aliveLogo = require('../assets/images/alive_logo.png');
const googleIcon = require('../assets/images/google_icon.png');
const facebookIcon = require('../assets/images/facebook_icon.png');

export const LoginScreen: React.FC = () => {
  const [emailOrPhone, setEmailOrPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login action
  };

  const handleGoogleLogin = () => {
    // Handle Google auth
  };

  const handleFacebookLogin = () => {
    // Handle Facebook auth
  };

  const handleForgotPassword = () => {
    // Handle forgot password
  };

  const handleSignUp = () => {
    // Navigate to Sign Up
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
          bounces={false}
        >
          {/* Upper Section */}
          <View style={styles.topSection}>
            {/* Logo Container */}
            <View style={styles.logoWrapper}>
              <Image source={aliveLogo} style={styles.logo} resizeMode="contain" />
            </View>

            {/* Title & Subtitle */}
            <Text style={styles.title}>
              Welcome back! <Text style={styles.waveEmoji}>👋</Text>
            </Text>
            <Text style={styles.subtitle}>
              Sign in to continue your live streaming journey.
            </Text>

            {/* Form Inputs */}
            <View style={styles.formContainer}>
              <CustomInput
                label="Email ID or Phone Number"
                placeholder="Enter Registered Email or Phone No."
                value={emailOrPhone}
                onChangeText={setEmailOrPhone}
                keyboardType="email-address"
                autoCapitalize="none"
              />

              <CustomInput
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChangeText={setPassword}
                isPassword
              />

              {/* Forgot Password Link */}
              <TouchableOpacity
                onPress={handleForgotPassword}
                style={styles.forgotPasswordContainer}
                activeOpacity={0.7}
              >
                <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
              </TouchableOpacity>

              {/* Primary Login Button */}
              <PrimaryButton
                title="Login"
                onPress={handleLogin}
                style={styles.loginButton}
              />
            </View>
          </View>

          {/* Bottom Organic Wave Gradient Section */}
          <View style={styles.bottomSectionContainer}>
            {/* Curved Arc Background Layer */}
            <View style={styles.waveArcCurve} />
            <LinearGradient
              colors={['#009638', '#007A2D', '#8CD600']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 1 }}
              style={styles.bottomGradient}
            >
              {/* Divider: or continue with */}
              <View style={styles.dividerContainer}>
                <View style={styles.dividerLine} />
                <Text style={styles.dividerText}>or continue with</Text>
                <View style={styles.dividerLine} />
              </View>

              {/* Social Login Buttons */}
              <SocialButton
                title="Continue with Google"
                icon={googleIcon}
                onPress={handleGoogleLogin}
              />
              <SocialButton
                title="Continue with Facebook"
                icon={facebookIcon}
                onPress={handleFacebookLogin}
              />

              {/* Sign Up Footer Text */}
              <View style={styles.signUpContainer}>
                <Text style={styles.signUpText}>
                  Don’t have an account?{' '}
                  <Text style={styles.signUpLink} onPress={handleSignUp}>
                    Sign Up
                  </Text>
                </Text>
              </View>
            </LinearGradient>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
  topSection: {
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(20),
    alignItems: 'center',
  },
  logoWrapper: {
    width: moderateScale(80),
    height: moderateScale(80),
    borderRadius: moderateScale(20),
    shadowColor: COLORS.primary,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.15,
    shadowRadius: 10,
    elevation: 5,
    marginBottom: verticalScale(20),
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: moderateScale(76),
    height: moderateScale(76),
    borderRadius: moderateScale(18),
  },
  title: {
    fontSize: fontScale(26),
    fontWeight: '800',
    color: COLORS.textDark,
    textAlign: 'center',
    marginBottom: verticalScale(6),
  },
  waveEmoji: {
    fontSize: fontScale(24),
  },
  subtitle: {
    fontSize: fontScale(14),
    color: COLORS.textMuted,
    textAlign: 'center',
    marginBottom: verticalScale(28),
    lineHeight: fontScale(20),
  },
  formContainer: {
    width: '100%',
  },
  forgotPasswordContainer: {
    alignSelf: 'flex-end',
    marginBottom: verticalScale(24),
    marginTop: -verticalScale(4),
  },
  forgotPasswordText: {
    color: COLORS.forgotPassword,
    fontSize: fontScale(14),
    fontWeight: '700',
    textDecorationLine: 'underline',
  },
  loginButton: {
    marginBottom: verticalScale(16),
  },
  bottomSectionContainer: {
    width: SCREEN_WIDTH,
    marginTop: verticalScale(20),
    position: 'relative',
  },
  waveArcCurve: {
    position: 'absolute',
    top: -verticalScale(30),
    left: -SCREEN_WIDTH * 0.1,
    width: SCREEN_WIDTH * 1.2,
    height: verticalScale(60),
    backgroundColor: '#009638',
    borderTopLeftRadius: SCREEN_WIDTH * 0.6,
    borderTopRightRadius: SCREEN_WIDTH * 0.6,
  },
  bottomGradient: {
    width: '100%',
    paddingHorizontal: moderateScale(24),
    paddingTop: verticalScale(20),
    paddingBottom: verticalScale(36),
    borderTopLeftRadius: moderateScale(40),
    borderTopRightRadius: moderateScale(40),
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(16),
  },
  dividerLine: {
    flex: 1,
    height: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
  },
  dividerText: {
    color: '#FFFFFF',
    fontSize: fontScale(14),
    fontWeight: '500',
    paddingHorizontal: moderateScale(12),
  },
  signUpContainer: {
    marginTop: verticalScale(20),
    alignItems: 'center',
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: fontScale(15),
    fontWeight: '500',
  },
  signUpLink: {
    fontWeight: '800',
    textDecorationLine: 'underline',
    color: '#FFFFFF',
  },
});
