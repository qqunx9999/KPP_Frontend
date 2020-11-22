import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
    ) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username.toLowerCase());
        var bcrypt =  require('bcrypt'); //uncomment this to hash
        // if (user && user.password === pass){  //bcrypt.compareSync(pass, user.password)) { //uncomment this to hash 
        //     const { password, ...result } = user; //user.password === pass
        //     return result;
        // }
        if (user && bcrypt.compareSync(pass, user.password)){  //bcrypt.compareSync(pass, user.password)) { //uncomment this to hash 
            const { password, ...result } = user; //user.password === pass
            return result;
        }
        return null;
    }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        console.log(this.jwtService.sign(payload))
        return {
            access_token: this.jwtService.sign(payload),
            loginOrnot: (!user.isloggedin),
            userID: user.userID,     
        };
    }

   

}
