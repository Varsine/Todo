export interface IProductDataItem {
    id: number;
    name: string;
    price: number;
}

export const productData: IProductDataItem[] = [
    {
        id: 1,
        name: "Նվեր տուփ - Regular",
        price: 14900,
    },
    {
        id: 2,
        name: "Նվեր տուփ - Regular Plus",

        price: 19900,
    },
    {
        id: 3,
        name: "Նվեր տուփ - Premium",
        price: 24900,
    },
    {
        id: 4,
        name: "Նվեր տուփ - Premium Plus",
        price: 29900,
    },
]