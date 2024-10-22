import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignIn from '@screens/SignIn';
import SignUp from '@screens/SignUp';
import Presentation from '@screens/Presentation';

type AuthRoutes = {
    signin: undefined;
    signup: undefined;
    presentation: undefined,
}

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();


export default function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Screen
                name="presentation"
                component={Presentation}
                options={{
                    animation:'none'
                }}
            />
            <Screen
                name="signin"
                component={SignIn}
                options={{
                    animation:'none'
                }}
            />
            <Screen
                name="signup"
                component={SignUp}
                options={{
                    animation:'none'
                }}
            /> 
            
        </Navigator>
    )
}