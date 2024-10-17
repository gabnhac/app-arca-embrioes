import { Text } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export type TitleTypeStyleProps = {
    typeFontWeight?: "NORMAL" | "BOLD";
    typeFontSize: number;
    typeColor?: "BLACK" | "WHITE";
};


export const Container = styled.View`

`;

export const TextTitle = styled(Text)<TitleTypeStyleProps>`
    ${({typeFontWeight}) => typeFontWeight === "NORMAL" && css`
        font-weight: 400;
    `}

    ${({typeFontWeight}) => typeFontWeight === "BOLD" && css`
        font-weight: 700;
    `}

    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
    font-size: ${({typeFontSize = 20}) => typeFontSize}px;
    color: ${({typeColor}) => typeColor === "BLACK" ? '#000000' : '#FFFFFF' }
    
`;