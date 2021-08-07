import React from 'react';

import colors from '../../Theme/colors';
import constants from '../../Constants/HomeScreen';
import {View, StyleSheet, Text} from 'react-native';
import fonts from '../../Theme/fonts';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    color: colors.dark,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  title: {
    textAlign: 'center',
    fontSize: fonts.size.font18,
    paddingHorizontal: 2,
    paddingVertical: 10,
  },
});
function Header(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{constants.title}</Text>
      {/* <View>
        <Text>{constants.click_instruction}</Text>
      </View> */}
    </View>
  );
}

export default Header;
