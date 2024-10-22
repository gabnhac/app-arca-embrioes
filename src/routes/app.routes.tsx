import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Report from "@screens/Report";
import AnimalDetails from "@screens/AnimalDetails";

const {Navigator, Screen} = createStackNavigator();

export default function AppRoutes(){
    return(
        <Navigator screenOptions={{
            headerShown: false,
            animationTypeForReplace: "pop"
        }}>
            <Screen
                name="animal_details"
                component={AnimalDetails}
            />
            <Screen
                name="profile"
                component={Profile}
            />
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="report"
                component={Report}
            />
        </Navigator>
    )
}