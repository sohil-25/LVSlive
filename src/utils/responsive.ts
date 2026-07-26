import { Dimensions, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get('window');

// Standard design baseline frame (e.g. iPhone 14 / standard 393x852 viewport)
const BASE_WIDTH = 393;
const BASE_HEIGHT = 852;

/**
 * Scale horizontal dimensions proportionally to screen width
 */
export const scale = (size: number): number => {
  return Math.round((SCREEN_WIDTH / BASE_WIDTH) * size);
};

/**
 * Scale vertical dimensions proportionally to screen height
 */
export const verticalScale = (size: number): number => {
  return Math.round((SCREEN_HEIGHT / BASE_HEIGHT) * size);
};

/**
 * Moderately scale values to prevent extreme scaling on tablets / large screens
 */
export const moderateScale = (size: number, factor = 0.5): number => {
  return Math.round(size + (scale(size) - size) * factor);
};

/**
 * Responsive font scale factor using PixelRatio
 */
export const fontScale = (size: number): number => {
  const newSize = size * (SCREEN_WIDTH / BASE_WIDTH);
  return Math.round(PixelRatio.roundToNearestPixel(newSize));
};

export { SCREEN_WIDTH, SCREEN_HEIGHT };
