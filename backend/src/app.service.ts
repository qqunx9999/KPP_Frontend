import { Injectable } from '@nestjs/common';
//import { GMailService } from './GMailService';

@Injectable()
export class AppService {
  getHello(): string {
    
    // let gmailService = new GMailService(); 
    // gmailService.sendMail( 
    //   "unnop.nu@ku.th",  
    //   "subject2",  
    //   "content2").then( (msg) => { 
    //     console.log(`sendMail result :(${msg})`); 
    // } ); 

    return "hello world";
  }
}
