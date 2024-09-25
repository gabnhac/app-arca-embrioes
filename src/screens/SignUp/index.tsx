import React from "react";
import { ScrollView} from "react-native";
import { Container, ContainerContent, WrapperForm } from "./styles";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { ImageBackground } from "@screens/Presentation/styles";
import BackgroundImg from "@assets/pastoBackground.jpg";
import Title from "@components/Title/Title";

export default function SignUp() {
    return (
        <Container>
            <ImageBackground
                source={BackgroundImg}
                alt="Gado no pasto"
            />
            <ScrollView style={{ width: '100%', height: '100%' }} contentContainerStyle={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', paddingBottom: 60 }}>
                <ContainerContent>
                    <Title
                        title="Crie sua conta"
                        type="BOLD"
                    />
                    <WrapperForm>
                        <Input
                            label="Nome"
                        />

                        <Input
                            label="E-mail"
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
                        />
                    </WrapperForm>
                </ContainerContent>
            </ScrollView>
        </Container>
    )
}