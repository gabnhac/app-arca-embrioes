import { Container, TextInfo } from "./styles";

type Props = {
    id: string;
    data: string;
    status: string;
}

export default function({data, id, status}: Props){
    return(
        <Container>
            <TextInfo>{id}</TextInfo>
            <TextInfo>{data}</TextInfo>
            <TextInfo>{status}</TextInfo>
        </Container>
    )
}