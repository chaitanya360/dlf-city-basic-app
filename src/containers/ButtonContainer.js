import React from 'react';
import {StyleSheet, View} from 'react-native';
import metrics, {screenHeight} from '../Theme/metrics';

function ButtonContainer(props) {
  return <View style={styles.container}>{props.children}</View>;
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: metrics.screenWidth,
    padding: 10,
  },
});

export default ButtonContainer;
