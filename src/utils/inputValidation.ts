export enum InputNames {
    password = 'password',
    name = 'name',
    email = 'email',
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
            if (value.length < 3) {
                isValid = false;
                errorText = 'Նվազագույնը 3 տառ'
            } else {
                isValid = true;
                errorText = ''
            }
            return { isValid, errorText }
        case InputNames.email:
            isValid = !!value.match(regExEmail);
            errorText = isValid ? '' : 'էլ․ փոստը անվավեր է';
            return { isValid, errorText }
        case InputNames.password:
            isValid = value.length > 6;
            errorText = isValid ? '' : 'Նվազագույնը 6 սիմվոլ';
            return { isValid, errorText }
    }
}