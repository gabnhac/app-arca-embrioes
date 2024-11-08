import { TouchableOpacityProps } from "react-native";
import { CardStockStyleProps, Container, TextCount, TextDescription } from "./styled";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = CardStockStyleProps & TouchableOpacityProps & {
    description: string,
    count: number,
}

export default function CardStock({border = false, color, count, description, size, borderRadius = "PARTIAL", ...rest}: Props){
    return(
        <Container
            border={border}
            color={color}
            size={size}
            borderRadius={borderRadius}
            {...rest}
        >
            <MaterialIcons name="description" size={30} color="#FFFFFF" />

            <TextCount>{count.toString()}</TextCount>

            <TextDescription>{description}</TextDescription>
        </Container>
    )
}