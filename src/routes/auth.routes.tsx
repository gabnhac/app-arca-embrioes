import {createNativeStackNavigator, NativeStackNavigationProp} from '@react-navigation/native-stack';
import SignIn from '@screens/SignIn';
import Presentation from '@screens/Presentation';
import SelectUser from '@screens/SelectUser';

type AuthRoutes = {
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
            }}
            initialRouteName='presentation'
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
                name="select_user"
                component={SelectUser}
                options={{
                    animation:'none'
                }}
            /> 
            
        </Navigator>
    )
}