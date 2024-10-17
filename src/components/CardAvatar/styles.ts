import { View } from "react-native";
import styled, {css} from "styled-components/native";
import { Image } from "react-native";

export type AvatarTypeStyleProps = {
    size: "SMALL" | "MEDIUM" | "LARGE",
    borderColor?: string,
}

export const Container = styled(View)<AvatarTypeStyleProps>`
    overflow: hidden;

    border-radius: 100px;
  
    background-color: #ffffff;

    ${({size}) => 
        size === "SMALL" && css`
            height: 80px;
            width: 80px;
        `
    }
    ${({size}) => 
        size === "MEDIUM" && css`
            height: 120px;
            width: 120px;
        `
    }
    ${({size}) => 
        size === "LARGE" && css`
            height: 160px;
            width: 160px;
        `
    }

    ${({borderColor}) => 
        !!borderColor && css`
            border-width: 3px;
            
        `
    }
    
`;