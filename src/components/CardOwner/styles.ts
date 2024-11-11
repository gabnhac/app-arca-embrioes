import { TouchableOpacity } from "react-native";
import styled from "styled-components/native";

export const Container = styled(TouchableOpacity)`
    width: 250px;
    height: 60px;

    flex-direction: row;


    background-color: #FFFFFF;
    border-radius: 5px;
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;

    align-items: center;

    gap: 15px;
`;

export const InfoText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
    font-size: 16px;
`; 

export const WrapperInfo = styled.View`
    width: 78%;
    align-items: flex-start;
    justify-content: center;

    padding-left: 7px;
    gap: 5px;
`;
