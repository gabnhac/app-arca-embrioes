import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   width: 80%;

`;

export const InputField = styled(TextInput)`
    border: 1px solid #FFFFFF;
    border-radius: 5px;
    padding: 5px 7px;
    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
    
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: black;
    font-size: 15px;
`;

export const LabelInput = styled.Text`
    padding: 10px 0;
    color: white;
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
`;