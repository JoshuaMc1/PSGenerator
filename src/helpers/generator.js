const generatePassword = (length = 8, options = { uppercase: true, lowercase: true, numbers: true, symbols: true }) => {
    const { uppercase, lowercase, numbers, symbols } = options;
    let characters = '';
    let result = '';

    if (uppercase) characters += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) characters += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) characters += '0123456789';
    if (symbols) characters += '!@#$%^&*()_+~`|}{[]:;?><,./-=';

    const charactersLength = characters.length;

    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
};

export {
    generatePassword
};
