export function numberMask(value: string) {
    const peso = value.replace(/\D/g, '');

    return peso;
  }