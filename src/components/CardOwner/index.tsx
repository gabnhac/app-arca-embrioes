import { TouchableOpacityProps } from "react-native";
import { Container, InfoText, WrapperInfo } from "./styles";
import AntDesign from '@expo/vector-icons/AntDesign';

type Props = TouchableOpacityProps & {
    name: string;
    cnpj: string;
}

export default function CardOwner({cnpj, name, ...rest}: Props){
    return(
        <Container
            {...rest}
        >
            <WrapperInfo>
                <InfoText>FAZ. {name}</InfoText>
                <InfoText>CNPJ {cnpj.toString()}</InfoText>
            </WrapperInfo>
                <AntDesign name="doubleright" size={24} color="black" />
        </Container>
    )
}