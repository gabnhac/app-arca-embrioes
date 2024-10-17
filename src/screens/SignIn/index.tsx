import React from "react";
import { ScrollView, Text, View } from "react-native";
import { BoxLogo, Container, ContainerContent, TextForgotPass, WrapperForgotPass, WrapperForm} from "./styles";
import ArcaLogo from "@assets/svgs/ArcaLogo";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { ImageBackground } from "@screens/Presentation/styles";
import BackgroundImg from "@assets/pastoBackground.jpg";

export default function SignIn() {
    return (
        <Container>
            <ImageBackground
                source={BackgroundImg}
                alt="Gado no pasto"
            />
                <ScrollView style={{width: '100%', height: '100%'}} contentContainerStyle={{flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 60}}>
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
                            <WrapperForgotPass>
                                <TextForgotPass>
                                    Esqueceu a Senha?
                                </TextForgotPass>
                            </WrapperForgotPass>
                            <Button
                                label="Entrar"
                                shadowWhite
                            />
                        </WrapperForm>
                    </ContainerContent>
                </ScrollView>
        </Container>
    )
}