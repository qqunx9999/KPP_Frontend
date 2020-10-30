import { Injectable } from '@nestjs/common';
//import { GMailService } from './GMailService';

@Injectable()
export class AppService {
<<<<<<< HEAD
  getHello(): string {
    
    // let gmailService = new GMailService(); 
    // gmailService.sendMail( 
=======
  async getHello(): Promise<void> {
    // let gmailService = new GMailService(); 
    
    // return gmailService.sendMail( 
>>>>>>> 30919489f8d44dec1e67a087eafef30be1717b2d
    //   "unnop.nu@ku.th",  
    //   "subject2",  
    //   "content2").then( (msg) => { 
    //     console.log(`sendMail result :(${msg})`); 
    // } ); 
<<<<<<< HEAD

    return "hello world";
=======
>>>>>>> 30919489f8d44dec1e67a087eafef30be1717b2d
  }
}
