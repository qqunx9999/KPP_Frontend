import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from './auth/auth.service';
import { LocalAuthGuard } from './auth/local-auth.guard';

@Controller()
export class AppController {
    constructor(
      private readonly appService: AppService,
      private authService: AuthService  
    ) {}

    @Get()
<<<<<<< HEAD
    getHello(): string {
=======
    getHello(): Promise<void> { //void
>>>>>>> 30919489f8d44dec1e67a087eafef30be1717b2d
      return this.appService.getHello();
    }

    @UseGuards(LocalAuthGuard)  
    @Post('auth/login')
    async login(@Request() req) {
      return this.authService.login(req.user);
    }
}