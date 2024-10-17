import React, { useState } from "react";
import { Container, WrapperBody, WrapperStockCards, WrapperTitle } from "./styles";
import Title from "@components/Title/Title";
import CardStock from "@components/CardStock";


export default function Report() {

    const[countEmbrioes, setCountEmbrioes] = useState(0);
    const[countOocitos, setCountOocitos] = useState(0);
    const[countSemen, setCountSemen] = useState(0);
    return (
        <Container>
            <WrapperTitle>
                <Title
                    title="Estoque"
                    typeFontSize={30}
                    typeFontWeight="BOLD"
                />
            </WrapperTitle>


            <WrapperBody>
                <CardStock
                    color="LIGHT_BLUE"
                    borderRadius="FULL"
                    count={10}
                    description="Total Embriões"
                    size="LARGE"
                />
                <WrapperStockCards>
                    <CardStock
                        color="ROYAL_BLUE"
                        borderRadius="PARTIAL"
                        count={10}
                        description="Total Semen"
                        size="MEDIUM"
                    />
                    <CardStock
                        color="DARK_BLUE"
                        borderRadius="PARTIAL"
                        count={10}
                        description="Total Oócitos"
                        size="MEDIUM"
                    />
                </WrapperStockCards>
            </WrapperBody>


        </Container>
    )
}