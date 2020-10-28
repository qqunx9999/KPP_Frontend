// import * as nodemailer from 'nodemailer'; 
 
// export class GMailService { 
//   private _transporter: nodemailer.Transporter; 
//   constructor() { 
//     this._transporter = nodemailer.createTransport( 
//       `smtps://xza00pk01%40gmail.com:0847078789@smtp.gmail.com` 
//     ); 
//   } 
//   sendMail(to: string, subject: string, content: string) 
//   : Promise<void> 
//   { 
//     let options = { 
//       from: 'xza00pk01@gmail.com', 
//       to: to, 
//       subject: subject, 
//       text: content 
//     } 

//     return new Promise<void> ( 
//       (resolve: (msg: any) => void,  
//         reject: (err: Error) => void) => { 
//           this._transporter.sendMail(  
//             options, (error, info) => { 
//               if (error) { 
//                 console.log(`error: ${error}`); 
//                 reject(error); 
//               } else { 
//                   console.log(`Message Sent 
//                     ${info.response}`); 
//                   resolve(`Message Sent  
//                     ${info.response}`); 
//               } 
//           }) 
//         } 
//     ); 
//   } 
// } 
