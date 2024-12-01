import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home, myID, NoticeBoard, RecipBoard } from '../screens'; // 필요한 컴포넌트만 가져오기

const Stack = createStackNavigator();

export default function StackNavigator() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="RecipBoard" component={RecipBoard} />
            <Stack.Screen name="NoticeBoard" component={NoticeBoard} />
            <Stack.Screen name="MyID" component={myID} />
        </Stack.Navigator>
    );
}