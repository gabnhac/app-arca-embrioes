
export function cnpjMask(value: string) {

    const cleanedValue = value.replace(/\D/g, '');
  
    const limitedValue = cleanedValue.slice(0, 14);
  

    return limitedValue.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  }
  