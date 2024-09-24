import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    background-color: gray;
    

`;

export const ContainerContent = styled.View`
    height: 50%;
    width: 100%;

    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`;

export const BoxLogo = styled.View`
    width: 80%;
    height: 130px;
    background-color: #FFFFFF;

    align-items: center;
    justify-content: center;

    border-radius: 20px;
`;

export const WrapperForm = styled.View`
    width: 80%;
    height: 70%;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
`;

export const WrapperForgotPass = styled.TouchableOpacity`

`;

export const TextForgotPass = styled.Text`
    font-size: 13px;
    color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;
