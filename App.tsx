import { StatusBar, Text, View } from 'react-native';
import { Roboto_400Regular, Roboto_700Bold, useFonts } from '@expo-google-fonts/roboto';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import Presentation from '@screens/Presentation';
import Routes from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({Roboto_400Regular, Roboto_700Bold});
  return (
    <ThemeProvider theme={theme}>
        <StatusBar
           barStyle="light-content"
           backgroundColor="transparent"
           translucent
        />
        { fontsLoaded ? <Routes/> : <View/>}
    </ThemeProvider>
  );
}

