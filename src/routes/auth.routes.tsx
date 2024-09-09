import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Presentation from "@screens/Presentation";
import SignIn from "@screens/SignIn";
import SignUp from "@screens/SignUp";

const {Navigator, Screen} = createStackNavigator();

export default function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false
            }}
        >
            <Screen
                name="presentation"
                component={Presentation}
            />
            <Screen
                name="signin"
                component={SignIn}
            />
            <Screen
                name="signup"
                component={SignUp}
            /> 
        </Navigator>
    )
}