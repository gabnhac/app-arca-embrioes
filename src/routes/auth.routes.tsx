import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignIn from '@screens/SignIn';
import Presentation from '@screens/Presentation';
import SelectUser from '@screens/SelectUser';
import RegisterIp from '@screens/RegisterIp';

export type AuthRoutes = {
    register_ip: undefined;
    signin: {
        UserType: 'OWNER' | 'LAB'
    }
    presentation: undefined,
    select_user: undefined
}

export type AuthNavigatorRoutesProps =  NativeStackNavigationProp<AuthRoutes>;

const {Navigator, Screen} = createNativeStackNavigator<AuthRoutes>();

export default function AuthRoutes(){
    return(
        <Navigator
            screenOptions={{
                headerShown: false,
                animationTypeForReplace: "pop"
            }}
            initialRouteName='register_ip'
        >
            <Screen
                name='register_ip'
                component={RegisterIp}
            />
            <Screen
                name="presentation"
                component={Presentation}
                
            />
            <Screen
                name="signin"
                component={SignIn}
                
            />
            <Screen
                name="select_user"
                component={SelectUser}
                
            /> 
            
        </Navigator>
    )
}