import styled from "styled-components/native";

export const Container = styled.View`
    width: 135px;
    height: 180px;

    align-items: center;
    justify-content: center;

    border-radius: 10px;

    gap: 13px;

    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};

`;

export const WrapperInfo = styled.View`
    flex-direction: row;
    width: 100%;

    align-items: center;
    justify-content: center;

    gap: 22px;
`;

export const WrapperInfoText = styled.View`

    align-items: flex-start;
    justify-content: center;
`;

export const WrapperInfoQtd = styled.View`

    align-items: center;
    justify-content: center;
`;

export const TextRaca = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-weight: 700;
    color: #FFFFFF;
`;

export const TextInfo = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: #FFFFFF;
    opacity: 0.7;
`;