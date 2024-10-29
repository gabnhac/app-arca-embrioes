import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
`;

export const WrapperTitle = styled.View`
    height: 10%;
    align-items: center;
    justify-content: flex-end;
`;

export const WrapperBody = styled.View`
    flex: 1;
    align-items: center;
    justify-content: center;
`;

export const WrapperStockCards = styled.View`
    width: 80%;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin-top: 20px;
`;