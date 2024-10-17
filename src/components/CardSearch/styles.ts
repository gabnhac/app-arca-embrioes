import { TextInput } from "react-native-gesture-handler";
import styled from "styled-components/native";

export const Container = styled.View`
    width: 280px;
    height: 40px;

    background-color: #FFFFFF;

    border-radius: 10px;

    align-items: flex-start;
    justify-content: center;
    flex-direction: row;

    padding:10px;

    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
`;

export const Input = styled(TextInput)`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 15px;
    font-weight: 600;
    
`; 

export const WrapperTextInput = styled.View`
    width: 85%;
`;

export const WrapperButtonSearch = styled.View`
    width: 15%;
    align-items: flex-end;

    border-left-width: 2px;
    border-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;

export const ButtonSearch = styled.TouchableOpacity`
    
    
`;
