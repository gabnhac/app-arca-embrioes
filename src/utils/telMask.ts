
export function telMask(value: string) {
    const cleanedValue = value.replace(/\D/g, '');
  
    const limitedValue = cleanedValue.slice(0, 11);
  
    return limitedValue.replace(
      /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
      "($1) $2$3-$4"
    );
  }
  