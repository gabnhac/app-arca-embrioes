import { NavigationContainer } from "@react-navigation/native";
import AppRoutes from "./app.routes";
import AuthRoutes from "./auth.routes";

export default function Routes(){
    return(
        <NavigationContainer>
            <AppRoutes/>
        </NavigationContainer>
    )
}