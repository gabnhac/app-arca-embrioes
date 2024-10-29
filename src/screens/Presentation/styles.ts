import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    
`;

export const Header = styled.View`
    width: 100%;
    height: 45%;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
`;

export const Footer = styled.View`
    height: 55%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



export const TextPresentation = styled.Text`
    font-size: 17px;
    text-align: center;

    color: white;

    margin-bottom: 50px;

    opacity: 0.8;
`;