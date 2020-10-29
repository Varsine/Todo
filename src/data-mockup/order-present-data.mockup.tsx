export interface IPresentData {
    present: string;
    selection: null | number;
    inputName: string;
}

export const presentData: IPresentData[] = [
    {
        present: 'Այո',
        selection: null,
        inputName: 'present',
    },
    {
        present: 'Ոչ',
        selection: null,
        inputName: 'noPresent',
    }
];