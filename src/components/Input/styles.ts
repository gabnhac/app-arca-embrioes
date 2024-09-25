import React from "react";
import { TextInput } from "react-native";
import styled from "styled-components/native";

export const Container = styled.View`
   width: 100%;

`;

export const InputField = styled(TextInput)`
  

    border: 1px solid #FFFFFF;
    border-radius: 5px;

    padding: 8px;

    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
    
`;

export const LabelInput = styled.Text`
    padding: 10px 0;
    color: white;
`;