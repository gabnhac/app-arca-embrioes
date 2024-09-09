import { ButtonTypeStyleProps, ContainerTouchable, Label } from "@components/Button/styles";

type Props = ButtonTypeStyleProps & {
    label: string
}
export default function ({label, colorType, shadowWhite, ...rest}: Props) {
    return(
        <ContainerTouchable
            colorType={colorType}
            shadowWhite={shadowWhite}
        >
            <Label>
                {label}
            </Label>
        </ContainerTouchable>
    )
}