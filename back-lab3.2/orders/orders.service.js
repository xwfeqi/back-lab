"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const order_entity_1 = require("./order.entity");
let OrdersService = class OrdersService {
    constructor(ordersRepository) {
        this.ordersRepository = ordersRepository;
    }
    async updateStatus(orderId, status, user) {
        const order = await this.ordersRepository.findOne(orderId);
        if (!order) {
            throw new common_1.NotFoundException('Order not found');
        }
        const allowedStatuses = this.getAllowedStatuses(order.status, user.role);
        if (!allowedStatuses.includes(status)) {
            throw new common_1.BadRequestException('Status update not allowed');
        }
        order.status = status;
        return this.ordersRepository.save(order);
    }
    getAllowedStatuses(currentStatus, userRole) {
        const statuses = {
            Customer: {
                Active: ['Rejected'],
            },
            Driver: {
                Active: ['In progress'],
                'In progress': ['Done'],
            },
            Admin: {
                Active: ['Rejected', 'In progress'],
                'In progress': ['Done'],
            },
        };
        return statuses[userRole][currentStatus] || [];
    }
};
exports.OrdersService = OrdersService;
exports.OrdersService = OrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(order_entity_1.Order)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], OrdersService);
//# sourceMappingURL=orders.service.js.map