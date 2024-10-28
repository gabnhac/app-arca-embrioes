import { Container } from "./styles";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Entypo from '@expo/vector-icons/Entypo';

export default function HeaderMenu(){
    return(
        <Container>
            <MaterialIcons name="arrow-back" size={30} color="black" />
            <Entypo name="menu" size={35} color="black" />
        </Container>
    )
}