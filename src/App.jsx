import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.content}>App</Text>
    </View>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#cb202d',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    width: '100%',
    fontSize: 20,
    color: 'black',
    textAlign: 'left',
    backgroundColor: 'white',
    transform: [{translateX: 90}, {translateY: 40}],
  },
});
