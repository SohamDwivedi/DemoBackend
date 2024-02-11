// auth.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../user/entities/user.entity';
import { JwtService as NestJwtService } from '@nestjs/jwt';
@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(User)
        private readonly userRepository: Repository<User>,
        private jwtService: NestJwtService
    ) {}

    async signUp(email: string, password: string){
        const chkuser = await this.userRepository.findOne({ where: { email}});
        if(chkuser){
            return {success:false,data:'email already exists'}
        }
        const user = this.userRepository.create({ email, password });
        return {success:true,data:await this.userRepository.save(user)};
    }

    async signIn(email: string, password: string){
        const user = await this.userRepository.findOne({ where: { email, password } });
        if (!user) {
            return {success:false,data:'User not found'};
        }
        return {success:true,data:await this.jwtService.signAsync({email:email}, { expiresIn: '1m' })}
        // return {success:true,data:{email:user.email,id:user.id}};
    }

    async validateUser(email: string, password: string): Promise<boolean> {
        // Implement your validation logic here, e.g., check against database
        const user = await this.userRepository.findOne({ where: { email, password } });
        if (!user || user.password !== password) {
            return false;
        }
        return true;
    }
}
