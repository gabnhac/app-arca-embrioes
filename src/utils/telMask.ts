// Função de máscara para telefone com código de área (com limite de 11 caracteres)
export function telMask(value: string) {
    // Remove todos os caracteres não numéricos (incluindo parênteses, espaços, traços, etc.)
    const cleanedValue = value.replace(/\D/g, '');
  
    // Limita o número de caracteres a 11 (número máximo para um telefone celular válido no Brasil)
    const limitedValue = cleanedValue.slice(0, 11);
  
    // Aplica a máscara no telefone (formato: (XX) 9XXXX-XXXX)
    return limitedValue.replace(
      /^(\d{2})(\d{1})(\d{4})(\d{4})$/,
      "($1) $2$3-$4"
    );
  }
  