import styled, { css } from "styled-components/native";
import { Text, TouchableOpacity } from "react-native";

export type ButtonTypeStyleProps = {
    colorType?: "PRIMARY" | "SECONDARY",
    shadowWhite?: boolean
}

export const ContainerTouchable = styled(TouchableOpacity)<ButtonTypeStyleProps>`
    width: 180px;
    height: 45px;

    justify-content: center;
    align-items: center;
    
    background-color: ${({theme, colorType}) => colorType === "PRIMARY" ? theme.COLORS.RUSSIAN_VIOLET : "#FFFFFF"};

    ${({shadowWhite}) => shadowWhite ?  css`
        border-top-width: 2.5px;
        border-left-width: 0.5px;
        border-right-width: 0.5px;
        border-color: #FFFFFF;
    ` 
    : null}
    
    border-radius: 5px;
`;

export const Label = styled(Text)<ButtonTypeStyleProps>`
    color: ${({theme, colorType}) => colorType === "PRIMARY" ? "#FFF" : theme.COLORS.RUSSIAN_VIOLET};
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 15px;
    font-weight: 700;
`;