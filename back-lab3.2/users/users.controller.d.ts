import { UsersService } from './users.service';
import { User } from './user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(): Promise<User[]>;
    findOne(login: string): Promise<User>;
    create(createUserDto: CreateUserDto): Promise<User>;
    update(login: string, updateUserDto: UpdateUserDto): Promise<User>;
}
