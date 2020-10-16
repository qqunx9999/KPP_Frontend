import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity'

@Injectable()
export class UsersService {
    private newusers = [];
    
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
       
    ) {
        
    }

    async findOne(username: string): Promise<User | undefined> {
        this.userRepository.find()
            .then(setuser => {
                this.newusers = setuser;
            }); 
        return this.newusers.find(eachuser => eachuser.email === username);
    }
}
