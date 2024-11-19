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
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {

    const {user} = useAuth();

    function formatTel(tel: string){
        const newTel = tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        return newTel;
    }

    function formatCnpj(cnpj: string){
        const newCnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        return newCnpj
    }

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
                            value={user.razao_social}
                        />
                        <Input
                            label="E-mail"
                            value={user.email}
                        />
                        <Input
                            label="Celular"
                            value={formatTel(`${user.DDD}${user.telefone}`)}
                        />
                        <Input
                            label="CPNJ"
                            value={formatCnpj(user.CNPJ)}
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