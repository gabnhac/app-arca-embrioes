import 'react-native-gesture-handler';
import { ActivityIndicator, StatusBar } from 'react-native';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import Routes from '@routes/index';

import { store } from '@store/index'
import { Provider } from 'react-redux'

import { AuthContextProvider } from './src/context/AuthContext';
import Toast from 'react-native-toast-message';

export default function App() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular });
  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
          <StatusBar
            barStyle="light-content"
            backgroundColor="transparent"
            translucent
          />
          <AuthContextProvider>
            {fontsLoaded ? <Routes /> : <ActivityIndicator style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}/>}
            <Toast />
          </AuthContextProvider>
      </Provider>
    </ThemeProvider>
  );
}

