import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   width: 100%;

`;

export const InputField = styled(TextInput)`
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 5px 4px;
    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
    
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: black;
    font-size: 15px;
`;

export const LabelInput = styled.Text`
    color: white;
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
`;

export const TextError = styled.Text`
    color: ${({theme}) => theme.COLORS.RED_500};
  
`;