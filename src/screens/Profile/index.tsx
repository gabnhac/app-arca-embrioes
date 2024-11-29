import React from "react";
import { Container, WraperContent, WrapperButton, WrapperDate, WrapperHeader } from "./styles";
import Title from "@components/Title/Title";
import Input from "@components/Input/Input";

import AntDesign from '@expo/vector-icons/AntDesign';
import BackOption from "@components/BackOption";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRouteProps } from "@routes/app.routes";
import { useAuth } from "../../hooks/useAuth";

export default function Profile() {

    const { user } = useAuth();

    function formatTel(tel: string) {
        const newTel = tel.replace(/(\d{2})(\d{5})(\d{4})/, "($1) $2-$3");
        return newTel;
    }

    function formatCnpj(cnpj: string) {
        const newCnpj = cnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
        return newCnpj
    }

    const navigation = useNavigation<AppNavigatorRouteProps>();
    return (
        <Container>
            <BackOption
                onPress={() => navigation.goBack()}
            />
            <WraperContent>
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
                        editable={false}
                    />
                    <Input
                        label="E-mail"
                        value={user.email}
                        editable={false}
                    />
                    <Input
                        label="Celular"
                        value={formatTel(`${user.DDD}${user.telefone}`)}
                        editable={false}
                    />
                    <Input
                        label="CPNJ"
                        value={formatCnpj(user.CNPJ)}
                        editable={false}
                    />
                </WrapperDate>
            </WraperContent>
        </Container>

    )
}