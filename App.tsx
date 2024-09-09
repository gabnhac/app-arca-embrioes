import { StatusBar, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import Presentation from '@screens/Presentation';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <StatusBar
           barStyle="light-content"
           backgroundColor="transparent"
           translucent
        />
        { fontsLoaded ? <Presentation/> : <View/>}
      
      </View>
    </ThemeProvider>
  );
}

