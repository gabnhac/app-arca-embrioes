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

    border-top-width: 2.5px;
    border-left-width: 0.5px;
    border-right-width: 0.5px;
    border-color: #ffffff;
    border-radius: 8px;
`;

export const Label = styled.Text`
    color: #ffffff;
`;