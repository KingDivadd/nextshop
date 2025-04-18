declare interface userDataProps {
    first_name: string;
    last_name: string;
    username: string;
    email: string;
    id: string
}

declare interface sliderDataProps {
    id: string;
    title: string;
    offer: string;
    buttonText1: string;
    buttonText2: string;
    img: string;
}

declare interface ProductProps {
    _id: string;
    user_id?: string;
    name: string;
    description: string;
    price?: number;
    offerPrice: number;
    image: string[];
    category?: string;
    ratingStar?: number;
    date?: number;
    __v?: number;

}

declare interface AddressProps {
    _id: string;
    user_id: string;
    full_name: string;
    phone_number: string;
    pincode: number;
    area: string;
    city: string;
    state: string;
    __v: number
}

declare type ItemOrderType = {
    product: ProductProps;
    quantity: number;
    _id: string;

}

declare interface OrderProps {
    _id: string;
    user_id: string;
    items: ItemOrderType[];
    amount: number;
    address: AddressProps;
    status: string;
    date: number;
    __v?: number;
}