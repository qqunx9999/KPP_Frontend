import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { ObjectID } from 'mongodb';
import Notifications from 'src/entities/notification.entity';

@Injectable()
export class NotificationService {
    constructor(
        @InjectRepository(Notifications)
        private notificationsRepository: Repository<Notifications>
    ){}

    async allUnread(userID: ObjectID): Promise <Notifications[]> {
        return this.notificationsRepository.find({where:{userID: userID, object_type: 'chat'}})
    }

    async friendRequest(userID: ObjectID): Promise <Notifications[]> {
        return this.notificationsRepository.find({where:{userID: userID, object_type: 'friend_request'}})
    }

    // async newMessage(userID: )
}



