export interface Order {
    id: number;
    from: string;
    to: string;
    type: string;
    distance: number;
    price: number;
    status: string;
    createdAt: Date;
}
