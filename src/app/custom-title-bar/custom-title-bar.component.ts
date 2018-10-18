import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../auth.service';
import { AngularFirestore } from 'angularfire2/firestore';
import { Subject } from 'rxjs';
import { NgTemplateOutlet } from '@angular/common';
import { Router } from '@angular/router';

export interface Link {
  text: string;
  url: string;
}

export interface User {
  role: string;
}

@Component({
  selector: 'app-custom-title-bar',
  templateUrl: './custom-title-bar.component.html',
  styleUrls: ['./custom-title-bar.component.scss']
})
export class CustomTitleBarComponent implements OnInit {

  role: string;
  links: Link[] = [];

  constructor(public auth: AuthService, private db: AngularFirestore, private router: Router) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        this.db.doc(`users/${user.uid}`).valueChanges().subscribe(obj  => {
          this.role = (obj as any).role;
          switch (this.role) {
            case 'editor':
            this.links = [
              {
                text: 'Home',
                url: '/home',
              },
              {
                text: 'Roster',
                url: '/roster',
              },
              {
                text: 'Schedules',
                url: '',
              },
              ];
            break;
            case 'viewer':
              this.links = [
                {
                  text: 'Home',
                  url: '/home',
                },
                {
                  text: 'Roster',
                  url: '/roster',
                },
                {
                  text: 'Avalibility',
                  url: '/avalibility'
                },
              ];
              break;
            default:
              this.links = [
                {
                  text: 'Home',
                  url: '/home',
                },
                {
                  text: 'Roster',
                  url: '/roster',
                },
              ];
          }
        });
      }
    });
  }
}
