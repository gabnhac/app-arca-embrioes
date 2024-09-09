import styled from "styled-components/native";
import { TouchableOpacity } from "react-native";

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

    border-top-width: 1px;
    border-left-width: 1px;
    border-right-width: 1px;
    border-color: #ffffff;
    border-radius: 8px;
`;

export const Label = styled.Text`
    color: #ffffff;
`;