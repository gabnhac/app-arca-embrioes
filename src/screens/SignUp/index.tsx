import React from "react";
import { ScrollView, Image, Dimensions } from "react-native";
import { Container, ContainerContent, WrapperForm } from "./styles";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "@routes/auth.routes";

export default function SignUp() {
    const { height, width } = Dimensions.get('screen');

    const navigation = useNavigation<AuthNavigatorRoutesProps>();

    function handleGoBack() {
        navigation.goBack()
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
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <ContainerContent>
                    <Title
                        title="Crie sua conta"
                        typeFontSize={30}
                        typeFontWeight="BOLD"
                    />
                    <WrapperForm>
                        <Input
                            label="Nome"
                        />

                        <Input
                            label="E-mail"
                        />

                        <Input
                            label="Cnpj"
                        />

                        <Input
                            label="Telefone"
                            
                        />

                        <Input
                            label="Senha"
                            secureTextEntry
                        />

                        <Input
                            label="Confirmar Senha"
                            secureTextEntry
                        />

                        <Button
                            label="Criar"
                            shadowWhite
                        />

                        <Button
                            label="Voltar para login"
                            colorType="SECONDARY"
                            onPress={handleGoBack}
                        />

                    </WrapperForm>
                </ContainerContent>
            </ScrollView>
        </Container>
    )
}