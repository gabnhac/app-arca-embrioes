import React from 'react';
import { Container } from './styles';
import GeneguardaLogo from '@assets/svgs/GeneguardaLogo';
import { View } from 'react-native';

export function CardLogoPresentation() {
  return (
    <Container>
        <View><GeneguardaLogo/></View>
    </Container>
  );
}