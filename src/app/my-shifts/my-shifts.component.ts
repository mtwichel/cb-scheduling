import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth.service';
import { Observable, Subject } from 'rxjs';


export interface Shift {
  date: Date;
  beginTime: any;
  endTime: any;
}

@Component({
  selector: 'app-my-shifts',
  templateUrl: './my-shifts.component.html',
  styleUrls: ['./my-shifts.component.scss']
})
export class MyShiftsComponent implements OnInit {

  displayedColumns: string[] = ['dayOfWeek', 'date', 'shift', 'hours'];
  shifts$: Observable<Shift[]>;
  totalHours$: Subject<number> = new Subject<number>();
  totalHours: number;

  constructor(
    private db: AngularFirestore,
    private auth: AuthService,
    ) {}

  ngOnInit() {
    this.auth.user.subscribe(user => {
      if (user) {
        const curr = new Date;
        const first = curr.getDate() - 1 - curr.getDay();
        const last = first + 6;
        console.log(`${new Date(curr.setDate(first))} , ${new Date(curr.setDate(last))}`);
        this.shifts$ = this.db.collection(`users/${user.uid}/shifts`, ref => ref
          .where('date', '>=', new Date(new Date(curr.setDate(first)).setHours(0, 0, 0, 0)))
          .where('date', '<=', new Date(new Date(curr.setDate(last)).setHours(0, 0, 0, 0)))
          .orderBy('date', 'asc')).valueChanges() as Observable<Shift[]>;
        this.shifts$.subscribe(shifts => {
          const total = shifts.map(t => (t.endTime.toDate().valueOf() - t.beginTime.toDate().valueOf()) / 3600000).reduce((acc, value) => acc + value, 0);
          // this.totalHours$.next(total);
          this.totalHours = total;
        });
      }
    });
  }

}
