import { Container, TextInfo } from "./styles";

type Props = {
    macho: string;
    femea: string;
    dataFecundacao: string;
    dataCongelamento: string;
    dataDescongelamento: string
}

export default function({dataCongelamento, dataDescongelamento, dataFecundacao, femea,
    macho
}: Props){
    return(
        <Container>
            <TextInfo>{macho}</TextInfo>
            <TextInfo>{femea}</TextInfo>
            <TextInfo>{dataFecundacao}</TextInfo>
            <TextInfo>{dataCongelamento}</TextInfo>
            <TextInfo>{dataDescongelamento}</TextInfo>
        </Container>
    )
}