import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShiftEditorItemComponent } from './shift-editor-item.component';

describe('ShiftEditorItemComponent', () => {
  let component: ShiftEditorItemComponent;
  let fixture: ComponentFixture<ShiftEditorItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShiftEditorItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShiftEditorItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
