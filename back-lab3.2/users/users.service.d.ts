import { Repository } from 'typeorm';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    findAll(): Promise<User[]>;
    findOne(login: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(login: string, updateUserDto: UpdateUserDto): Promise<User>;
}
