import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 90%;
    height: 50px;

    flex-direction: row;
    align-items: center;
    align-self: center;
    justify-content: space-around;

    background-color: #FFFFFF;
    border-radius: 15px;
    border-bottom-width: 4px;
    border-bottom-color:  ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;

export const TextInfo = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 14px;
    color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
    font-weight: 700;
`;