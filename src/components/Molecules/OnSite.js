import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import constants from '../../Constants/HomeScreen';

const styles = StyleSheet.create({
  body: {},
});

function OnSite(props) {
  return (
    <View style={styles.body}>
      <Text>{constants.on_site_btn_text}</Text>
    </View>
  );
}

export default OnSite;
