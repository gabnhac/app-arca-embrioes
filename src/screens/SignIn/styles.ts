import React from "react";
import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    padding: 5px 0;
    
`;

export const ContainerContent = styled.View`
    flex-direction: column;
    justify-content: center;
    align-items: center;

    margin-top: 60%;
    gap: 15px;
`;

export const BoxLogo = styled.View`
    background-color: #FFFFFF;

    align-items: center;
    justify-content: center;

    border-radius: 20px;
`;

export const WrapperForm = styled.View`
    width: 100%;
    flex-direction: column;
    align-items: center;
    gap: 30px;
`;

export const WrapperForgotPass = styled.TouchableOpacity`

`;

export const TextForgotPass = styled.Text`
    font-size: 13px;
    color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;
