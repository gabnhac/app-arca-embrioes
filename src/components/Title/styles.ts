import { Text } from "react-native";
import { css } from "styled-components";
import styled from "styled-components/native";

export type TitleTypeStyleProps = "NORMAL" | "BOLD";

type Props = {
    typeFontSize: TitleTypeStyleProps;
};

export const Container = styled.View`

`;

export const TextTitle = styled(Text)<Props>`
    ${({typeFontSize}) => typeFontSize === "NORMAL" && css`
        font-weight: 400;
    `}
    ${({typeFontSize}) => typeFontSize === "BOLD" && css`
        font-weight: 700;
    `}

    font-size: 25px;
    color: #FFFFFF;
    
`;