import { Injectable } from '@nestjs/common';
//import { GMailService } from './GMailService';

@Injectable()
export class AppService {
  async getHello(): Promise<void> {
    // let gmailService = new GMailService(); 
    
    // return gmailService.sendMail( 
    //   "unnop.nu@ku.th",  
    //   "subject2",  
    //   "content2").then( (msg) => { 
    //     console.log(`sendMail result :(${msg})`); 
    // } ); 
  }
}
