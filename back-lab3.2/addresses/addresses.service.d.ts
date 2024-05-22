import { Repository } from 'typeorm';
import { Address } from './address.entity';
export declare class AddressesService {
    private addressesRepository;
    constructor(addressesRepository: Repository<Address>);
    findAll(): Promise<Address[]>;
    findOne(name: string): Promise<Address>;
    create(address: Partial<Address>): Promise<Address>;
}
