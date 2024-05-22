"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const addresses_service_1 = require("./addresses.service");
const addresses_controller_1 = require("./addresses.controller");
const address_entity_1 = require("./address.entity");
let AddressesModule = class AddressesModule {
};
exports.AddressesModule = AddressesModule;
exports.AddressesModule = AddressesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([address_entity_1.Address])],
        providers: [addresses_service_1.AddressesService],
        controllers: [addresses_controller_1.AddressesController],
    })
], AddressesModule);
//# sourceMappingURL=addresses.module.js.map