import imageSource from 'assets/product-image.png';

export interface IProductDataItem {
    id: number;
    name: string;
    price: number;
    imageSource: string;
    count: number;
}

export const productData: IProductDataItem[] = [
    {
        id: 1,
        name: "Regular",
        price: 14900,
        imageSource,
        count: 0
    },
    {
        id: 2,
        name: "Regular Plus",
        price: 19900,
        imageSource,
        count: 0
    },
    {
        id: 3,
        name: "Premium",
        price: 24900,
        imageSource,
        count: 0
    },
    {
        id: 4,
        name: "Premium Plus",
        price: 29900,
        imageSource,
        count: 0
    },
];

export const deliverData = {
    price: 0,
    days: '1-3'
}