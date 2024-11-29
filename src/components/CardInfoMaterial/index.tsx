import { TouchableOpacityProps } from "react-native";
import { Container, TextInfo } from "./styles";

type Props = TouchableOpacityProps & {
    macho: string;
    femea: string;
    dataFecundacao: string;
    dataCongelamento: string;
    dataDescongelamento: string
}

export default function({dataCongelamento, dataDescongelamento, dataFecundacao, femea,
    macho, ...rest
}: Props){
    return(
        <Container
            {...rest}
        >
            <TextInfo>{macho}</TextInfo>
            <TextInfo>{femea}</TextInfo>
            <TextInfo>{dataFecundacao}</TextInfo>
            <TextInfo>{dataCongelamento}</TextInfo>
            <TextInfo>{dataDescongelamento}</TextInfo>
        </Container>
    )
}