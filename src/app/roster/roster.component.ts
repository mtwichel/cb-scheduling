import { Component, OnInit, Input } from '@angular/core';
import { PhonePipe } from '../phone.pipe';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

export interface RosterEntry {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  title: string;
  email: string;
}

@Component({
  selector: 'app-roster',
  templateUrl: './roster.component.html',
  styleUrls: ['./roster.component.scss']
})
export class RosterComponent implements OnInit {

  @Input() storeNum: number;
  roster$: Observable<any>;


  constructor(private db: AngularFirestore) { }

  ngOnInit() {
    this.roster$ = this.db.collection('storeRosters', ref => ref.where('storeNumber', '==', this.storeNum)).valueChanges();
  }

}
