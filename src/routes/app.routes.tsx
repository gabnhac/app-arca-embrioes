import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Report from "@screens/Report";

const {Navigator, Screen} = createStackNavigator();

export default function AppRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
            
        }}>
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="report"
                component={Report}
            />
            <Screen
                name="profile"
                component={Profile}
            />
        </Navigator>
    )
}