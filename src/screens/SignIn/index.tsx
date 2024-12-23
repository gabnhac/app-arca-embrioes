import React from "react";
import { ScrollView, Dimensions, Image } from "react-native";

import { BoxLogo, Container, ContainerContent, TextForgotPass, WrapperForgotPass, WrapperForm } from "./styles";

import ArcaLogo from "@assets/svgs/ArcaLogo";
import Input from "@components/Input/Input";
import Button from "@components/Button";
import BackgroundImg from "@assets/pastoBackground.jpg";

import { Controller, useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useAuth } from "../../hooks/useAuth";
import { RouteProp, useRoute } from "@react-navigation/native";
import { AuthRoutes } from "@routes/auth.routes";
import Login, { LoginType } from "@services/login";
import Toast from "react-native-toast-message";

type FormDataprops = {
    email: string;
    password: string;
}

const signInSchema = yup.object({
    email: yup.string().required('Informe o e-mail').email('E-mail inválido'),
    password: yup.string().required('Informe a senha')
})

type SignInRouteParams = RouteProp<AuthRoutes, 'signin'>

export default function SignIn({ route: { params } }: { route: SignInRouteParams }) {
    const { height, width } = Dimensions.get('screen');

    const { setUserOwner, signInLab } = useAuth();
    const { UserType } = params;
    const { control, handleSubmit, formState: { errors } } = useForm<FormDataprops>({
        defaultValues: {
            email: '',
            password: ''
        },
        resolver: yupResolver(signInSchema)
    });

    async function handleSignInOwner({ email, senha }: LoginType) {
        const response = await Login({ email: email, senha: senha } as LoginType);
    
        if (!response) {
            return;
        }
        
        setUserOwner(response.proprietario)
    }
    

    function handleTypeSignIn({ email, password }: FormDataprops) {
        UserType === 'OWNER' ? handleSignInOwner({ email: email, senha: password } as LoginType) : signInLab(email, password)

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
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 30 }}>
                <ContainerContent>
                    <BoxLogo>
                        <ArcaLogo />
                    </BoxLogo>
                    <WrapperForm>
                        <Controller
                            name="email"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="E-mail"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    errorMessage={errors.email?.message}
                                />
                            )}

                        />
                        <Controller
                            name="password"
                            control={control}
                            render={({ field: { onChange, value } }) => (
                                <Input
                                    label="Senha"
                                    secureTextEntry
                                    autoCapitalize="none"
                                    onChangeText={onChange}
                                    value={value}
                                    onSubmitEditing={handleSubmit(handleTypeSignIn)}
                                    returnKeyType="send"
                                    errorMessage={errors.password?.message}
                                />
                            )}

                        />

                        <Button
                            label="Entrar"
                            shadowWhite
                            onPress={handleSubmit(handleTypeSignIn)}
                        />
                    </WrapperForm>
                </ContainerContent>
            </ScrollView>
        </Container>
    )
}