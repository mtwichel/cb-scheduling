import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { RosterEntry } from '../roster/roster.component';

@Component({
  selector: 'app-roster-page',
  templateUrl: './roster-page.component.html',
  styleUrls: ['./roster-page.component.scss']
})
export class RosterPageComponent implements OnInit {

  selected: number;
  stores: Observable<any>;
  rosterResults: Observable<any>;

  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.stores = this.db.doc('users/vwJJx28rmcIZJop0LdOU').valueChanges();
    this.stores.subscribe(event => {
      this.selected = event.store;
      this.rosterResults = this.db.collection('storeRosters', ref => ref.where('storeNumber', '==', this.selected)).valueChanges();
    });
  }

}
