import { Container, InfoText, WrapperInfo } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = {
    name: string;
    cnpj: number;
}

export default function CardOwner({cnpj, name}: Props){
    return(
        <Container>
            <WrapperInfo>
                <InfoText>FAZ. {name}</InfoText>
                <InfoText>CNPJ {cnpj.toString()}</InfoText>
            </WrapperInfo>
                <AntDesign name="doubleright" size={24} color="black" />
        </Container>
    )
}