import { Component, ChangeDetectionStrategy } from '@angular/core';
import {CalendarEvent, CalendarEventTimesChangedEvent, CalendarView } from 'angular-calendar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-shift-editor-item',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './shift-editor-item.component.html',
  styles: [
    `
      .drag-active {
        position: relative;
        z-index: 1;
        pointer-events: none;
      }
      .drag-over {
        background-color: #eee;
      }
    `
  ]
})
export class ShiftEditorItemComponent {
  CalendarView = CalendarView;
  view = CalendarView.Day;

  externalEvents: CalendarEvent[] = [
    {
      title: 'Event 1',
      start: new Date(),
      color: {
        primary: '#ad2121',
        secondary: '#FAE3E3'
      },
      draggable: true
    },
    {
      title: 'Event 2',
      start: new Date(),
      color: {
        primary: '#1e90ff',
        secondary: '#D1E8FF'
      },
      draggable: true
    }
  ];

  refresh = new Subject<void>();
  viewDate: Date = new Date();
  events: CalendarEvent[] = [];

  eventDropped({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    const externalIndex = this.externalEvents.indexOf(event);
    console.log(externalIndex, newStart, newEnd);
    if (externalIndex > -1) {
      this.externalEvents.splice(externalIndex, 1);
      this.events.push(event);
    }
    event.start = newStart;
    if (newEnd) {
      event.end = newEnd;
    }
    this.events = [...this.events];
  }

  externalDrop(event: CalendarEvent) {
    if (this.externalEvents.indexOf(event) === -1) {
      this.events = this.events.filter(iEvent => iEvent !== event);
      this.externalEvents.push(event);
    }
  }
}
