import { Order } from '../orders/order.entity';
export declare class User {
    id: number;
    login: string;
    password: string;
    role: string;
    orders: Order[];
}
