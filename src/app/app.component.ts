import { Component, OnInit } from '@angular/core';
import { MessagingService } from './messenging.service';
import { AuthService } from './auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'city-brew-scheduling';

  message;

  constructor(private messaging: MessagingService, private auth: AuthService) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      this.messaging.requestPermission(user.uid);
      this.messaging.receiveMessage();
      this.message = this.messaging.currentMessage;
    });
  }
}
