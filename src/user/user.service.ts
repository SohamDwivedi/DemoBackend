// user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
    ) {}

    async findAll(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findOne(id: any): Promise<User> {
        return this.userRepository.findOne(id);
    }

    async create(user: User): Promise<User> {
        return this.userRepository.save(user);
    }

    async update(id: any, user: User): Promise<User> {
        await this.userRepository.update(id, user);
        return this.userRepository.findOne(id);
    }

    async remove(id: number): Promise<void> {
        await this.userRepository.delete(id);
    }
}
