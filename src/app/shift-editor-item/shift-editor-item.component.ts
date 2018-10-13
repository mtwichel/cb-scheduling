import { Component, OnInit } from '@angular/core';
import { ResizeEvent } from 'angular-resizable-element';

@Component({
  selector: 'app-shift-editor-item',
  templateUrl: './shift-editor-item.component.html',
  styleUrls: ['./shift-editor-item.component.scss']
})
export class ShiftEditorItemComponent implements OnInit {

  public style: object = {};
  displayedColumns: string[] = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
  dataSource = [
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
    {none: 'none'},
  ];

  constructor() { }

  ngOnInit() {
  }

  validate(event: ResizeEvent): boolean {
    const MIN_DIMENSIONS_PX = 10;
    if (
      event.rectangle.width &&
      event.rectangle.height &&
      (event.rectangle.width < MIN_DIMENSIONS_PX ||
        event.rectangle.height < MIN_DIMENSIONS_PX)
    ) {
      return false;
    }
    return true;
  }

  onResizeEnd(event: ResizeEvent): void {
    this.style = {
      position: 'absolute',
      left: `${event.rectangle.left}px`,
      top: `${event.rectangle.top}px`,
      width: `${event.rectangle.width}px`,
      height: `${event.rectangle.height}px`
    };
    console.log(`top: ${event.rectangle.top}, bottom: ${event.rectangle.bottom}, height: ${Math.floor(event.rectangle.height / 50)}`);
  }

}
