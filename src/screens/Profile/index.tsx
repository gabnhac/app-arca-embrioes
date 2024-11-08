import React, { useEffect } from "react";
import { StatusBar } from "react-native";
import { Container, WraperContent, WrapperButton, WrapperDate, WrapperHeader } from "./styles";
import Title from "@components/Title/Title";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import { ScrollView } from "react-native";

import AntDesign from '@expo/vector-icons/AntDesign';
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";

export default function Profile() {

    const navigation = useNavigation<AppNavigatorRouteProps>();
    return (
        <Container>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}>
                <WraperContent>
                    <BackOption
                        onPress={() => navigation.goBack()}
                    />
                    <WrapperHeader>
                        <Title
                            title="Perfil"
                            typeFontSize={25}
                            typeFontWeight="BOLD"
                        />
                        <AntDesign name="user" size={60} color="#FFFFFF" />
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
                </WraperContent>
            </ScrollView>
        </Container>

    )
}