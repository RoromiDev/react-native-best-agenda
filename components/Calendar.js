import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Calendar() {
  return (
    <View style={styles.container}>
      <Text>HELLO WORLD</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
