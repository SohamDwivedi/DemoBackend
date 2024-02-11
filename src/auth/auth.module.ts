// auth.module.ts
import { Module } from '@nestjs/common';
import { UserModule } from '../user/user.module'; // Import UserModule
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '../user/entities/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
        UserModule,
        JwtModule.register({
            secret:'secret',
            signOptions:{
                expiresIn:'1hr'
            }
        }),
    ], // Include UserModule here
    providers: [AuthService],
    controllers: [AuthController],
})
export class AuthModule {}
