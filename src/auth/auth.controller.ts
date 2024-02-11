// auth.controller.ts
import { Controller, Post, Body, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('signup')
    async signUp(@Body('email') email: string, @Body('password') password: string) {
        return this.authService.signUp(email, password);
    }

    @Post('signin')
    async signIn(
        @Body('email') email: string, 
        @Body('password') password: string,
        @Res({passthrough:true}) response:Response
        ) {
        let signIN = await this.authService.signIn(email, password);
        // if(signIN.success){
        //     response.cookie('jwt',signIN.data,{httpOnly:true});
        // }else{
        //     response.cookie('jwt','',{httpOnly:true});
        // }
        return {
            message:signIN.success,
            jwt:signIN.data

        };
    }
}
