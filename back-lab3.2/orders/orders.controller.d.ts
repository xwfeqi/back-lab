import { OrdersService } from './orders.service';
import { Order } from './interfaces/order.interface';
export declare class OrdersController {
    private readonly ordersService;
    constructor(ordersService: OrdersService);
    findAll(): Order[];
    findOne(id: string): Order;
    create(order: Order): void;
    update(id: string, order: Partial<Order>): void;
}
