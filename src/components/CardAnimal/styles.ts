import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
    width: 90%;
    align-self: center;
    height: 120px;
    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};

    border-radius: 10px;

    flex-direction: row;


`;

export const WrapperInfo = styled.View`
    width: 50%;
    
    flex-direction: column;
   
    padding: 15px;

    gap: 5px;
`;

export const InfoText = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;

export const WrapperInfoTexts = styled.View`

    gap: 2px;

`;

export const WrapperImage = styled.View`
    width: 50%;

`;
