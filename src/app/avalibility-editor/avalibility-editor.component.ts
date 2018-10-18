import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';

@Component({
  selector: 'app-avalibility-editor',
  templateUrl: './avalibility-editor.component.html',
  styleUrls: ['./avalibility-editor.component.scss']
})
export class AvalibilityEditorComponent implements OnInit {

  myForm: FormGroup;

  constructor(private fb: FormBuilder) { }

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
  }


  get sundayRanges() {
    return this.myForm.get('sundayRanges') as FormArray;
  }
  get mondayRanges() {
    return this.myForm.get('mondayRanges') as FormArray;
  }
  get tuesdayRanges() {
    return this.myForm.get('tuesdayRanges') as FormArray;
  }
  get wednesdayRanges() {
    return this.myForm.get('wednesdayRanges') as FormArray;
  }
  get thursdayRanges() {
    return this.myForm.get('thursdayRanges') as FormArray;
  }
  get fridayRanges() {
    return this.myForm.get('fridayRanges') as FormArray;
  }
  get saturdayRanges() {
    return this.myForm.get('saturdayRanges') as FormArray;
  }

  addTimeRange(day) {
    const range = this.fb.group({
      startTime: [],
      endTime: [],
    });

    switch (day) {
      case 'sunday':
      this.sundayRanges.push(range);
      break;
      case 'monday':
      this.mondayRanges.push(range);
      break;
      case 'tuesday':
      this.tuesdayRanges.push(range);
      break;
      case 'wednesday':
      this.wednesdayRanges.push(range);
      break;
      case 'thursday':
      this.thursdayRanges.push(range);
      break;
      case 'friday':
      this.fridayRanges.push(range);
      break;
      case 'saturday':
      this.saturdayRanges.push(range);
      break;
    }
  }

  deleteTimeRange(day, i) {
    switch (day) {
      case 'sunday':
      this.sundayRanges.removeAt(i);
      break;
      case 'monday':
      this.mondayRanges.removeAt(i);
      break;
      case 'tuesday':
      this.tuesdayRanges.removeAt(i);
      break;
      case 'wednesday':
      this.wednesdayRanges.removeAt(i);
      break;
      case 'thursday':
      this.thursdayRanges.removeAt(i);
      break;
      case 'friday':
      this.fridayRanges.removeAt(i);
      break;
      case 'saturday':
      this.saturdayRanges.removeAt(i);
      break;
    }
  }

}
