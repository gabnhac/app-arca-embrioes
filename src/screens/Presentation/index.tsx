import Button from "@components/Button";
import { Container, Footer, Header, TextPresentation } from "./styles";
import BackgroundImg from "@assets/pastoBackground.jpg";
import { CardLogoPresentation } from "@components/CardLogoPresentation/CardLogoPresentation";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";
import { Dimensions, Image, View } from "react-native";
import FundoLogin from "@assets/svgs/FundoLogin";

export default function Presentation() {
    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    const { height, width } = Dimensions.get('screen');

    function handleNavigateSignIn() {
        navigation.navigate("select_user");
    }
    return (
        <Container>
            <Image
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    flex: 1,
                }}
                source={BackgroundImg}
                alt="Gado no pasto"
            />
            <Header>
                <FundoLogin
                    style={{position: 'absolute'}}
                />

                <View 
                    style={{
                        position: 'relative',
                    }}
                >
                    <CardLogoPresentation />
                </View>

            </Header>

            <Footer>
                <TextPresentation>Plataforma criada com novo modo de monitorar seu material genético bovino</TextPresentation>
                <Button
                    label="Próximo"
                    colorType="PRIMARY"
                    shadowWhite
                    onPress={handleNavigateSignIn}
                />
            </Footer>
        </Container>
    )
}