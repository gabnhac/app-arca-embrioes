import { TextInput } from "react-native";
import { ButtonSearch, Container, Input, WrapperButtonSearch, WrapperTextInput } from "./styles";
import Octicons from '@expo/vector-icons/Octicons';

export default function CardSearch(){
    return(
        <Container>
            <WrapperTextInput>
                <Input/>
            </WrapperTextInput>
            <WrapperButtonSearch>
                <ButtonSearch>
                    <Octicons name="search" size={24} color="#A7A9AC" />
                </ButtonSearch>
            </WrapperButtonSearch>
        </Container>
    )
}