import React, { useEffect, useState } from 'react'
import { View, StyleSheet, Text, Button, TextInput } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'


function HomeScreen({ navigation, route }) {
    React.useEffect(() => {
        if (route.params?.post) {
            // Post updated, do something with `route.params.post`
            // For example, send the post to the server
        }
    }, [route.params?.post]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Button
                title="Create post"
                onPress={() => navigation.navigate('CreatePost')}
            /> */}
            <Text style={{ margin: 10 }}>Post: {route.params?.post}</Text>
        </View>
    );
}

function 

// function CreatePostScreen({ navigation, route }) {
//     const [postText, setPostText] = React.useState('');

//     return (
//         <>
//             <TextInput
//                 multiline
//                 placeholder="What's on your mind?"
//                 style={{ height: 200, padding: 10, backgroundColor: 'white' }}
//                 value={postText}
//                 onChangeText={setPostText}
//             />
//             <Button
//                 title="Done"
//                 onPress={() => {
//                     // Pass and merge params back to home screen
//                     navigation.navigate({
//                         name: 'Home',
//                         params: { post: postText },
//                         merge: true,
//                     });
//                 }}
//             />
//         </>
//     );
// }

function StackScreen() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{ title: 'My home' }}
            />
            <Stack.Screen
                name="Profile"
                component={ProfileScreen}
                options={({ route }) => ({ title: route.params.name })}
            />
        </Stack.Navigator>
    );
}


const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        padding: 10,
        alignItems: 'center'
    }
});