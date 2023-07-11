/* eslint-disable prettier/prettier */
import React, { FC } from 'react';
import { HomeStack } from './HomeStack';
import HomeController from 'ui/screens/home/HomeController';
type Props = {
    initialRouteName: 'Home'
}

export const HomeRoutes: FC<Props> = ({ initialRouteName }) => {
    return (
        <HomeStack.Navigator
            initialRouteName={initialRouteName}
            screenOptions={{
                headerTitleAlign: 'center',
                headerStyle: {
                    backgroundColor: 'white',
                },
            }}
        >
            <HomeStack.Screen
                name="Home"
                component={HomeController}
                options={{
                    headerShown: false,
                }}
            />

        </HomeStack.Navigator>
    );
};
