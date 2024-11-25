import { Modal, Pressable } from "react-native";
import styled from "styled-components/native";

export const ModalWrapper = styled(Modal)`

    
`;

export const Container = styled.View`
    flex: 1;
    background-color: 'rgba(0, 0, 0, 0.3)';
    justify-content: center;
    align-items: center;
`;

export const Content = styled.View`
    background-color: #FFFFFF;
    width: 60%;
    height: 35%;


    border-radius: 15px;
    border-left-width: 20px;
    border-left-color: ${({theme}) => theme.COLORS.FRENCH_BLUE};

    padding: 10px;
    gap: 2px;
`;

export const InfoText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 15px;
    
`;

export const WrapperInfoInput = styled.View`

`;