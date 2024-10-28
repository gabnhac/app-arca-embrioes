import { NavigationContainer } from "@react-navigation/native";
import { DrawerAppRoutes } from "./app.routes";
import AuthRoutes from "./auth.routes";
import { View } from "react-native";

export default function Routes(){
    return(
        <View style={{flex: 1, backgroundColor: '#FFFFFF'}}>
            <NavigationContainer>
                <DrawerAppRoutes/>
            </NavigationContainer>
        </View>
    )
}