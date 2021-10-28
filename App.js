import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import BottomNavigation from './components/BottomNavigation';
import pagesDictionnary from './dictionary/pagesDictionnary';

export default function App() {
  const [page, navigate] = useState(pagesDictionnary.HOME)

  return (
    <View style={styles.container}>
      <page.Component />   
      <BottomNavigation navigate={navigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
});