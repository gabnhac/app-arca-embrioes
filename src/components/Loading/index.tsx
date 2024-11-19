import { ActivityIndicatorProps } from "react-native";
import { Container, LoadingActivity } from "./styles";

type Props = ActivityIndicatorProps & {

}

export default function Loading({...rest}: Props){
    return(
        <Container>
            <LoadingActivity
                {...rest}
            />
        </Container>
    )
}