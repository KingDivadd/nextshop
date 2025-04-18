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
    image: string[];
    name: string;
    description: string;
    offerPrice: number;
    ratingStar?: number;

}