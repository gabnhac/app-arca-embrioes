import { TouchableOpacityProps } from "react-native";
import { CardStockStyleProps, Container, TextCount, TextDescription, WrapperAdd } from "./styled";
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Feather from "@expo/vector-icons/Feather";
import { useAuth } from "../../hooks/useAuth";

type Props = CardStockStyleProps & TouchableOpacityProps & {
    description: string,
    count: number,
    showModalAdd: () => void;
}

export default function CardStock({border = false, color, count, description, size, borderRadius = "PARTIAL", showModalAdd, ...rest}: Props){
    const {userLab} = useAuth();

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

            {userLab.CNPJ && <WrapperAdd
                onPress={showModalAdd}
            >
                <Feather name="plus-circle" size={40} color="#FFFFFF" />
            </WrapperAdd>}
        </Container>
    )
}