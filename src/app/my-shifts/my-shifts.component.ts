import { Component, OnInit } from '@angular/core';
import { Time } from '@angular/common';

export interface Shift {
  date: Date;
  beginTime: Date;
  endTime: Date;
}

@Component({
  selector: 'app-my-shifts',
  templateUrl: './my-shifts.component.html',
  styleUrls: ['./my-shifts.component.scss']
})
export class MyShiftsComponent implements OnInit {

  displayedColumns: string[] = ['dayOfWeek', 'date', 'shift', 'hours'];
  shifts: Shift[] = [
    {date: new Date('5/30/18'), beginTime: new Date('5/30/18 6:00 pm'), endTime: new Date('5/30/18 10:00 pm'), },
    {date: new Date('5/31/18'), beginTime: new Date('5/30/18 4:00 pm'), endTime: new Date('5/30/18 10:30 pm'), },
    {date: new Date('6/1/18'), beginTime: new Date('5/30/18 6:00 pm'), endTime: new Date('5/30/18 10:15 pm'), },
    {date: new Date('6/2/18'), beginTime: new Date('5/30/18 6:00 pm'), endTime: new Date('5/30/18 10:00 pm'), },
    {date: new Date('6/3/18'), beginTime: new Date('5/30/18 6:00 pm'), endTime: new Date('5/30/18 10:00 pm'), },
    {date: new Date('6/4/18'), beginTime: new Date('5/30/18 6:00 pm'), endTime: new Date('5/30/18 10:00 pm'), },
  ];
  constructor() {}

  getTotalHours() {
    return this.shifts.map(t => (t.endTime.valueOf() - t.beginTime.valueOf()) / 3600000).reduce((acc, value) => acc + value, 0);
  }

  ngOnInit() {
  }

}
