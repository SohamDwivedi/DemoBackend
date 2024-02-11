// user.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity'; // Assuming your user entity is in the same directory
import { UserService } from './user.service';
import { UserController } from './user.controller';

@Module({
    imports: [TypeOrmModule.forFeature([User])], // Import TypeOrmModule.forFeature() here
    providers: [UserService],
    controllers: [UserController],
    exports: [UserService], // Ensure UserService is exported if needed
})
export class UserModule {}
