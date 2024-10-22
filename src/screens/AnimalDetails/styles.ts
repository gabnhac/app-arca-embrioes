import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;
`;

export const Window = styled.View`
    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};

    width: 85%;
    height: 80%;

    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;

export const Header = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const BodyInfo = styled.View`
    
`;

export const TextInfo = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: 10px;
`;