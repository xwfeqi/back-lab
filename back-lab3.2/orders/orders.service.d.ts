import { Repository } from 'typeorm';
import { Order } from './order.entity';
import { User } from '../users/user.entity';
export declare class OrdersService {
    private ordersRepository;
    constructor(ordersRepository: Repository<Order>);
    updateStatus(orderId: number, status: string, user: User): Promise<Order>;
    private getAllowedStatuses;
}
