import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";

export type CardStockStyleProps = {
    size: "SMALL" | "MEDIUM" | "LARGE",
    color: "LIGHT_BLUE" | "DARK_BLUE" | "ROYAL_BLUE",
    border?: boolean;
    borderRadius?: "FULL" | "PARTIAL",

}

export const Container = styled(TouchableOpacity) <CardStockStyleProps>`
    ${({ size }) =>
        size === "SMALL" && css`
            height: 90px;
            width: 90px;
        `
    }

    ${({ size }) =>
        size === "MEDIUM" && css`
            height: 130px;
            width: 130px;
        `
    }

    ${({ size }) =>
        size === "LARGE" && css`
            height: 280px;
            width: 280px;
        `
    }

    border-radius: ${({ borderRadius }) => borderRadius === "FULL" ? 150 : 10}px;

    ${({ border }) => border ?
        css`
            border-bottom-width: 4px;
            border-left-width: 2px;
            border-right-width: 2px;
            border-color: #FFFFFF;
        
        `
        : null
    };

    ${({ color, theme }) =>
        color === "LIGHT_BLUE" && css`
            background-color: ${theme.COLORS.POLINESIAN_BLUE};
        `
    }

        ${({ color, theme }) =>
        color === "DARK_BLUE" && css`
            background-color: ${theme.COLORS.INDIGO_DYE};
        `
    }

    ${({ color, theme }) =>
        color === "ROYAL_BLUE" && css`
            background-color: ${theme.COLORS.ROYAL_BLUE_TRADITIONAL};
        `
    }

    align-items: center;
    justify-content: center;
    gap: 10px;

`;

export const TextCount = styled.Text`
    color: #FFFFFF;
    font-weight: 900;
    font-size: 15px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
`;

export const TextDescription = styled.Text`
    color: #FFFFFF;
    font-weight: 600;
    font-size: 13px;
    font-family: ${({theme}) => theme.FONT_FAMILY.BODY};
`;