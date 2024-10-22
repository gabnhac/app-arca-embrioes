import { ButtonTypeStyleProps, ContainerTouchable, Label } from "@components/Button/styles";
import { TouchableOpacityProps } from "react-native";

type Props = ButtonTypeStyleProps & TouchableOpacityProps & {
    label: string
}
export default function ({label, colorType = 'PRIMARY', shadowWhite, ...rest}: Props) {
    return(
        <ContainerTouchable
            colorType={colorType}
            shadowWhite={shadowWhite}
            {...rest}
        >
            <Label
                colorType={colorType}
            >
                {label}
            </Label>
        </ContainerTouchable>
    )
}