import React from "react";
import { Container, TextTitle, TitleTypeStyleProps } from "./styles";


type Props = {
    title: string;
    type?: TitleTypeStyleProps;
}

export default function Title({title, type = 'NORMAL'}: Props){
    return(
        <Container>
            <TextTitle
                typeFontSize={type}
            >{title}</TextTitle>
        </Container>
    )
}