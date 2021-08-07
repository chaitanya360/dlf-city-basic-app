import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import colors from '../../Theme/colors';
import fonts from '../../Theme/fonts';

function Button(props, {isSelected}) {
  const styles = StyleSheet.create({
    body: {
      backgroundColor: isSelected ? colors.dark : colors.white,
      padding: 8,
      borderRadius: 3,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },

    text: {
      color: isSelected ? colors.white : colors.dark,
      fontWeight: fonts.weight.normal,
    },
  });

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{props.children}</Text>
    </View>
  );
}

export default Button;
