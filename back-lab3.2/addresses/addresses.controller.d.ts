import { AddressesService } from './addresses.service';
import { Address } from './address.entity';
export declare class AddressesController {
    private readonly addressesService;
    constructor(addressesService: AddressesService);
    findAll(): Promise<Address[]>;
    create(address: Partial<Address>): Promise<Address>;
}
