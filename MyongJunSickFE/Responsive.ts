import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions';

const ZEPLIN__WINDOW__WIDTH = 428;
const ZEPLIN__WINDOW__HEIGHT = 926;

export const widthPercentage = (width: number) => {
  const percentage = (width / ZEPLIN__WINDOW__WIDTH) * 100;

  return responsiveWidth(percentage);
};
export const heightPercentage = (height: number) => {
  const percentage = (height / ZEPLIN__WINDOW__HEIGHT) * 100;

  return responsiveHeight(percentage);
};
export const fontPercentage = (size: number) => {
  const percentage = size * 0.125;

  return responsiveFontSize(percentage);
};
