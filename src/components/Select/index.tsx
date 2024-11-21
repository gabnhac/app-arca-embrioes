import { Container, InitialText, Label, Option, OptionText, SelectContent, WrapperOptions } from "./styles";
import Entypo from '@expo/vector-icons/Entypo';
import { useState } from "react";
import { TouchableOpacityProps } from "react-native";
import {
    useAnimatedStyle,
    useDerivedValue,
    useSharedValue,
    withTiming,
} from "react-native-reanimated";

type Props = TouchableOpacityProps & {
    options: string[],
    label: string,
    setOption: (option: any) => void,
}

export default function Select({ options, label, setOption, ...rest }: Props) {

    const [optionsVisivel, setOptionsVisible] = useState(false);
    const [textSelect, setTextSelect] = useState(options[0]);

    const optionsHeight = useSharedValue(0);

    useDerivedValue(() => {
        optionsHeight.value =
            optionsVisivel
                ? withTiming(55, { duration: 100 })
                : withTiming(0, { duration: 100 });
    });

    const styleOption = useAnimatedStyle(() => {
        return {
            height: optionsHeight.value,
        };
    })

    return (
        <Container>
            <Label>{label}</Label>
            <SelectContent
            activeOpacity={1}
                style={{
                    borderBottomLeftRadius: optionsVisivel ? 0 : 5,
                    borderBottomRightRadius: optionsVisivel ? 0 : 5,

                }}
                onPress={() => setOptionsVisible(prev => !prev)}
            >
                <InitialText>{textSelect}</InitialText>

                {!optionsVisivel ?
                    <Entypo name="chevron-small-down" size={24} color="black" />
                    :
                    <Entypo name="chevron-small-up" size={24} color="black" />}
            </SelectContent>
            <WrapperOptions style={styleOption}>

                {options.map((item, index) => (
                    <Option key={index}
                        onPress={() => {
                            setTextSelect(item);
                            setOptionsVisible(false);
                            setOption(item);
                        }}
                    >
                        <OptionText>{item}</OptionText>
                    </Option>
                ))}




            </WrapperOptions>

        </Container>
    )
}