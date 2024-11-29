import { TextInputProps } from "react-native";
import { Container, Input, WrapperButtonSearch, WrapperTextInput } from "./styles";
import Octicons from '@expo/vector-icons/Octicons';

type Props = TextInputProps & {

}

export default function CardSearch({...rest}: Props){
    return(
        <Container>
            <WrapperTextInput>
                <Input {...rest}/>
            </WrapperTextInput>
            <WrapperButtonSearch>
                    <Octicons name="search" size={24} color="#A7A9AC" />
            </WrapperButtonSearch>
        </Container>
    )
}