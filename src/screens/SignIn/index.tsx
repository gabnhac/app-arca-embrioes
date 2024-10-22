import React from "react";
import { ScrollView, Dimensions, Image } from "react-native";

import { BoxLogo, Container, ContainerContent, TextForgotPass, WrapperForgotPass, WrapperForm } from "./styles";

import ArcaLogo from "@assets/svgs/ArcaLogo";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import BackgroundImg from "@assets/pastoBackground.jpg";

import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export default function SignIn() {
    const { height, width } = Dimensions.get('window');

    const navigation = useNavigation<AuthNavigatorRoutesProps>()

    function handleNavigateSignUp(){
        navigation.navigate("signup");
    }
    return (
        <Container>
            <Image
                source={BackgroundImg}
                width={width}
                height={height}
                alt="Vacas no pasto"
                style={{
                    width: width,
                    height: height,
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    flex: 1,
                }}
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 30}}>
                <ContainerContent>
                    <BoxLogo>
                        <ArcaLogo />
                    </BoxLogo>
                    <WrapperForm>
                        <Input
                            label="E-mail"
                        />

                        <Input
                            label="Senha"
                            secureTextEntry
                        />

                        <Button
                            label="Entrar"
                            shadowWhite
                        />

                        <Button
                            label="Crie uma Conta"
                            colorType="SECONDARY"
                            onPress={handleNavigateSignUp}
                        />
                    </WrapperForm>
                </ContainerContent>
            </ScrollView>
        </Container>
    )
}