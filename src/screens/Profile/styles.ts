import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.RUSSIAN_VIOLET};
`;

export const WrapperHeader = styled.View`
    margin: 40px 0;

    justify-content: center;
    align-items: center;

    gap: 10px;

    `;

export const WrapperDate = styled.View`
    justify-content: center;
    align-items: center;

    `;

export const WrapperButton = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
`;



