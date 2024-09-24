import styled from "styled-components/native";

export const Container = styled.View`
    flex: 1;
    justify-content: center;
    align-items: center;
    
`;

export const ImageBackground = styled.Image`
    width: 100%;
    height: 100%;
    position: absolute;
    
`;

export const Header = styled.View`
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const Footer = styled.View`
    height: 50%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;



export const TextPresentation = styled.Text`
    font-size: 18px;
    text-align: center;
    color: white;
    margin-bottom: 50px;
`;