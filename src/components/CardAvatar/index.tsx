import { Image, Text, View } from "react-native";
import { AvatarTypeStyleProps, Container } from "./styles";

type Props = AvatarTypeStyleProps & {
    imgNetwork?: string;
    imgLocal?: 'VACA' | 'BOI';
}

export default function CardAvatar({ imgNetwork, size, borderColor, imgLocal, ...rest }: Props) {
    return (
        <Container
            size={size}
            borderColor={borderColor}
        >
            {imgNetwork &&
            <Image
                source={{ uri: imgNetwork}}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />}

            {(imgLocal && imgLocal === 'VACA') ?
            <Image
                source={require('@assets/vaca.jpg')}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
            :
            <Image
                source={require('@assets/boi.jpg')}
                style={{ height: '100%', width: '100%', objectFit: 'cover' }}
            />
            }

        </Container>
    )
}