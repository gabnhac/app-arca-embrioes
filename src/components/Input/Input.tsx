import { Container, InputField, LabelInput, TextError } from "./styles";
import { TextInputProps } from "react-native";

type Props = TextInputProps & {
    label?: string;
    isInvalid?: boolean;
    errorMessage?: string | null;
    
}

export default function Input({label, isInvalid = false, errorMessage = null, ...rest}:Props){

    const invalid = !!errorMessage || isInvalid;
    return(
        <Container>
            {!!label && <LabelInput>{label}</LabelInput>}
            <InputField
                {...rest}
            />


            <TextError>{invalid && errorMessage}</TextError>

        </Container>
    )
}