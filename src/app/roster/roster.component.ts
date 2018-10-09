import { Component, OnInit, Input } from '@angular/core';
import { PhonePipe } from '../phone.pipe';

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

  @Input() roster: RosterEntry[];

  constructor() { }

  ngOnInit() {
  }

}
