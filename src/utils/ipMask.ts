export function ipMask(ip: string){
    const newIp = ip.replace(/\D/g, '');

    const limitedValue = newIp.slice(0, 9);

    return limitedValue.replace(
        /^(\d{3})(\d{3})(\d{1})(\d{2})/, 
        "$1.$2.$3.$4"
    )
} 