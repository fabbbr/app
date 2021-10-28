import React from "react"
import { StyleSheet, View } from "react-native"
import BottomNavigationItem from "./BottomNavigationItem"
import pagesDictionnary from "../dictionaries/pagesDictionnary"

export default function BottomNavigation({ navigate }) {
    return (
        <View style={styles.container}>
            <BottomNavigationItem item={pagesDictionnary.HOME} navigate={navigate} />
            <BottomNavigationItem item={pagesDictionnary.SEARCH} navigate={navigate} />
            <BottomNavigationItem item={pagesDictionnary.SELL} navigate={navigate} />
            <BottomNavigationItem item={pagesDictionnary.MESSAGE} navigate={navigate} />
            <BottomNavigationItem item={pagesDictionnary.PROFIL} navigate={navigate} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ddd',
        position: 'fixed',
        bottom: '0',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    }
})