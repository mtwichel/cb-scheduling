import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable, Subject } from 'rxjs';
import { RosterEntry } from '../roster/roster.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss']
})
export class RosterPageComponent implements OnInit {

  selected: number;
  stores$: Observable<any>;
  store$: Subject<number> = new Subject<number>();

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    ) { }

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        this.stores$ = this.db.doc(`users/${user.uid}`).valueChanges();
        this.stores$.subscribe(event => {
          this.store$.next(event.store);
        });
      }
    });
  }

}
