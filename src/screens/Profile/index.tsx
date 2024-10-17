import React from "react";
import { Container, EditImgButton, WrapperAvatar, WrapperButton, WrapperDate, WrapperHeader } from "./styles";
import Title from "@components/Title/Title";
import CardAvatar from "@components/CardAvatar";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import Feather from '@expo/vector-icons/Feather';
import { ScrollView } from "react-native";

export default function Profile(){
    return(
        <ScrollView contentContainerStyle={{flexGrow: 1}} showsVerticalScrollIndicator={false}>
            <Container>
                <WrapperHeader>
                    <Title
                        title="Perfil"
                        typeFontSize={30}
                        typeFontWeight="BOLD"
                    />
                    <WrapperAvatar>
                        <CardAvatar
                            size="LARGE"
                            borderColor="#FFFFFF"
                            imgNetwork="https://github/gabnhac.png"
                        />
                        <EditImgButton>
                            <Feather name="edit" size={24} color="#FFFFFF" />
                        </EditImgButton>
                    </WrapperAvatar>
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