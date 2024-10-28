import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerNavigationProp } from "@react-navigation/drawer";

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Report from "@screens/Report";
import AnimalDetails from "@screens/AnimalDetails";

import theme from "@theme/index";

type AppRoutes = {
    animal_details: undefined;
    profile: undefined;
    home: undefined;
    report: undefined;
}

export type AppNavigatorRouteProps = NativeStackNavigationProp<AppRoutes>;

const appStack = createNativeStackNavigator<AppRoutes>();
const appDrawer = createDrawerNavigator<AppRoutes>();

const styleTheme = theme;

export function StackAppRoutes() {
    return (
        <appStack.Navigator
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: "pop"
            }}
        >
            <appStack.Screen
                name="animal_details"
                component={AnimalDetails}
            />


        </appStack.Navigator>
    )
}

export function DrawerAppRoutes() {
    return (
        <appDrawer.Navigator screenOptions={{
            title: '',
        }}>
            <appDrawer.Screen
                name="home"
                component={Home}
                options={{
                    drawerLabel: 'Início',
                    headerStyle: {
                        backgroundColor: styleTheme.COLORS.FRENCH_GRAY,
                        
                    }
                }}
            />
            <appDrawer.Screen
                name="profile"
                component={Profile}
                options={{
                    drawerLabel: 'Perfil',
                    headerStyle: {
                    backgroundColor: styleTheme.COLORS.RUSSIAN_VIOLET
                    }
                }}
            />
            <appDrawer.Screen
                name="report"
                component={Report}
                options={{
                    drawerLabel: 'Relatório',
                    headerStyle: {
                        backgroundColor: styleTheme.COLORS.RUSSIAN_VIOLET
                    }
                }}
            />
        </appDrawer.Navigator>
    )

}