import imageSource from 'assets/product-image.png';

export interface IProductDataItem {
    id: number;
    name: string;
    price: number;
    imageSource: string;
}

export const productData: IProductDataItem[] = [
    {
        id: 1,
        name: "Նվեր տուփ - Regular",
        price: 14900,
        imageSource,
    },
    {
        id: 2,
        name: "Նվեր տուփ - Regular Plus",
        price: 19900,
        imageSource,
    },
    {
        id: 3,
        name: "Նվեր տուփ - Premium",
        price: 24900,
        imageSource,
    },
    {
        id: 4,
        name: "Նվեր տուփ - Premium Plus",
        price: 29900,
        imageSource,
    },
]