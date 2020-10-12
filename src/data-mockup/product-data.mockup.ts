export interface IProductDataItem {
    id: number;
    name: string;
    price: number;
}

export const productData: IProductDataItem[] = [
    {
        id: 1,
        name: "Regular",
        price: 14900,
    },
    {
        id: 2,
        name: "Regular +",

        price: 19900,

    },
    {
        id: 3,
        name: "Premium",
        price: 24900,
    },
    {
        id: 4,
        name: "Premium +",
        price: 29900,
    },
]