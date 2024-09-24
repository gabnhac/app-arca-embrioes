import { Container, InputField, LabelInput } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
    label?: string;
    
}

export default function Input({label, ...rest}:Props){
    return(
        <Container>
            {!!label && <LabelInput>{label}</LabelInput>}
            <InputField
                {...rest}
            />
        </Container>
    )
}