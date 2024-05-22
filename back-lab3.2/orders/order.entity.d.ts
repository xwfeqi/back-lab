import { User } from '../users/user.entity';
export declare class Order {
    id: number;
    from: string;
    to: string;
    type: string;
    distance: number;
    price: number;
    status: string;
    user: User;
}
