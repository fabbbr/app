import React, { useEffect, useState } from 'react'
import { View, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import BottomNavigation from './components/BottomNavigation'
import pagesDictionnary from './dictionaries/pagesDictionnary'
import * as localStorage from './utils/localStorage'
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  const [page, navigate] = useState(pagesDictionnary.HOME)
  const [init, setInit] = useState(true)
  const [user, setUser] = useState()

  useEffect(() => {
    localStorage.get('uToken').then(token => {
      if(token !== null) {
        
      }
      setUser(token)
    })
  }, [])

  return (
    <SafeAreaProvider>
    <SafeAreaView style={styles.container}  >
      <ScrollView>
        <View style={styles.pageView}>
          <page.Component />   
        </View>
      </ScrollView>
      <BottomNavigation navigate={navigate} />
    </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    fontFamily: 'Roboto'
  },
  pageView: {
    padding: 10
  }
});