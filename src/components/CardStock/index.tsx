import { CardStockStyleProps, Container, TextCount, TextDescription } from "./styled";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

type Props = CardStockStyleProps & {
    description: string,
    count: number,
}

export default function CardStock({border = false, color, count, description, size, borderRadius = "PARTIAL"}: Props){
    return(
        <Container
            border={border}
            color={color}
            size={size}
            borderRadius={borderRadius}
        >
            <MaterialIcons name="description" size={30} color="#FFFFFF" />

            <TextCount>{count.toString()}</TextCount>

            <TextDescription>{description}</TextDescription>
        </Container>
    )
}