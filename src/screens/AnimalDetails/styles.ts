import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;
    justify-content: flex-end;

    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
`;

export const Window = styled.View`
    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};

    width: 85%;
    height: 80%;

    border-top-right-radius: 15px;
    border-top-left-radius: 15px;
`;

export const Header = styled.View`
    margin: 15px 0;
    align-items: center;
    justify-content: center;

    gap: 5px;
`;

export const BodyInfo = styled.View`
    align-items: center;
    justify-content: center;

    padding: 0 15px;
`;

export const WrapperShortInfos = styled.View`
    width: 100%;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
`;

export const ShortInfo = styled.View`
    width: 45%;
`;

export const TextInfo = styled.Text`
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    color: #FFFFFF;
    font-size: 20px;
    font-weight: 700;
`;