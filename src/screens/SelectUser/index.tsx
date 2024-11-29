import { Dimensions, Image } from "react-native";
import { Container, Option, TextOption, WrapperContent, WrapperTitle } from "./styles";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export default function SelectUser() {
    const { height, width } = Dimensions.get('screen');

    const navigation = useNavigation<AuthNavigatorRoutesProps>();
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

            <WrapperTitle>
                <Title
                    title="Escolha seu perfil"
                    typeFontSize={25}
                    typeFontWeight="BOLD"
                />
            </WrapperTitle>

            <WrapperContent>
                <Option onPress={() => navigation.navigate('signin', {
                    UserType: 'OWNER'
                })}>
                    <TextOption>Proprietário</TextOption>
                </Option>
                <Option onPress={() => navigation.navigate('signin', {
                    UserType: 'LAB'
                })}>
                    <TextOption>Laboratorio</TextOption>
                </Option>
            </WrapperContent>

        </Container>

    )
}