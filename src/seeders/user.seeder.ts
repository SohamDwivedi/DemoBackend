// user.seeder.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';

@Injectable()
export class UserSeeder {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  async seed() {
    const usersToCreate = [
      { email: 'user1@gmail.com', password: 'password1' },
      { email: 'user2@gmail.com', password: 'password2' },
      // Add more user data as needed
    ];

    await Promise.all(
      usersToCreate.map(async userData => {
        const existingUser = await this.userRepository.findOne({where:{ email: userData.email } });
        if (existingUser) {
          // User already exists, update the record
          existingUser.password = userData.password;
          return this.userRepository.save(existingUser);
        } else {
          // User does not exist, create a new record
          const newUser = this.userRepository.create(userData);
          return this.userRepository.save(newUser);
        }
      }),
    );
  }
}
