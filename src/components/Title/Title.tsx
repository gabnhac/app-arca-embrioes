import React from "react";
import { Container, TextTitle, TitleTypeStyleProps } from "./styles";


type Props = TitleTypeStyleProps & {
    title: string;
}

export default function Title({title, typeFontSize, typeFontWeight = 'NORMAL', typeColor = 'WHITE'}: Props){
    return(
        <Container>
            <TextTitle
                typeColor={typeColor}
                typeFontSize={typeFontSize}
                typeFontWeight={typeFontWeight}
            >{title}</TextTitle>
        </Container>
    )
}