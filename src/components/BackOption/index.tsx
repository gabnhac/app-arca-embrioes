import { Container } from "./styled";
import Ionicons from '@expo/vector-icons/Ionicons';
import { TouchableOpacityProps } from "react-native";

type Props = TouchableOpacityProps & {

}

export default function BackOption({...rest}: Props){
    return(
        <Container
            {...rest}
        >
            <Ionicons name="arrow-back" size={30} color="#FFFFFF" />
        </Container>
    )
}