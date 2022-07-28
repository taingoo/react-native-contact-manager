import {Platform} from 'react-native';

/**
 * @description Checking platform
 */
export const isIos = Platform.OS === 'ios';

/**
 * @description Convert fullname into 2 character
 * @param {string} fullName
 */
export const shortenName = fullName => {
  const ar = fullName.trim().split(' ');

  if (ar.length > 1) {
    return `${ar[0].slice(0, 1)}${ar[ar.length - 1].slice(0, 1)}`.toUpperCase();
  }

  return ar[0].slice(0, 1).toUpperCase();
};
