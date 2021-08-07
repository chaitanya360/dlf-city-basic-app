import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('window');

const metrics = {
  screenWidth: width < height ? width : height,
  screenHeight: width < height ? height : width,
};

const screenWidth = metrics.screenWidth;
const screenHeight = metrics.screenHeight;

export default metrics;
export {screenWidth, screenHeight};
