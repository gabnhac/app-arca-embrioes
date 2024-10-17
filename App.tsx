import { StatusBar, Text, View } from 'react-native';
import { Montserrat_400Regular, useFonts } from '@expo-google-fonts/montserrat';
import { ThemeProvider } from 'styled-components/native';
import theme from '@theme/index';
import Routes from '@routes/index';

export default function App() {
  const [fontsLoaded] = useFonts({Montserrat_400Regular});
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

