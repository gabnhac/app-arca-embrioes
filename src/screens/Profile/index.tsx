import React from "react";
import { Container, WrapperButton, WrapperDate, WrapperHeader } from "./styles";
import Title from "@components/Title/Title";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { ScrollView } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';

export default function Profile() {
    return (
        <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
            <Container>
                <WrapperHeader>
                    <Title
                        title="Perfil"
                        typeFontSize={30}
                        typeFontWeight="BOLD"
                    />
                    <AntDesign name="user" size={70} color="#FFFFFF" />

                </WrapperHeader>
                <WrapperDate>
                    <Input
                        label="Nome"
                    />

                    <Input
                        label="E-mail"
                    />

                    <Input
                        label="Celular"
                    />

                    <Input
                        label="CPNJ"
                    />
                </WrapperDate>

                <WrapperButton>
                    <Button
                        label="Salvar"
                        colorType="SECONDARY"

                    />
                </WrapperButton>
            </Container>
        </ScrollView>

    )
}