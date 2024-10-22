import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";
import { View } from "react-native";

export default function Routes(){
    return(
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </View>
    )
}