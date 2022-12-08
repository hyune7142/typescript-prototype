export function stringSecureFormat(text: string) {
    if(typeof(text) !== 'string') return text;
    return text.replace(/\</gi, "&lt;").replace(/\>/gi, "&gt;")
}