import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-avalibility-editor',
  templateUrl: './avalibility-editor.component.html',
  styleUrls: ['./avalibility-editor.component.scss']
})
export class AvalibilityEditorComponent implements OnInit {

  myForm: FormGroup;
  days = [
    'sunday',
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday'
  ];

  constructor(private fb: FormBuilder, private db: AngularFirestore, private auth: AuthService) { }

  ngOnInit() {
    this.myForm = this.fb.group({
      sundayRanges: this.fb.array([]),
      mondayRanges: this.fb.array([]),
      tuesdayRanges: this.fb.array([]),
      wednesdayRanges: this.fb.array([]),
      thursdayRanges: this.fb.array([]),
      fridayRanges: this.fb.array([]),
      saturdayRanges: this.fb.array([]),
    });
    this.setCurrentValue();
  }

  getRangesFromDay(day) {
    switch (day) {
      case 0:
        return this.myForm.get('sundayRanges') as FormArray;
      case 1:
        return this.myForm.get('mondayRanges') as FormArray;
      case 2:
        return this.myForm.get('tuesdayRanges') as FormArray;
      case 3:
        return this.myForm.get('wednesdayRanges') as FormArray;
      case 4:
        return this.myForm.get('thursdayRanges') as FormArray;
      case 5:
        return this.myForm.get('fridayRanges') as FormArray;
      case 6:
        return this.myForm.get('saturdayRanges') as FormArray;
    }
  }

  getFormArrayName(day): string {
    return `${this.days[day]}Ranges`;
  }

  addTimeRange(day) {
    const range = this.fb.group({
      startTime: [],
      endTime: [],
    });
    this.getRangesFromDay(day).push(range);
  }

  deleteTimeRange(day, i) {
    this.getRangesFromDay(day).removeAt(i);
  }

  async save() {
    this.auth.user.subscribe(user => {
      this.db.doc(`users/${user.uid}`).update({ 'avalibility': this.myForm.value });
    });
  }

  async setCurrentValue() {
    this.auth.user.subscribe(user => {
      console.log(`${user.uid}`);
      this.db.doc(`users/${user.uid}`).get().subscribe(doc => {
        console.log(doc.data().avalibility);
        this.myForm.setValue(doc.data().avalibility);
      });
    });
  }

}
