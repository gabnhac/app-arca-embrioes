import { Image, Text, View } from "react-native";
import { AvatarTypeStyleProps, Container } from "./styles";

type Props = AvatarTypeStyleProps & {
    img?: string;
}

export default function CardAvatar({ img, size, borderColor, ...rest }: Props) {
    return (
        <Container
            size={size}
            borderColor={borderColor}
        >
            {!!img && 
            <Image
                source={{ uri: img}}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />}

        </Container>
    )
}