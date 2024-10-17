import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.COLORS.FRENCH_GRAY};
    align-items: center;

`;

export const Header = styled.View`
    height: 30%;
    width: 100%;

    align-items: center;
    justify-content: space-around;
    gap: 10px;
`;

export const Categories = styled.View`

    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 20px;
`;

export const WrapperTitle = styled.View`
    align-self: flex-start;
    margin-left: 20px;
`;

export const WrapperTouchable = styled.TouchableOpacity`

`;

export const Animals = styled.View`
    height: 70%;
    width: 100%;
    align-items: center;
    justify-content: center;

    gap: 20px;
`;