import { Text } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export type TitleTypeStyleProps = {
    typeFontWeight?: "NORMAL" | "BOLD";
    typeFontSize: number;
    typeColor?: "BLACK" | "WHITE" | "VIOLET";
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
    
    ${({typeColor}) => typeColor === 'BLACK' && css`
        color: #000000
    `}
    ${({typeColor}) => typeColor === 'WHITE' && css`
        color: #FFFFFF
    `}
    ${({typeColor, theme}) => typeColor === 'VIOLET' && css`
        color: ${theme.COLORS.RUSSIAN_VIOLET}
    `}
`;