import React from "react";
import { createNativeStackNavigator, NativeStackNavigationProp } from '@react-navigation/native-stack';

import Home from "@screens/Home";
import Profile from "@screens/Profile";
import Report from "@screens/Report";
import AnimalDetails from "@screens/AnimalDetails";
import MaterialAnimal from "@screens/MaterialAnimal";
import SelectOwner from "@screens/SelectOwner";
import RegisterOwner from "@screens/RegisterOwner";
import MaterialDetails from "@screens/MaterialDetails";
import { useAuth } from "../hooks/useAuth";


export type AppRoutes = {
    select_owner: undefined;
    register_owner: undefined;
    animal_details: undefined;
    profile: undefined;
    home: undefined;
    material_details: undefined;
    report: undefined;
    material_animal: {
        materialName: string
    }
}

export type AppNavigatorRouteProps = NativeStackNavigationProp<AppRoutes>;

export default function AppRoutes() {
    const { Screen, Navigator } = createNativeStackNavigator<AppRoutes>();
    const { userLab } = useAuth();
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
                animation: 'ios'
            }}
            initialRouteName={userLab.CNPJ ? 'select_owner' : 'home'}
        >
            <Screen
                name="select_owner"
                component={SelectOwner}
            />
            <Screen
                name="register_owner"
                component={RegisterOwner}
            />
            <Screen
                name="home"
                component={Home}
            />
            <Screen
                name="profile"
                component={Profile}
            />
            <Screen
                name="report"
                component={Report}
            />
            <Screen
                name="animal_details"
                component={AnimalDetails}
            />
            <Screen
                name="material_animal"
                component={MaterialAnimal}
            />
            <Screen
                name="material_details"
                component={MaterialDetails}
            />
            


        </Navigator>
    )
}