// Função de máscara do CNPJ com limite de 14 caracteres
export function cnpjMask(value: string) {
    // Remove todos os caracteres não numéricos (incluindo espaços, pontos, traços, etc.)
    const cleanedValue = value.replace(/\D/g, '');
  
    // Limita o número de caracteres a 14 (número máximo para um CNPJ válido)
    const limitedValue = cleanedValue.slice(0, 14);
  
    // Aplica a máscara no CNPJ
    return limitedValue.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  }
  