import { Component, OnInit } from '@angular/core';
// import CryptoJS from 'crypto-js';
import { Router } from '@angular/router';
import { ChatService } from '../chat.service';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {
  messages = [];
  connection;
  message;

  constructor(private router: Router, private chatService: ChatService, private authenticationService: AuthenticationService) {
   
  }


  logOut() {
    this.authenticationService.logout();
    this.router.navigate(['/login'])

  }

  sendMessage() {
    this.chatService.sendMessage('sdasdasd');
    this.message = '';
  }

  ngOnInit() {
    this.connection = this.chatService.getMessages().subscribe(message => {
      this.messages.push(message);
    })
  }

  ngOnDestroy() {
    this.connection.unsubscribe();
  }
}
