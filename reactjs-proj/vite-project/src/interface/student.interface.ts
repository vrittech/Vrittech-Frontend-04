export interface Student {
    name: string;
    isAttended: boolean;
    address: AddressInterface;
}

export interface AddressInterface {
    city: string;
    postalCode: number;
}

export type User = {
    name: string;
    id: number;
}