import { ButtonTypeStyleProps, ContainerTouchable, Label } from "@components/Button/styles";

type Props = ButtonTypeStyleProps & {
    label: string
}
export default function ({label, colorType = 'PRIMARY', shadowWhite, ...rest}: Props) {
    return(
        <ContainerTouchable
            colorType={colorType}
            shadowWhite={shadowWhite}
        >
            <Label
                colorType={colorType}
            >
                {label}
            </Label>
        </ContainerTouchable>
    )
}