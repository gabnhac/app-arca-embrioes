import { useContext } from "react";

import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { View } from "react-native";
import { useAuth } from "../hooks/useAuth";


export default function Routes() {
    const { user } = useAuth();


    return (
        <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <NavigationContainer>
               {/*user.id ? <AppRoutes /> : <AuthRoutes />*/}
               <AppRoutes/>
            </NavigationContainer>
        </View>
    )
}