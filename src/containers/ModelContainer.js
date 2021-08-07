import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  body: {
    flexGrow: 1,
  },
});

function ModelContainer(props) {
  return (
    <View style={styles.body}>
      <Text>here model will sit</Text>
    </View>
  );
}

export default ModelContainer;
