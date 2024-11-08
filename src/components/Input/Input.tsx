import { useState } from "react";
import { Container, InputField, LabelInput, TextError } from "./styles";
import { TextInputProps } from "react-native";
import theme from "@theme/index";

type Props = TextInputProps & {
    label?: string;
    isInvalid?: boolean;
    errorMessage?: string | null;

}

export default function Input({label, isInvalid = false, errorMessage = null, ...rest}:Props){
    const [isFocused, setIsFocused] = useState(false);

    const invalid = !!errorMessage || isInvalid;
    return(
        <Container>
            {!!label && <LabelInput>{label}</LabelInput>}
            <InputField
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                style={{
                    borderColor: isFocused 
                    ? theme.COLORS.GREEN_500 
                    : (invalid ? theme.COLORS.RED_500 : theme.COLORS.FRENCH_GRAY)
                }}
                {...rest}
            />


            <TextError>{invalid && errorMessage}</TextError>

        </Container>
    )
}