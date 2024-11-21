export function pesoMask(value: string) {
    const peso = value.replace(/\D/g, '');

    return peso;
  }