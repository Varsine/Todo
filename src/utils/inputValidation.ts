export enum InputNames {
    name = 'name',
    email = 'email',
    password = 'password',
    phone = 'phone',
    address = 'address',
    info = 'info',
    giftReceiverName = 'giftReceiverName'
}

interface IValidationAnswer {
    isValid: boolean;
    errorText: string;
}

// eslint-disable-next-line no-useless-escape
const regExEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export const inputValidation = (value: string, type: InputNames): IValidationAnswer => {
    let isValid = null;
    let errorText = '';
    if (!value.trim()) {
        return {
            isValid: false,
            errorText: 'Այս դաշտը պարտադիր է*'
        }
    }
    switch (type) {
        case InputNames.name:
        case InputNames.giftReceiverName:
            const nameRegexArm = /^[ա-ֆԱ-Ֆ\s]+$/;
            const nameRegexRus = /^[а-яА-Я\s]+$/;
            const nameRegexEng = /^[a-zA-Z\s]+$/;
            isValid = !!(value.length >= 3 && (value.match(nameRegexArm) || value.match(nameRegexRus) || value.match(nameRegexEng)));
            errorText = isValid ? '' : 'Մուտքագրեք միայն տառեր, նվազագույնը՝ 3';
            return { isValid, errorText }
        case InputNames.email:
            isValid = !!value.match(regExEmail);
            errorText = isValid ? '' : 'էլ․ փոստը անվավեր է';
            return { isValid, errorText }
        case InputNames.password:
            isValid = value.length > 6;
            errorText = isValid ? '' : 'Նվազագույնը 6 սիմվոլ';
            return { isValid, errorText }
        case InputNames.address:
            const addrRegex = /^([a-zA-Z0-9\s,/]+)$/;
            isValid = !!(value.length > 6 && value.match(addrRegex));
            errorText = isValid ? '' : 'Նշված հասցեն անվավեր է';
            return { isValid, errorText }
        case InputNames.phone:
            isValid = value.length === 11;
            errorText = isValid ? '' : 'հեռախոսահամարն անվավեր է';
            return { isValid, errorText }
        default:
            return { isValid: true, errorText: '' }
    }
}